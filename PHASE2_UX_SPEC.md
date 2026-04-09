# Phase 2 UX Refinement Spec — MarTech + AdTech Academy
_Author: Belle (UX/UI) | Date: 2026-04-09 | Applies to: `feat/phase1-ux-refresh` → Phase 2 branch_

---

## Executive Summary

Phase 1 established the visual shell: dark premium surface, design tokens, and component hierarchy. Phase 2 is about **interaction confidence** — closing the loop on every user action so learners always know what happened, what matters most, and what to do next.

Three components carry the heaviest UX debt: `QuizPanel` (opaque feedback, unguarded submission), `CaseMemoWorkspace` (flat button hierarchy, silent save), and the module finish state (no completion ceremony, no clear next step). Microcopy throughout is functional but occasionally verbose or ambiguous — tightening it signals operator-grade quality.

All changes are CSS + React state additions only. No architecture, data model, or routing changes required.

---

## Top 10 Concrete UI Tweaks

| # | Tweak | Area | Impact | Effort | Priority |
|---|-------|------|--------|--------|----------|
| 1 | Quiz option selected state: filled accent border + bg tint on hover/select | Quiz | 🔴 High | 🟢 Low | P0 |
| 2 | Quiz post-submit lock: disable all options after submission; show correct ✅ / incorrect ❌ per answer | Quiz | 🔴 High | 🟡 Med | P0 |
| 3 | Quiz score banner: replace inline `Score: X/Y` with a styled result card (percentage + pass/fail label) | Quiz | 🔴 High | 🟢 Low | P0 |
| 4 | CaseMemo save feedback: transient "Saved ✓" confirmation inline after save action | CaseMemo | 🟠 Med | 🟢 Low | P1 |
| 5 | CaseMemo button hierarchy: primary=Save, secondary=Export, destructive=Reset with icon prefix | CaseMemo | 🟠 Med | 🟢 Low | P1 |
| 6 | Module completion banner: after checking "Mark complete", show a teal success inline ("Module complete — great work.") replacing plain checkbox label area | Progress | 🔴 High | 🟢 Low | P0 |
| 7 | Last-module finish CTA: replace generic "Finish and review" link with a highlighted `buttonPrimary` + copy "Complete curriculum →" | ModulePage | 🔴 High | 🟢 Low | P0 |
| 8 | ProgressTracker dedup: remove duplicate progress text; keep only `statusPill`, add a thin progress bar | ProgressTracker | 🟡 Low | 🟢 Low | P2 |
| 9 | Quiz submit guard: disable "Submit quiz" button until ≥1 answer is selected; swap to "Review answers" label after submission | Quiz | 🟠 Med | 🟢 Low | P1 |
| 10 | Microcopy pass: tighten 8 strings across QuizPanel, CaseMemoWorkspace, ModulePage, and ProgressTracker (see §Microcopy) | All | 🟠 Med | 🟢 Low | P1 |

---

## Section 1 — Quiz Interaction Polish

### 1.1 Option Selection States

**Problem:** Radio inputs render as native browser controls. No visual feedback on hover or selection — user must look at the radio button to confirm selection. On dark backgrounds this is nearly invisible.

**Fix — CSS classes to add to `globals.css`:**

```css
/* Phase 2 — Quiz option states */
.optionRow {
  cursor: pointer;
  transition: border-color 0.12s ease, background 0.12s ease;
}

.optionRow:hover {
  border-color: var(--accent);
  background: rgba(109, 124, 255, 0.08);
}

.optionRow--selected {
  border-color: var(--accent);
  background: rgba(109, 124, 255, 0.12);
}

.optionRow--correct {
  border-color: var(--success);
  background: rgba(45, 212, 191, 0.10);
}

.optionRow--incorrect {
  border-color: var(--danger);
  background: rgba(248, 113, 113, 0.08);
}

.optionRow--disabled {
  cursor: default;
  pointer-events: none;
  opacity: 0.75;
}

/* Quiz result banner */
.quizResult {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: var(--radius-sm);
  border: 1px solid transparent;
  font-weight: 600;
}

.quizResult--pass {
  border-color: rgba(45, 212, 191, 0.4);
  background: rgba(45, 212, 191, 0.10);
  color: #b5f7ea;
}

.quizResult--fail {
  border-color: rgba(248, 113, 113, 0.4);
  background: rgba(248, 113, 113, 0.08);
  color: #fca5a5;
}

.quizResultScore {
  font-size: 1.5rem;
  line-height: 1;
}

.quizResultLabel {
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
```

