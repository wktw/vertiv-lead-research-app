import { describe, expect, it } from "vitest";
import { classifyProductFit } from "../lib/product-classification";

describe("classifyProductFit", () => {
  it("maps UPS keywords", () => {
    expect(classifyProductFit("RFP calls for UPS replacement and Liebert platform")).toContain("UPS_SYSTEMS");
  });

  it("returns UNKNOWN for thermal-only mention", () => {
    expect(classifyProductFit("thermal retrofit only")).toEqual(["UNKNOWN"]);
  });
});
