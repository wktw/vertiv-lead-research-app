import type { SourceStatus } from "./types";

export function evaluateSourceAccess(status: SourceStatus): { allowedToFetch: boolean; requiresApproval: boolean } {
  if (status === "ALLOWED") return { allowedToFetch: true, requiresApproval: false };
  if (status === "BLOCKED") return { allowedToFetch: false, requiresApproval: false };
  return { allowedToFetch: false, requiresApproval: true };
}
