import { NextResponse } from "next/server";
import { toCsv } from "@/lib/csv-export";

export async function POST(request: Request) {
  const { leads } = (await request.json()) as { leads: Array<Record<string, string | number | null>> };
  const approved = leads.filter((lead) => lead.status === "APPROVED");
  const csv = toCsv(approved);

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition": 'attachment; filename="approved-leads.csv"'
    }
  });
}
