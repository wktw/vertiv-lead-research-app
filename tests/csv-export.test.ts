import { describe, expect, it } from "vitest";
import { toCsv } from "../lib/csv-export";

describe("toCsv", () => {
  it("converts records to csv", () => {
    const csv = toCsv([{ account: "Acme", status: "APPROVED" }]);
    expect(csv).toContain("account,status");
    expect(csv).toContain('"Acme","APPROVED"');
  });
});