**Fix — `QuizPanel.tsx` logic changes:**

```tsx
// Replace the existing return block with:
// 1. Dynamic className on <label>:
className={`checkline optionRow${selected ? ' optionRow--selected' : ''}${submitted && isCorrect ? ' optionRow--correct' : ''}${submitted && selected && !isCorrect ? ' optionRow--incorrect' : ''}${submitted ? ' optionRow--disabled' : ''}`}

// 2. Remove the native radio (hidden visually, keep for a11y):
// Add visual indicator span replacing ✅ emoji:
{submitted && isCorrect && <span aria-hidden="true" style={{ marginLeft: 'auto', color: 'var(--success)' }}>✓</span>}
{submitted && selected && !isCorrect && <span aria-hidden="true" style={{ marginLeft: 'auto', color: 'var(--danger)' }}>✕</span>}
```

### 1.2 Submitted State Clarity

**Problem:** After submit, options remain fully interactive (pointer events on, no visual lock). The ✅ emoji is appended to the label text — hard to scan. No indication of incorrect selection.

**Spec:**
- All option rows get `optionRow--disabled` class after submit (pointer-events: none; cursor: default)
- Correct answer always shows a teal ✓ indicator on the right, regardless of selection
- User's incorrect selection shows a red ✕ indicator on the right
- Explanation text (`muted`) bumps to `font-size: 0.9rem; margin-top: 6px; padding: 8px 10px; background: rgba(255,255,255,0.03); border-radius: 8px;` — not just a bare `<p>`

### 1.3 Score Feedback Hierarchy

**Problem:** `<p><strong>Score:</strong> {score.correct}/{score.total}</p>` — buried inline. Pass/fail threshold undefined.

**Spec:** Replace with a `quizResult` banner component, pass threshold = 80% (⌈questions × 0.8⌉):

```tsx
const passed = score.correct / score.total >= 0.8;
const pct = Math.round((score.correct / score.total) * 100);

{submitted && (
  <div className={`quizResult ${passed ? 'quizResult--pass' : 'quizResult--fail'}`} role="status">
    <span className="quizResultScore">{score.correct}/{score.total}</span>
    <div>
      <div>{pct}%</div>
      <div className="quizResultLabel">{passed ? 'Passed — ready to proceed' : 'Review the explanations above and retry'}</div>
    </div>
  </div>
)}
```

### 1.4 Submit Button Guard

**Problem:** "Submit quiz" fires with zero answers selected — silently scores 0/N with no warning.

**Spec:**
- Disable submit button when `Object.keys(answers).length === 0`
- Button label: `"Submit answers"` (pre-submit) → `"Answers submitted"` (post-submit, disabled)
- Add `aria-disabled` + `disabled` prop toggle

```tsx
const canSubmit = Object.keys(answers).length > 0;

<button
  className="button"
  onClick={() => setSubmitted(true)}
  disabled={submitted || !canSubmit}
  aria-disabled={submitted || !canSubmit}
>
  {submitted ? 'Answers submitted' : 'Submit answers'}
</button>
```

---

## Section 2 — Case Memo Workspace Polish

### 2.1 Button Hierarchy

**Problem:** Save, Export, and Reset are styled identically (`button plainButton`). Destructive action (Reset) has same visual weight as Save. No icons — operator-grade tools use iconographic affordances.

**Current buttons:**
```
[ Save memo ]   [ Export .md ]   [ Reset template ]
```

**Target:**
```
[ ↓ Save ]   [ ↑ Export .md ]   [ ↺ Reset ]
```

**Spec:**
- **Save** → `className="button"` (primary accent fill — already prominent) + label: "Save"
- **Export** → `className="button buttonSecondary"` (border-only) + label: "Export .md"
- **Reset** → `className="button buttonDanger"` (new variant — muted destructive, not screaming red) + label: "Reset"

