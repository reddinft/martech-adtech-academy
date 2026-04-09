"use client";

import { useEffect, useMemo, useState } from "react";
import type { Module } from "@/lib/curriculum";

type Props = { module: Module };

function keyFor(slug: string) {
  return `martech-case-memo-${slug}`;
}

export function CaseMemoWorkspace({ module }: Props) {
  const [memo, setMemo] = useState("");
  const [saveStatus, setSaveStatus] = useState<"idle" | "saved">("idle");

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

  useEffect(() => {
    if (saveStatus !== "saved") return;
    const timer = window.setTimeout(() => setSaveStatus("idle"), 2000);
    return () => window.clearTimeout(timer);
  }, [saveStatus]);

  const save = () => {
    window.localStorage.setItem(keyFor(module.slug), memo);
    setSaveStatus("saved");
  };

  const reset = () => {
    setMemo(template);
    window.localStorage.setItem(keyFor(module.slug), template);
    setSaveStatus("idle");
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
      <h2>Decision memo</h2>
      <p className="muted">Write your strategic response to the case. Saved locally in your browser, export to keep a permanent copy.</p>
      <textarea className="memoArea" value={memo} onChange={(e) => setMemo(e.target.value)} />
      <div className="navRow">
        <button className="button" onClick={save}>Save</button>
        <button className="button buttonSecondary" onClick={download}>Export .md</button>
        <button className="button buttonDanger" onClick={reset}>Reset</button>
        {saveStatus === "saved" && (
          <span className="saveConfirm" role="status" aria-live="polite">✓ Saved</span>
        )}
      </div>
    </section>
  );
}
