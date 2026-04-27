export default function DashboardPage() {
  return (
    <section className="grid two">
      <article className="card">
        <h2>Pipeline Snapshot</h2>
        <p>Track New, Needs Verification, Approved, Rejected, Exported, and Do Not Contact lead counts.</p>
      </article>
      <article className="card">
        <h2>Research Throughput</h2>
        <p>Monitor source fetch success rates, extraction confidence, and score-band distribution.</p>
      </article>
    </section>
  );
}
