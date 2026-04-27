import Link from "next/link";
import type { ReactNode } from "react";

const sections = [
  ["Dashboard", "/dashboard"],
  ["Product Catalog", "/product-catalog"],
  ["Sources", "/sources"],
  ["Research Runs", "/research-runs"],
  ["Accounts", "/accounts"],
  ["Projects", "/projects"],
  ["Contacts", "/contacts"],
  ["Lead Review Queue", "/lead-review"],
  ["Outreach Briefs", "/outreach-briefs"],
  ["Settings", "/settings"]
] as const;

export default function ProtectedLayout({ children }: { children: ReactNode }) {
  return (
    <main className="container">
      <h1>Vertiv Sales Research Workspace</h1>
      <nav>
        {sections.map(([label, href]) => (
          <Link key={href} href={href} className="badge">
            {label}
          </Link>
        ))}
      </nav>
      {children}
    </main>
  );
}
