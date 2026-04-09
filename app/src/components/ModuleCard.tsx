import Link from "next/link";
import type { Module } from "@/lib/curriculum";

export function ModuleCard({ module, index }: { module: Module; index: number }) {
  return (
    <article className="card">
      <div className="cardTop">
        <span className="chip">Module {index + 1}</span>
        <span className="chip">{module.duration}</span>
      </div>
      <h3>{module.title}</h3>
      <ul className="list">
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
