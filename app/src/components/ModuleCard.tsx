import Link from "next/link";
import type { Module } from "@/lib/curriculum";

export function ModuleCard({ module, index }: { module: Module; index: number }) {
  return (
    <article className="card">
      <h3>{module.title}</h3>
      <p className="muted">Duration: {module.duration}</p>
      <ul>
        {module.outcomes.slice(0, 2).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <Link className="button" href={`/module/${module.slug}`}>
        Open module {index + 1}
      </Link>
    </article>
  );
}
