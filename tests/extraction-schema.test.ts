import { describe, expect, it } from "vitest";
import { validateExtraction } from "../lib/extraction-schema";

describe("validateExtraction", () => {
  it("accepts valid extraction payload", () => {
    const parsed = validateExtraction({
      accountName: "Sample Account",
      projectName: "Project A",
      location: "Texas",
      projectStage: "Planning",
      projectTrigger: "UPS replacement",
      contactName: "Jane Doe",
      contactTitle: "Facilities Director",
      contactEmail: "jane@example.com",
      contactPhone: null,
      sourceUrl: "https://example.com/rfp",
      evidenceSnippet: "Bid doc states switchgear upgrade and UPS expansion in Q4.",
      likelyProductFamilyFit: ["UPS_SYSTEMS"],
      likelyProductNames: ["Liebert APM2"],
      buyerPersonaCategory: "Facilities Director",
      confidenceScore: 0.82,
      recommendedNextAction: "Verify project budget and timeline"
    });
    expect(parsed.success).toBe(true);
  });
});
