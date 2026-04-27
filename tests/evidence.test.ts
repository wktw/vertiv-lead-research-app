import { describe, expect, it } from "vitest";
import { enforceEvidenceRules } from "../lib/evidence";

describe("enforceEvidenceRules", () => {
  it("marks missing contact details as needs verification", () => {
    const result = enforceEvidenceRules({
      accountName: null,
      projectName: null,
      location: null,
      projectStage: null,
      projectTrigger: null,
      contactName: null,
      contactTitle: null,
      contactEmail: null,
      contactPhone: null,
      sourceUrl: "https://example.com",
      evidenceSnippet: "Public bid cites UPS replacement.",
      likelyProductFamilyFit: ["UPS_SYSTEMS"],
      likelyProductNames: [],
      buyerPersonaCategory: null,
      confidenceScore: 0.4,
      recommendedNextAction: "Find facilities stakeholder"
    });

    expect(result.status).toBe("NEEDS_VERIFICATION");
  });
});
