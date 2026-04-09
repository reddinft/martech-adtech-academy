"use client";

import { useEffect, useMemo, useState } from "react";
import type { Module } from "@/lib/curriculum";

type Props = { module: Module };

function keyFor(slug: string) {
  return `martech-case-memo-${slug}`;
}

export function CaseMemoWorkspace({ module }: Props) {
  const [memo, setMemo] = useState("");

  const template = useMemo(
    () =>
      `# Case Memo — ${module.title}\n\n` +
      `## Situation\n${module.caseStudy.context}\n\n` +
      `## Dilemma\n${module.caseStudy.dilemma}\n\n` +
      `## Chosen Option\n(Select one strategic option and justify it.)\n\n` +
      `## Decision Rationale\n(Why this option now? Include tradeoffs.)\n\n` +
      `## Execution Plan (30/60/90)\n- 30 days:\n- 60 days:\n- 90 days:\n\n` +
      `## Metrics and Risks\n- Success metrics:\n- Key risks and mitigations:\n`,
    [module],
  );

  useEffect(() => {
    const saved = window.localStorage.getItem(keyFor(module.slug));
    setMemo(saved || template);
  }, [module.slug, template]);

  const save = () => {
    window.localStorage.setItem(keyFor(module.slug), memo);
  };

  const reset = () => {
    setMemo(template);
    window.localStorage.setItem(keyFor(module.slug), template);
  };

  const download = () => {
    const blob = new Blob([memo], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${module.slug}-case-memo.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section className="panel section">
      <h2>Case memo workspace</h2>
      <p className="muted">Write your Harvard-style decision memo. It autosaves locally when you click save.</p>
      <textarea className="memoArea" value={memo} onChange={(e) => setMemo(e.target.value)} />
      <div className="navRow">
        <button className="button plainButton" onClick={save}>Save memo</button>
        <button className="button plainButton" onClick={download}>Export .md</button>
        <button className="button plainButton danger" onClick={reset}>Reset template</button>
      </div>
    </section>
  );
}