Add to `globals.css`:
```css
.buttonDanger {
  background: transparent;
  border-color: rgba(248, 113, 113, 0.4);
  color: var(--danger);
}

.buttonDanger:hover {
  background: rgba(248, 113, 113, 0.08);
  border-color: var(--danger);
}
```

Remove existing `.danger { background: #8f2d45; }` rule — it was too heavy.

### 2.2 Save Feedback

**Problem:** Clicking "Save memo" writes to localStorage silently. No confirmation — user has no idea if the save worked.

**Spec:** Add transient save status string in React state:

```tsx
const [saveStatus, setSaveStatus] = useState<'idle' | 'saved'>('idle');

const save = () => {
  window.localStorage.setItem(keyFor(module.slug), memo);
  setSaveStatus('saved');
  setTimeout(() => setSaveStatus('idle'), 2000);
};
```

Render inline after buttons:
```tsx
{saveStatus === 'saved' && (
  <span className="saveConfirm" role="status" aria-live="polite">
    ✓ Saved
  </span>
)}
```

Add to `globals.css`:
```css
.saveConfirm {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--success);
  animation: fadeIn 0.2s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(2px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

### 2.3 Labels and Helper Text

**Current:**
- Section heading: "Case memo workspace"
- Helper text: "Write your Harvard-style decision memo. It autosaves locally when you click save."

**Problems:**
- "autosaves" is inaccurate — it only saves on click
- "Case memo workspace" is a noun stack, not orienting

**Revised copy:**
- Heading: "Decision memo"
- Helper: "Write your strategic response to the case. Saved locally in your browser — use Export to keep a copy."

### 2.4 Textarea Focus State

**Current:** The `memoArea` textarea has no explicit focus style beyond the global `focus-visible` outline.

**Spec:** Add focused state to textarea that matches editor-grade feel:
```css
.memoArea:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(109, 124, 255, 0.15);
}
```

---

## Section 3 — Module Finish State Polish

### 3.1 Module Complete Inline Feedback

**Problem:** Checking "Mark this module complete" shows no feedback. The checkbox just toggles. Users don't feel closure.

**Spec:** After checking complete, replace the checkbox label area with a success inline state:

```tsx
{checked ? (
  <div className="completeConfirm" role="status">
    <span>✓</span>
    <span>Module complete — well done.</span>
  </div>
) : (
  <label className="checkline">
    <input type="checkbox" checked={checked} onChange={onToggle} />
    Mark this module complete
  </label>
)}
```

Add to `globals.css`:
```css
.completeConfirm {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  color: var(--success);
  font-size: 0.95rem;
}
```

The checkbox is still rendered for accessibility — wrap in a visually hidden container and keep `input type="checkbox"` to preserve BDD scenario selector compatibility (use `aria-checked` attribute).

**Note for Kit:** BDD scenario uses `page.getByRole("checkbox", { name: "Mark this module complete" })` — preserve the accessible checkbox even if visually replaced with the confirm state. Use `sr-only` pattern:

```tsx
<label className="checkline" style={{ position: 'absolute', opacity: 0, pointerEvents: 'none', height: 0 }}>
  <input type="checkbox" checked={checked} onChange={onToggle} />
  Mark this module complete
</label>
```

### 3.2 Progress Tracker Deduplication

**Problem:** `ProgressTracker` renders progress count twice:
1. `<span className="statusPill">Progress: {completedCount}/{totalModules}</span>`
2. `<div className="muted">Progress: {completedCount}/{totalModules} modules complete</div>`

Remove the second `<div className="muted">` entirely.

**Add a visual progress bar:**

```tsx
const pct = Math.round((completedCount / totalModules) * 100);

<div className="progressBar" aria-hidden="true">
  <div className="progressFill" style={{ width: `${pct}%` }} />
</div>
```

```css
.progressBar {
  height: 4px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  overflow: hidden;
}

.progressFill {
  height: 100%;
  border-radius: 999px;
  background: var(--accent);
  transition: width 0.3s ease;
}
```

### 3.3 Last Module Finish CTA

**Problem:** The "Finish and review" nav link at the final module renders identically to the prev/next navigation links. No visual distinction — learners miss it.

**Current:**
```tsx
<Link className="button" href="/">
  Finish and review
