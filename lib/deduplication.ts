export type LeadIdentity = {
  accountName: string | null;
  projectName: string | null;
  sourceUrl: string;
  contactEmail: string | null;
};

export function leadFingerprint(lead: LeadIdentity): string {
  return [lead.accountName ?? "", lead.projectName ?? "", lead.sourceUrl, lead.contactEmail ?? ""].join("|").toLowerCase();
}

export function dedupeLeads<T extends LeadIdentity>(leads: T[]): T[] {
  const seen = new Set<string>();
  return leads.filter((lead) => {
    const key = leadFingerprint(lead);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}
