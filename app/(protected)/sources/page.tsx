export default function SourcesPage() {
  return (
    <section className="card">
      <h2>Source Registry</h2>
      <p>Add URLs and classify domains as Allowed, Review Required, or Blocked.</p>
      <div className="grid two">
        <label>
          Source URL
          <input placeholder="https://city.gov/bids/project-123" />
        </label>
        <label>
          Domain Status
          <select defaultValue="REVIEW_REQUIRED">
            <option value="ALLOWED">Allowed</option>
            <option value="REVIEW_REQUIRED">Review Required</option>
            <option value="BLOCKED">Blocked</option>
          </select>
        </label>
      </div>
      <button type="button">Save Source</button>
    </section>
  );
}
