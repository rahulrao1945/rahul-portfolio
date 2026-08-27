import { GraduationCap, School } from "lucide-react";
import { education } from "../data/education";
import Reveal from "../components/Reveal";

export default function Education() {
  return (
    <section id="education" className="relative py-28 px-5">
      <div className="mx-auto max-w-4xl">
        <Reveal className="mb-16">
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--color-cyan)]">
            02 · Education
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-semibold tracking-tight">
            Academic timeline
          </h2>
        </Reveal>

        <div className="relative pl-10">
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-[var(--color-amber)]/60 via-[var(--color-border-strong)] to-transparent" />

          {education.map((item, i) => (
            <Reveal key={item.institution + item.degree} delay={i * 100} className="relative pb-12 last:pb-0">
              <span
                className={`absolute -left-10 top-1 w-8 h-8 grid place-items-center rounded-full border ${
                  i === 0
                    ? "bg-[var(--color-amber)]/15 border-[var(--color-amber)]/50 text-[var(--color-amber)]"
                    : "bg-[var(--color-surface-2)] border-[var(--color-border-strong)] text-[var(--color-cyan)]"
                }`}
              >
                {i === 0 ? <GraduationCap size={15} /> : <School size={15} />}
              </span>

              <div className="glass rounded-2xl p-6 hover:border-[var(--color-border-strong)] transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-display text-lg font-medium">{item.institution}</h3>
                  <span
                    className={`font-mono text-[11px] px-2.5 py-1 rounded-full border ${
                      item.tag === "In progress"
                        ? "border-[var(--color-amber)]/40 text-[var(--color-amber)]"
                        : "border-[var(--color-cyan)]/40 text-[var(--color-cyan)]"
                    }`}
                  >
                    {item.tag}
                  </span>
                </div>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">{item.degree}</p>
                <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-[var(--color-text-faint)]">
                  <span>{item.period}</span>
                  {item.detail && (
                    <span className="text-[var(--color-text)]">Score — {item.detail}</span>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
