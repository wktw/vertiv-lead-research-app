import { describe, expect, it } from "vitest";
import { evaluateSourceAccess } from "../lib/source-registry";

describe("evaluateSourceAccess", () => {
  it("allows ALLOWED domains", () => {
    expect(evaluateSourceAccess("ALLOWED").allowedToFetch).toBe(true);
  });

  it("requires approval for REVIEW_REQUIRED", () => {
    const result = evaluateSourceAccess("REVIEW_REQUIRED");
    expect(result.allowedToFetch).toBe(false);
    expect(result.requiresApproval).toBe(true);
  });
});
