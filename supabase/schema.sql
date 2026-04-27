create extension if not exists pgcrypto;

create type public.product_fit_tag as enum (
  'UPS_SYSTEMS',
  'SWITCHGEAR_SWITCHBOARDS',
  'PDU_RPP',
  'BUSWAY_OVERHEAD_DISTRIBUTION',
  'STATIC_TRANSFER_SWITCHES',
  'BESS_GRID_STORAGE',
  'PREFAB_DATA_CENTER_AI_HPC',
  'PREFAB_DATA_CENTER_STANDARD_EDGE',
  'WHITESPACE_INFRASTRUCTURE',
  'PREFAB_POWER_MODULES',
  'POWER_SKIDS',
  'INTEGRATED_UPS_SWITCHGEAR',
  'LIFECYCLE_SERVICES',
  'UNKNOWN'
);

create type public.lead_status as enum ('NEW','NEEDS_VERIFICATION','APPROVED','REJECTED','EXPORTED','DO_NOT_CONTACT');
create type public.source_status as enum ('ALLOWED','REVIEW_REQUIRED','BLOCKED');

create table public.product_catalog (
  id uuid primary key default gen_random_uuid(),
  product_family text not null,
  product_name text not null unique,
  short_description text not null,
  capacity_range text,
  voltage_or_ampacity text,
  form_factor text,
  cooling_notes text,
  key_features text,
  typical_triggers text,
  likely_buyer_personas text,
  relevant_verticals text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.accounts (
  id uuid primary key default gen_random_uuid(),
  owner_user_id uuid not null default auth.uid(),
  name text not null,
  vertical text,
  geography text,
  created_at timestamptz not null default now()
);

create table public.projects (
  id uuid primary key default gen_random_uuid(),
  owner_user_id uuid not null default auth.uid(),
  account_id uuid references public.accounts(id) on delete set null,
  name text not null,
  location text,
  stage text,
  trigger text,
  product_fit public.product_fit_tag[] default '{UNKNOWN}',
  source_url text,
  evidence_snippet text,
  created_at timestamptz not null default now()
);

create table public.contacts (
  id uuid primary key default gen_random_uuid(),
  owner_user_id uuid not null default auth.uid(),
  account_id uuid references public.accounts(id) on delete set null,
  project_id uuid references public.projects(id) on delete set null,
  full_name text,
  title text,
  email text,
  phone text,
  buyer_persona text,
  created_at timestamptz not null default now()
);

create table public.sources (
  id uuid primary key default gen_random_uuid(),
  owner_user_id uuid not null default auth.uid(),
  url text not null,
  domain text not null,
  status public.source_status not null default 'REVIEW_REQUIRED',
  source_category text,
  created_at timestamptz not null default now()
);


create table public.source_registry (
  id uuid primary key default gen_random_uuid(),
  owner_user_id uuid not null default auth.uid(),
  domain text not null unique,
  status public.source_status not null default 'REVIEW_REQUIRED',
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.research_runs (
  id uuid primary key default gen_random_uuid(),
  owner_user_id uuid not null default auth.uid(),
  run_name text,
  target_keywords text[] not null,
  target_geography text,
  target_vertical text,
  project_trigger_focus text,
  product_family_focus public.product_fit_tag[] default '{UNKNOWN}',
  status text not null default 'queued',
  created_at timestamptz not null default now()
);

create table public.lead_scores (
  id uuid primary key default gen_random_uuid(),
  owner_user_id uuid not null default auth.uid(),
  run_id uuid references public.research_runs(id) on delete cascade,
  project_id uuid references public.projects(id) on delete cascade,
  contact_id uuid references public.contacts(id) on delete set null,
  lead_status public.lead_status not null default 'NEW',
  score_total int not null check (score_total between 0 and 100),
  score_band text not null,
  confidence numeric(4,3),
  source_quality_note text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.outreach_briefs (
  id uuid primary key default gen_random_uuid(),
  owner_user_id uuid not null default auth.uid(),
  project_id uuid references public.projects(id) on delete cascade,
  contact_id uuid references public.contacts(id) on delete set null,
  brief_markdown text not null,
  created_at timestamptz not null default now()
);

create table public.do_not_contact (
  id uuid primary key default gen_random_uuid(),
  owner_user_id uuid not null default auth.uid(),
  account_name text,
  contact_email text,
  reason text,
  created_at timestamptz not null default now()
);

create table public.audit_log (
  id uuid primary key default gen_random_uuid(),
  owner_user_id uuid not null default auth.uid(),
  event_type text not null,
  event_details jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

alter table public.product_catalog enable row level security;
alter table public.accounts enable row level security;
alter table public.projects enable row level security;
alter table public.contacts enable row level security;
alter table public.sources enable row level security;
alter table public.source_registry enable row level security;
alter table public.research_runs enable row level security;
alter table public.lead_scores enable row level security;
alter table public.outreach_briefs enable row level security;
alter table public.do_not_contact enable row level security;
alter table public.audit_log enable row level security;

create policy "authenticated_read_catalog" on public.product_catalog for select to authenticated using (true);

create policy "owner_all_accounts" on public.accounts for all to authenticated using (owner_user_id = auth.uid()) with check (owner_user_id = auth.uid());
create policy "owner_all_projects" on public.projects for all to authenticated using (owner_user_id = auth.uid()) with check (owner_user_id = auth.uid());
create policy "owner_all_contacts" on public.contacts for all to authenticated using (owner_user_id = auth.uid()) with check (owner_user_id = auth.uid());
create policy "owner_all_sources" on public.sources for all to authenticated using (owner_user_id = auth.uid()) with check (owner_user_id = auth.uid());
create policy "owner_all_source_registry" on public.source_registry for all to authenticated using (owner_user_id = auth.uid()) with check (owner_user_id = auth.uid());
create policy "owner_all_research_runs" on public.research_runs for all to authenticated using (owner_user_id = auth.uid()) with check (owner_user_id = auth.uid());
create policy "owner_all_lead_scores" on public.lead_scores for all to authenticated using (owner_user_id = auth.uid()) with check (owner_user_id = auth.uid());
create policy "owner_all_outreach_briefs" on public.outreach_briefs for all to authenticated using (owner_user_id = auth.uid()) with check (owner_user_id = auth.uid());
create policy "owner_all_dnc" on public.do_not_contact for all to authenticated using (owner_user_id = auth.uid()) with check (owner_user_id = auth.uid());
create policy "owner_all_audit" on public.audit_log for all to authenticated using (owner_user_id = auth.uid()) with check (owner_user_id = auth.uid());
