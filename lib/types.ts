export const PRODUCT_FIT_TAGS = [
  "UPS_SYSTEMS",
  "SWITCHGEAR_SWITCHBOARDS",
  "PDU_RPP",
  "BUSWAY_OVERHEAD_DISTRIBUTION",
  "STATIC_TRANSFER_SWITCHES",
  "BESS_GRID_STORAGE",
  "PREFAB_DATA_CENTER_AI_HPC",
  "PREFAB_DATA_CENTER_STANDARD_EDGE",
  "WHITESPACE_INFRASTRUCTURE",
  "PREFAB_POWER_MODULES",
  "POWER_SKIDS",
  "INTEGRATED_UPS_SWITCHGEAR",
  "LIFECYCLE_SERVICES",
  "UNKNOWN"
] as const;

export type ProductFitTag = (typeof PRODUCT_FIT_TAGS)[number];

export type LeadStatus =
  | "NEW"
  | "NEEDS_VERIFICATION"
  | "APPROVED"
  | "REJECTED"
  | "EXPORTED"
  | "DO_NOT_CONTACT";

export type SourceStatus = "ALLOWED" | "REVIEW_REQUIRED" | "BLOCKED";

export type ExtractionResult = {
  accountName: string | null;
  projectName: string | null;
  location: string | null;
  projectStage: string | null;
  projectTrigger: string | null;
  contactName: string | null;
  contactTitle: string | null;
  contactEmail: string | null;
  contactPhone: string | null;
  sourceUrl: string;
  evidenceSnippet: string;
  likelyProductFamilyFit: ProductFitTag[];
  likelyProductNames: string[];
  buyerPersonaCategory: string | null;
  confidenceScore: number;
  recommendedNextAction: string;
  inferenceReasoning?: string;
};
