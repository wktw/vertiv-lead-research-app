import { z } from "zod";
import { PRODUCT_FIT_TAGS } from "./types";

export const extractionSchema = z.object({
  accountName: z.string().nullable(),
  projectName: z.string().nullable(),
  location: z.string().nullable(),
  projectStage: z.string().nullable(),
  projectTrigger: z.string().nullable(),
  contactName: z.string().nullable(),
  contactTitle: z.string().nullable(),
  contactEmail: z.string().email().nullable(),
  contactPhone: z.string().nullable(),
  sourceUrl: z.string().url(),
  evidenceSnippet: z.string().min(10),
  likelyProductFamilyFit: z.array(z.enum(PRODUCT_FIT_TAGS)).min(1),
  likelyProductNames: z.array(z.string()),
  buyerPersonaCategory: z.string().nullable(),
  confidenceScore: z.number().min(0).max(1),
  recommendedNextAction: z.string().min(5),
  inferenceReasoning: z.string().optional()
});

export type ExtractionSchema = z.infer<typeof extractionSchema>;

export function validateExtraction(input: unknown) {
  return extractionSchema.safeParse(input);
}
