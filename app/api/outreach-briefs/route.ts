import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { accountName, evidenceSnippet, productFit, trigger } = await request.json();

  const brief = {
    summary: `Reach out to ${accountName ?? "target account"} referencing verified infrastructure signal: ${trigger ?? "active project trigger"}.`,
    angle: `Position Vertiv around ${productFit?.join(", ") ?? "critical power reliability"} based on source evidence.`,
    proof: evidenceSnippet,
    nextStep: "Request discovery call; verify stakeholder map and procurement timeline.",
    automationNotice: "No email is sent automatically."
  };

  return NextResponse.json(brief);
}
