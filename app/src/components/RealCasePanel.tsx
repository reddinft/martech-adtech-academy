import type { RealCase } from "@/lib/realCases";

export function RealCasePanel({ realCase }: { realCase: RealCase }) {
  return (
    <section className="panel section">
      <h2>Real-world case study</h2>
      <p><strong>Company:</strong> {realCase.company}</p>
      <p><strong>Case:</strong> {realCase.title}</p>
      <p><strong>What happened:</strong> {realCase.summary}</p>
      <p><strong>Why it matters:</strong> {realCase.whyItMatters}</p>

      <p><strong>Learning exercise:</strong></p>
      <ol className="list">
        {realCase.exercise.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>

      <p><strong>Sources:</strong></p>
      <ul className="list">
        {realCase.sources.map((s) => (
          <li key={s.url}>
            <a href={s.url} target="_blank" rel="noreferrer" className="muted">
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
