export default function ResearchRunsPage() {
  return (
    <section className="card">
      <h2>Research Runs</h2>
      <p>Start an extraction run with selected sources, keywords, geography, vertical, trigger, and product focus.</p>
      <div className="grid two">
        <label>
          Target Keywords
          <textarea placeholder="UPS replacement, switchgear upgrade, AI/HPC deployment" />
        </label>
        <label>
          Product Family Focus
          <textarea placeholder="UPS_SYSTEMS, SWITCHGEAR_SWITCHBOARDS" />
        </label>
      </div>
      <button type="button">Start Research Run</button>
    </section>
  );
}