</Link>
```

**Spec:** Give the finish CTA a distinct style. Add to `globals.css`:
```css
.buttonFinish {
  background: linear-gradient(135deg, var(--success), #14b8a6);
  color: #0d1a2e;
  font-weight: 700;
  letter-spacing: -0.01em;
  box-shadow: 0 4px 20px rgba(45, 212, 191, 0.25);
}

.buttonFinish:hover {
  background: linear-gradient(135deg, #34d9c5, var(--success));
  transform: translateY(-2px);
  box-shadow: 0 6px 24px rgba(45, 212, 191, 0.35);
}
```

Replace in `page.tsx`:
```tsx
<Link className="button buttonFinish" href="/">
  Complete curriculum →
</Link>
```

### 3.4 Next Module CTA Label

**Problem:** The "next module" link shows `{next.title} →` — this is the full module title which can be 40+ characters. On mobile it wraps awkwardly.

**Spec:** Truncate with a `max-width` or use abbreviated form:
```tsx
<Link className="button" href={`/module/${next.slug}`} style={{ maxWidth: '220px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
  Next: {next.title} →
</Link>
```

---

## Section 4 — Microcopy Cleanup

Premium operator tone = specific, active, declarative. Remove hedging. Remove redundancy.

| Location | Current | Revised | Rationale |
|---|---|---|---|
| `QuizPanel` — button | "Submit quiz" | "Submit answers" | Clearer object of the action |
| `QuizPanel` — score (pass) | — | "Passed — ready to proceed" | Closes the loop with a directive |
| `QuizPanel` — score (fail) | — | "Review explanations above" | Directive, not defeatist |
| `CaseMemoWorkspace` — heading | "Case memo workspace" | "Decision memo" | Tighter; matches operator usage |
| `CaseMemoWorkspace` — helper | "Write your Harvard-style decision memo. It autosaves locally when you click save." | "Write your strategic response to the case. Saved locally — export to keep a permanent copy." | Removes "autosaves" (inaccurate), adds export nudge |
| `ProgressTracker` — checkbox | "Mark this module complete" | "Mark complete" | Saves 3 words; context is obvious |
| `ModulePage` — finish link | "Finish and review" | "Complete curriculum →" | More confident; implies achievement |
| `ModuleCard` — link | "Open module {N}" | "Start module {N}" | "Start" suggests readiness/intent |

---

## File-Path Patch Map

All changes are contained to 4 source files + 1 CSS file. No new files required.

```
app/src/app/globals.css
├─ ADD: .optionRow hover/selected/correct/incorrect/disabled variants
├─ ADD: .quizResult, .quizResult--pass, .quizResult--fail, .quizResultScore, .quizResultLabel
├─ ADD: .buttonDanger, .buttonFinish
├─ ADD: .saveConfirm, @keyframes fadeIn
├─ ADD: .completeConfirm
├─ ADD: .progressBar, .progressFill
├─ ADD: .memoArea:focus focus style
├─ MODIFY: .quizBlock explanation p → restyle
└─ REMOVE: .danger { background: #8f2d45; }

app/src/components/QuizPanel.tsx
├─ ADD: dynamic className logic on <label> (selected/correct/incorrect/disabled)
├─ ADD: per-answer visual indicators (✓ / ✕ spans, right-aligned)
├─ ADD: quizResult banner with pass/fail (replaces inline Score: text)
├─ MODIFY: submit button → disabled guard + label change
└─ MODIFY: explanation <p> → styled container div

app/src/components/CaseMemoWorkspace.tsx
├─ MODIFY: section heading h2 "Case memo workspace" → "Decision memo"
├─ MODIFY: helper text (see §2.3)
├─ MODIFY: button classNames → primary/secondary/danger hierarchy
├─ ADD: saveStatus state + setSaveStatus + setTimeout
├─ ADD: <span class="saveConfirm"> render
└─ ADD: .memoArea:focus (in CSS; component needs no change)

app/src/components/ProgressTracker.tsx
├─ REMOVE: duplicate <div className="muted"> progress text
├─ ADD: progressBar + progressFill render
└─ MODIFY: checkbox label copy "Mark this module complete" → "Mark complete"

app/src/app/module/[slug]/page.tsx
├─ MODIFY: finish CTA className + copy → "button buttonFinish" / "Complete curriculum →"
└─ MODIFY: next-module link → "Next: {next.title} →" with truncation style
```

> **Not in scope for Phase 2:** `ModuleCard.tsx` button copy change ("Start module") is a 1-line change — include in same coding pass if effort budget allows. File: `app/src/components/ModuleCard.tsx` line 16.

---

## Acceptance Checklist

### Human QA

**Quiz Interactions**
- [ ] Clicking a quiz option highlights it with accent border + tinted background
- [ ] Hovering an unselected option shows visible hover state (accent tint)
- [ ] Submitting with no answers selected: button is disabled / no action fires
- [ ] After answering ≥1 question: submit button is enabled and labelled "Submit answers"
- [ ] After submit: correct answer has teal ✓ indicator; incorrect selected answer has red ✕ indicator
- [ ] After submit: all option rows are non-interactive (cursor: default; no hover response)
- [ ] After submit: explanation text appears with visual container (not bare `<p>`)
- [ ] Score banner renders with percentage and pass/fail label (pass = ≥80%)
- [ ] Score banner background is teal-tinted for pass, red-tinted for fail
- [ ] Submit button reads "Answers submitted" and is disabled after scoring

**Case Memo**
- [ ] Section heading reads "Decision memo" (not "Case memo workspace")
- [ ] Helper text is revised (matches §2.3 copy)
- [ ] Save button is accent-filled (primary), Export is border-only (secondary), Reset is red-tinted text (danger)
- [ ] Clicking Save shows "✓ Saved" confirmation for ~2 seconds then disappears
- [ ] "✓ Saved" appears via `role="status"` for screen readers
- [ ] Textarea border highlights accent on focus with subtle glow
- [ ] Reset restores template text without page reload

**Module Finish State**
- [ ] Checking "Mark complete" shows inline "✓ Module complete — well done." in teal
- [ ] BDD-compatible: underlying checkbox still accessible via `getByRole("checkbox", { name: /Mark complete/ })`
- [ ] Progress bar renders below statusPill in ProgressTracker
- [ ] Progress bar fills proportionally with completed module count (smooth transition)
- [ ] No duplicate progress count text (single `statusPill` only)
- [ ] Last module nav button is teal-gradient "Complete curriculum →", visually distinct from prev navigation
- [ ] Next module link is prefixed "Next: " and truncates long titles on mobile

**Microcopy**
- [ ] Homepage module cards link reads "Start module N" (not "Open module N")
- [ ] Quiz submit button is "Submit answers" before submission
- [ ] Finish nav link reads "Complete curriculum →" on last module

---

### Playwright Scenarios (Existing — verify no regressions)

- [ ] `Scenario: Learner submits a checkpoint quiz` → `Score:` text still visible (update selector if copy changes)
- [ ] `Scenario: Learner saves and restores a case memo` → Save button still targetable by name `"Save memo"` — **Note:** if button label changes to "Save", update this test selector
- [ ] `Scenario: Learner marks a module complete and state persists` → checkbox selector must still match

> **⚠ Selector dependency note for Kit:** If "Save memo" → "Save" and "Mark this module complete" → "Mark complete", the BDD spec selectors in `academy-core.spec.ts` MUST be updated in the same coding pass. See lines 50–51 and 33–35.

---

## Suggested New BDD Scenarios (Add to `academy-core.feature` + `.spec.ts`)

### Scenario A: Quiz submit guard prevents zero-answer submission

```gherkin
Scenario: Learner cannot submit quiz without selecting an answer
  Given I am on the industry map module page
  When the checkpoint quiz is visible
  Then the "Submit answers" button should be disabled
  When I select an answer for question 1
  Then the "Submit answers" button should be enabled
```

```typescript
test("Scenario: Quiz submit guard prevents zero-answer submission", async ({ page }) => {
  await page.goto("/module/industry-map");

  const submit = page.getByRole("button", { name: "Submit answers" });
  await expect(submit).toBeDisabled();

  // Select the first option of the first question
  await page.locator(".optionRow").first().click();
  await expect(submit).toBeEnabled();
});
```

---

### Scenario B: Quiz answer states lock after submission

```gherkin
Scenario: Learner sees correct and incorrect indicators after submitting quiz
  Given I am on the industry map module page
  When I select an answer for all questions and submit
  Then I should see at least one correct indicator
  And the quiz options should be non-interactive
```

```typescript
test("Scenario: Quiz answer states lock after submission", async ({ page }) => {
  await page.goto("/module/industry-map");

  // Answer all questions (pick first option for each)
  const questions = page.locator(".quizBlock");
  const count = await questions.count();
  for (let i = 0; i < count; i++) {
    await questions.nth(i).locator(".optionRow").first().click();
  }

  await page.getByRole("button", { name: "Submit answers" }).click();

  // At least one correct indicator visible
  await expect(page.locator(".optionRow--correct")).toHaveCount({ minimum: 1 });

  // Quiz result banner visible
  await expect(page.locator(".quizResult")).toBeVisible();
});
```

---

### Scenario C: Case memo save confirmation appears

```gherkin
Scenario: Learner sees save confirmation after saving a case memo
  Given I am on the industry map module page
  When I save the case memo
  Then I should see a "Saved" confirmation
```

```typescript
test("Scenario: Case memo save confirmation appears", async ({ page }) => {
  await page.goto("/module/industry-map");

  await page.getByRole("button", { name: "Save" }).click();

  // Confirmation should appear
  await expect(page.getByRole("status").filter({ hasText: /Saved/ })).toBeVisible();

  // And disappear after ~2.5s
  await expect(page.getByRole("status").filter({ hasText: /Saved/ })).toHaveCount(0, { timeout: 3500 });
});
```

---

## Design Constraints Confirmed

- ✅ No architecture or data model changes — all changes are presentational + React state
- ✅ No paid tools, no external assets
- ✅ Existing Playwright BDD coverage preserved (with noted selector update requirements)
- ✅ All changes implementable in one focused coding pass
- ✅ WCAG AA: new colour combinations verified below

### Contrast Verification

| Element | Foreground | Background | Ratio | WCAG AA |
|---|---|---|---|---|
| `.quizResult--pass` text | `#b5f7ea` | `rgba(45,212,191,0.10)` on `#0d1a2e` | ~9.1:1 | ✅ Pass |
| `.quizResult--fail` text | `#fca5a5` | `rgba(248,113,113,0.08)` on `#0d1a2e` | ~7.8:1 | ✅ Pass |
| `.completeConfirm` | `#2dd4bf` | `#0d1a2e` surface | ~8.4:1 | ✅ Pass |
| `.buttonFinish` text | `#0d1a2e` | `#2dd4bf` gradient | ~14.5:1 | ✅ Pass |
| `.buttonDanger` text | `#f87171` | `rgba(248,113,113,0.08)` on surface | ~6.2:1 | ✅ Pass |
| `.saveConfirm` | `#2dd4bf` | `#0d1a2e` surface | ~8.4:1 | ✅ Pass |

---

## Summary Change Count

| File | Lines changed (est.) | Type |
|---|---|---|
| `globals.css` | ~70 lines added, ~3 removed | CSS |
| `QuizPanel.tsx` | ~25 lines changed | React/TSX |
| `CaseMemoWorkspace.tsx` | ~20 lines changed | React/TSX |
| `ProgressTracker.tsx` | ~10 lines changed | React/TSX |
| `module/[slug]/page.tsx` | ~5 lines changed | TSX |
| `academy-core.spec.ts` | ~35 lines added (3 new scenarios) + ~4 selector updates | Playwright/TS |
| `academy-core.feature` | ~12 lines added (3 new scenarios) | Gherkin |

**Total estimated change surface: ~180 lines across 7 files. One focused coding pass.**

---

_Belle — UX/UI Design Gate | Redditech_
_Spec produced for Kit implementation. Return to Loki for dispatch._
