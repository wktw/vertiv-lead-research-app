export default function LeadReviewPage() {
  return (
    <section className="card">
      <h2>Lead Review Queue</h2>
      <p>Each lead requires source URL + evidence snippet before approval and export.</p>
      <ul>
        <li>Statuses: New, Needs Verification, Approved, Rejected, Exported, Do Not Contact.</li>
        <li>Export only Approved leads to CSV.</li>
      </ul>
    </section>
  );
}
