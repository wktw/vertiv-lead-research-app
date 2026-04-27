import type { ExtractionResult } from "./types";

export function enforceEvidenceRules(lead: ExtractionResult): { isValid: boolean; status: "NEW" | "NEEDS_VERIFICATION"; reasons: string[] } {
  const reasons: string[] = [];
  if (!lead.sourceUrl) reasons.push("Missing source URL");
  if (!lead.evidenceSnippet?.trim()) reasons.push("Missing evidence snippet");
  if (!lead.contactEmail && !lead.contactPhone) reasons.push("Missing contact detail for direct outreach");

  const status = reasons.includes("Missing contact detail for direct outreach") ? "NEEDS_VERIFICATION" : "NEW";
  return { isValid: reasons.length < 3, status, reasons };
}
