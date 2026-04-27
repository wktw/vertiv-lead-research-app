import { describe, expect, it } from "vitest";
import { dedupeLeads } from "../lib/deduplication";

describe("dedupeLeads", () => {
  it("removes duplicates by fingerprint", () => {
    const deduped = dedupeLeads([
      { accountName: "A", projectName: "P", sourceUrl: "https://x.com", contactEmail: "a@x.com" },
      { accountName: "A", projectName: "P", sourceUrl: "https://x.com", contactEmail: "a@x.com" }
    ]);
    expect(deduped).toHaveLength(1);
  });
});
