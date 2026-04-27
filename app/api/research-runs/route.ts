import { NextRequest, NextResponse } from "next/server";
import { classifyProductFit } from "@/lib/product-classification";
import { enforceEvidenceRules } from "@/lib/evidence";
import { scoreLead } from "@/lib/lead-scoring";
import { validateExtraction } from "@/lib/extraction-schema";

export const runtime = "nodejs";

type ResearchRequest = {
  sourceUrls: string[];
  targetKeywords: string[];
  targetGeography: string;
  targetVertical: string;
  projectTriggerFocus: string;
  productFamilyFocus: string[];
};

export async function POST(request: NextRequest) {
  const body = (await request.json()) as ResearchRequest;

  const leads = await Promise.all(
    body.sourceUrls.map(async (sourceUrl) => {
      const response = await fetch(sourceUrl, {
        method: "GET",
        signal: AbortSignal.timeout(12000),
        headers: { "User-Agent": "VertivResearchBot/1.0" }
      });
      const text = await response.text();
      const evidenceSnippet = text.replace(/\s+/g, " ").slice(0, 500);
      const fit = classifyProductFit(`${body.targetKeywords.join(" ")} ${evidenceSnippet}`);

      const lead = {
        accountName: null,
        projectName: null,
        location: body.targetGeography || null,
        projectStage: null,
        projectTrigger: body.projectTriggerFocus || null,
        contactName: null,
        contactTitle: null,
        contactEmail: null,
        contactPhone: null,
        sourceUrl,
        evidenceSnippet,
        likelyProductFamilyFit: fit,
        likelyProductNames: [],
        buyerPersonaCategory: null,
        confidenceScore: fit.includes("UNKNOWN") ? 0.35 : 0.68,
        recommendedNextAction: "Manual verification with account and contact enrichment",
        inferenceReasoning: "Initial MVP inference from keyword and page-text signal"
      };

      const parsed = validateExtraction(lead);
      if (!parsed.success) {
        return {
          ...lead,
          validationErrors: parsed.error.flatten(),
          status: "NEEDS_VERIFICATION"
        };
      }

      const evidenceCheck = enforceEvidenceRules(lead);
      const score = scoreLead({
        geographyFit: 10,
        verticalFit: body.targetVertical ? 10 : 4,
        triggerStrength: body.projectTriggerFocus ? 10 : 5,
        personaRelevance: 5,
        productFit: fit.includes("UNKNOWN") ? 2 : 8,
        sourceQuality: 6,
        timingRecency: 5,
        servicesExpansion: 3
      });

      return {
        ...lead,
        status: evidenceCheck.status,
        score: score.total,
        scoreBand: score.band,
        evidenceFlags: evidenceCheck.reasons
      };
    })
  );

  return NextResponse.json({ runStatus: "completed", leads });
}
