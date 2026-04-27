import { describe, expect, it } from "vitest";
import { scoreLead } from "../lib/lead-scoring";

describe("scoreLead", () => {
  it("returns Priority Outreach in top band", () => {
    const scored = scoreLead({
      geographyFit: 15,
      verticalFit: 15,
      triggerStrength: 20,
      personaRelevance: 15,
      productFit: 10,
      sourceQuality: 10,
      timingRecency: 10,
      servicesExpansion: 5
    });
    expect(scored.total).toBe(100);
    expect(scored.band).toBe("Priority Outreach");
  });
});
