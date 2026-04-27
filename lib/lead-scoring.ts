export type LeadScoreInput = {
  geographyFit: number;
  verticalFit: number;
  triggerStrength: number;
  personaRelevance: number;
  productFit: number;
  sourceQuality: number;
  timingRecency: number;
  servicesExpansion: number;
};

export function scoreLead(input: LeadScoreInput) {
  const total = input.geographyFit + input.verticalFit + input.triggerStrength + input.personaRelevance + input.productFit + input.sourceQuality + input.timingRecency + input.servicesExpansion;
  let band = "Archive unless strategic";
  if (total >= 85) band = "Priority Outreach";
  else if (total >= 70) band = "Good Lead";
  else if (total >= 50) band = "Watchlist";
  return { total, band };
}
