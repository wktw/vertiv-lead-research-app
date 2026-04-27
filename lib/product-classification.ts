import type { ProductFitTag } from "./types";

const TAG_KEYWORDS: Array<{ tag: ProductFitTag; terms: string[] }> = [
  { tag: "UPS_SYSTEMS", terms: ["ups", "uninterruptible", "liebert", "trinergy"] },
  { tag: "SWITCHGEAR_SWITCHBOARDS", terms: ["switchgear", "switchboard", "ul1558", "ul891"] },
  { tag: "PDU_RPP", terms: ["pdu", "rpp", "ppc", "liebert tfx", "liebert rxv"] },
  { tag: "BUSWAY_OVERHEAD_DISTRIBUTION", terms: ["busway", "overhead power", "powerbar"] },
  { tag: "STATIC_TRANSFER_SWITCHES", terms: ["static transfer switch", "sts2"] },
  { tag: "BESS_GRID_STORAGE", terms: ["bess", "battery energy storage", "grid storage", "energycore"] },
  { tag: "PREFAB_DATA_CENTER_AI_HPC", terms: ["ai", "hpc", "high density", "liquid cooling", "onecore", "hdx"] },
  { tag: "PREFAB_DATA_CENTER_STANDARD_EDGE", terms: ["edge", "smartmod", "megamod", "smartrow"] },
  { tag: "WHITESPACE_INFRASTRUCTURE", terms: ["whitespace", "smartrun"] },
  { tag: "PREFAB_POWER_MODULES", terms: ["power module", "lv+mv"] },
  { tag: "POWER_SKIDS", terms: ["power skid"] },
  { tag: "INTEGRATED_UPS_SWITCHGEAR", terms: ["integrated ups", "powernexus"] },
  { tag: "LIFECYCLE_SERVICES", terms: ["commissioning", "preventive maintenance", "remote monitoring", "battery services"] }
];

export function classifyProductFit(text: string): ProductFitTag[] {
  const normalized = text.toLowerCase();
  const matched = TAG_KEYWORDS.filter(({ terms }) => terms.some((term) => normalized.includes(term))).map(({ tag }) => tag);

  if (matched.length === 0) return ["UNKNOWN"];

  const thermalOnly = normalized.includes("thermal") &&
    !["ai", "hpc", "liquid", "smartrun", "prefab", "modular"].some((term) => normalized.includes(term));

  if (thermalOnly) return ["UNKNOWN"];

  return [...new Set(matched)];
}
