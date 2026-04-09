import { ModuleCard } from "@/components/ModuleCard";
import { FirstTimeOnboardingPrompt } from "@/components/FirstTimeOnboardingPrompt";
import { modules } from "@/lib/curriculum";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="container">
      <header className="hero">
        <h1>MarTech + AdTech Academy</h1>
        <p className="muted">
          A practical operator curriculum combining theory, labs, and Harvard-style case studies.
        </p>
        <p>
          Structure used from Academy builds: module-first learning, guided routes, and measurable progress.
        </p>
        <div className="heroCtas">
          <Link className="button" href="/onboarding">
            Start onboarding
          </Link>
          <Link className="button buttonSecondary" href="/module/industry-map">
            Jump to Module 1
          </Link>
        </div>
      </header>

      <FirstTimeOnboardingPrompt />

      <section className="panel" style={{ marginBottom: 16 }}>
        <h2 style={{ marginTop: 0 }}>How to use this</h2>
        <div className="howStrip">
          <article className="stepCard">
            <p className="stepTitle">Step 1</p>
            <p className="stepText">Read the theory section</p>
          </article>
          <article className="stepCard">
            <p className="stepTitle">Step 2</p>
            <p className="stepText">Complete the practical lab artifact</p>
          </article>
          <article className="stepCard">
            <p className="stepTitle">Step 3</p>
            <p className="stepText">Write a decision-quality case memo</p>
          </article>
        </div>
      </section>

      <section className="grid">
        {modules.map((module, index) => (
          <ModuleCard key={module.slug} module={module} index={index} />
        ))}
      </section>
    </main>
  );
}
