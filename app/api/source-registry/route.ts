import { NextRequest, NextResponse } from "next/server";
import { evaluateSourceAccess } from "@/lib/source-registry";

export async function POST(request: NextRequest) {
  const { domain, status } = await request.json();
  const evaluation = evaluateSourceAccess(status);

  return NextResponse.json({
    domain,
    status,
    ...evaluation,
    auditEvent: `SOURCE_STATUS_UPDATED:${domain}:${status}`
  });
}
