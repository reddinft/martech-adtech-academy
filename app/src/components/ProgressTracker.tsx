"use client";

import { useEffect, useMemo, useState } from "react";

type Props = {
  moduleSlug: string;
  totalModules: number;
};

const KEY = "martech-academy-progress-v1";

export function ProgressTracker({ moduleSlug, totalModules }: Props) {
  const [completeMap, setCompleteMap] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(KEY);
      if (raw) setCompleteMap(JSON.parse(raw));
    } catch {
      setCompleteMap({});
    }
  }, []);

  const completedCount = useMemo(
    () => Object.values(completeMap).filter(Boolean).length,
    [completeMap],
  );

  const checked = !!completeMap[moduleSlug];

  const onToggle = () => {
    const next = { ...completeMap, [moduleSlug]: !checked };
    setCompleteMap(next);
    window.localStorage.setItem(KEY, JSON.stringify(next));
  };

  return (
    <div className="panel" style={{ display: "grid", gap: 10 }}>
      <div className="actionRow" style={{ justifyContent: "space-between" }}>
        <span className="statusPill">Progress: {completedCount}/{totalModules}</span>
      </div>
      <label className="checkline">
        <input type="checkbox" checked={checked} onChange={onToggle} />
        Mark this module complete
      </label>
      <div className="muted">
        Progress: {completedCount}/{totalModules} modules complete
      </div>
    </div>
  );
}
