import Link from "next/link";
import { notFound } from "next/navigation";
import { ProgressTracker } from "@/components/ProgressTracker";
import { QuizPanel } from "@/components/QuizPanel";
import { CaseMemoWorkspace } from "@/components/CaseMemoWorkspace";
import { RealCasePanel } from "@/components/RealCasePanel";
import { moduleBySlug, modules } from "@/lib/curriculum";
import { quizzesByModule } from "@/lib/quizzes";
import { realCasesByModule } from "@/lib/realCases";

type Props = { params: Promise<{ slug: string }> };

export default async function ModulePage({ params }: Props) {
  const { slug } = await params;
  const module = moduleBySlug(slug);
  if (!module) return notFound();

  const index = modules.findIndex((m) => m.slug === slug);
  const prev = modules[index - 1];
  const next = modules[index + 1];
  const questions = quizzesByModule[module.slug] ?? [];
  const realCase = realCasesByModule[module.slug];

  return (
    <main className="container">
      <header className="hero">
        <Link className="muted" href="/">
          ← Back to all modules
        </Link>
        <h1>{module.title}</h1>
        <div className="actionRow">
          <span className="chip">Estimated time: {module.duration}</span>
          <span className="chip">Step {index + 1} of {modules.length}</span>
        </div>
      </header>

      <ProgressTracker moduleSlug={module.slug} totalModules={modules.length} />

      <section className="panel section" style={{ marginTop: 14 }}>
        <p className="sectionKicker">Step 1</p>
        <h2>Learning outcomes</h2>
        <ul className="list">
          {module.outcomes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="panel section">
        <p className="sectionKicker">Step 2</p>
        <h2>Theory</h2>
        <ul className="list">
          {module.theory.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="panel section">
        <p className="sectionKicker">Step 3</p>
        <h2>Practical lab</h2>
        <ul className="list">
          {module.practical.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="panel section">
        <p className="sectionKicker">Step 4</p>
        <h2>Leading tools to know</h2>
        <ul className="list">
          {module.tools.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="panel section">
        <p className="sectionKicker">Step 5</p>
        <h2>Harvard-style case</h2>
        <p><strong>Protagonist:</strong> {module.caseStudy.protagonist}</p>
        <p><strong>Context:</strong> {module.caseStudy.context}</p>
        <p><strong>Dilemma:</strong> {module.caseStudy.dilemma}</p>
        <p><strong>Strategic options:</strong></p>
        <ol className="list">
          {module.caseStudy.options.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
        <p><strong>Recommended path:</strong> {module.caseStudy.recommendation}</p>
        <p><strong>Discussion questions:</strong></p>
        <ul className="list">
          {module.caseStudy.discussionQuestions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {realCase && <RealCasePanel realCase={realCase} />}

      {questions.length > 0 && <QuizPanel questions={questions} />}

      <CaseMemoWorkspace module={module} />

      <nav className="navRow">
        {prev ? (
          <Link className="button" href={`/module/${prev.slug}`}>
            ← {prev.title}
          </Link>
        ) : (
          <span />
        )}

        {next ? (
          <Link className="button" href={`/module/${next.slug}`}>
            {next.title} →
          </Link>
        ) : (
          <Link className="button" href="/">
            Finish and review
          </Link>
        )}
      </nav>
    </main>
  );
}
