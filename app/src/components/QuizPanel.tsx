"use client";

import { useMemo, useState } from "react";
import type { QuizQuestion } from "@/lib/quizzes";

export function QuizPanel({ questions }: { questions: QuizQuestion[] }) {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(() => {
    let correct = 0;
    for (const q of questions) {
      if (answers[q.id] === q.answerIndex) correct += 1;
    }
    return { correct, total: questions.length };
  }, [answers, questions]);

  const canSubmit = Object.keys(answers).length > 0;
  const passed = submitted && score.total > 0 && score.correct / score.total >= 0.8;
  const pct = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0;

  return (
    <section className="panel section">
      <h2>Checkpoint quiz</h2>
      {questions.map((q, i) => (
        <div key={q.id} className="quizBlock">
          <p><strong>Q{i + 1}.</strong> {q.question}</p>
          <div className="quizOptions">
            {q.options.map((opt, idx) => {
              const selected = answers[q.id] === idx;
              const isCorrect = idx === q.answerIndex;
              const isIncorrectSelection = submitted && selected && !isCorrect;
              return (
                <label
                  key={opt}
                  className={`checkline optionRow${selected ? " optionRow--selected" : ""}${submitted && isCorrect ? " optionRow--correct" : ""}${isIncorrectSelection ? " optionRow--incorrect" : ""}${submitted ? " optionRow--disabled" : ""}`}
                >
                  <input
                    type="radio"
                    name={q.id}
                    checked={selected}
                    disabled={submitted}
                    onChange={() => setAnswers((prev) => ({ ...prev, [q.id]: idx }))}
                  />
                  <span>{opt}</span>
                  {submitted && isCorrect && <span aria-hidden="true" style={{ marginLeft: "auto", color: "var(--success)" }}>✓</span>}
                  {isIncorrectSelection && <span aria-hidden="true" style={{ marginLeft: "auto", color: "var(--danger)" }}>✕</span>}
                </label>
              );
            })}
          </div>
          {submitted && <div className="muted quizExplanation">{q.explanation}</div>}
        </div>
      ))}

      <div className="navRow">
        <button className="button" onClick={() => setSubmitted(true)} disabled={submitted || !canSubmit} aria-disabled={submitted || !canSubmit}>
          {submitted ? "Answers submitted" : "Submit answers"}
        </button>
        {submitted && (
          <div className={`quizResult ${passed ? "quizResult--pass" : "quizResult--fail"}`} role="status">
            <span className="quizResultScore">{score.correct}/{score.total}</span>
            <div>
              <div>{pct}%</div>
              <div className="quizResultLabel">{passed ? "Passed — ready to proceed" : "Review explanations above"}</div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
