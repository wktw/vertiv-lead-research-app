# Vertiv Lead Research App (Browser-First MVP)

Evidence-based B2B sales research and lead qualification for Vertiv 3-phase power, distribution, prefab infrastructure, BESS, and lifecycle services.

## What this MVP includes

- Next.js + TypeScript app sections: Dashboard, Product Catalog, Sources, Research Runs, Accounts, Projects, Contacts, Lead Review Queue, Outreach Briefs, Settings.
- Supabase SQL schema with RLS + typed enums for lead status, source status, and product-fit tags.
- Seed data for all requested product families and product names in `product_catalog`.
- API routes for:
  - Research run processing (public URL fetch + extraction skeleton + scoring).
  - Approved-lead CSV export.
  - Outreach brief generation (no auto-send).
  - Source registry access evaluation (Allowed / Review Required / Blocked).
- Utility functions and tests for:
  - Product classification.
  - Extraction schema validation.
  - Lead scoring.
  - Deduplication.
  - CSV export.
  - Source allow/block behavior.
  - Evidence requirement enforcement.

## Browser-only setup (no local install required)

### 1) Create a GitHub repository

1. In GitHub web UI, create a private repository.
2. Push this code to the repository using GitHub web upload or Codespaces.

### 2) Create Supabase project

1. Go to https://supabase.com and create a new project.
2. Open **SQL Editor**.
3. Run `supabase/schema.sql`.
4. Run `supabase/seed.sql`.
5. In **Authentication**, enable Email auth.

### 3) Connect repository to Vercel

1. Go to https://vercel.com and import the GitHub repository.
2. Framework preset: **Next.js**.
3. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `OPENAI_API_KEY`
   - `OPENAI_MODEL` (example: `gpt-4.1-mini`)
   - `APP_BASE_URL`
4. Deploy.

### 4) Use hosted app in browser

1. Open the Vercel URL.
2. Sign in with Supabase auth.
3. Add source URLs in Sources section.
4. Start research runs from Research Runs section.
5. Review and approve leads in Lead Review Queue.
6. Export approved leads to CSV.
7. Generate outreach briefs without automatic email sending.

## Security model

- API keys remain server-side in Vercel env vars.
- Supabase service role key is never sent to browser.
- Row Level Security enabled across tenant data tables.
- Source control behavior includes allow/review/block model.
- Research runs and source decisions are designed for audit logging.

## Source registry behavior

- Unknown domains default to `REVIEW_REQUIRED`.
- `ALLOWED` domains are fetchable.
- `BLOCKED` domains are never fetched.
- `REVIEW_REQUIRED` domains require human approval queue before crawling.

## MVP implementation notes

- This is a foundational architecture and policy-safe extraction workflow, not a generic web scraper.
- Every lead must include source attribution + evidence snippet.
- Missing contact details force `NEEDS_VERIFICATION` status.
- Product fit inference includes confidence and reason fields.
- Thermal-only mentions do not map to standalone product family unless scope supports modular/high-density/integrated contexts.

## Deploy-time checklist

- [ ] Supabase schema applied.
- [ ] Product seed applied.
- [ ] Vercel env vars configured.
- [ ] Auth enabled in Supabase.
- [ ] App deployed successfully.
- [ ] API routes respond.
- [ ] Review queue and CSV export flow validated.

