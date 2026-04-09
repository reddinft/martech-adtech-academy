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
              return (
                <label key={opt} className="checkline optionRow">
                  <input
                    type="radio"
                    name={q.id}
                    checked={selected}
                    onChange={() => setAnswers((prev) => ({ ...prev, [q.id]: idx }))}
                  />
                  <span>
                    {opt}
                    {submitted && isCorrect ? " ✅" : ""}
                  </span>
                </label>
              );
            })}
          </div>
          {submitted && <p className="muted">{q.explanation}</p>}
        </div>
      ))}

      <div className="navRow">
        <button className="button plainButton" onClick={() => setSubmitted(true)}>
          Submit quiz
        </button>
        {submitted && (
          <p><strong>Score:</strong> {score.correct}/{score.total}</p>
        )}
      </div>
    </section>
  );
}
