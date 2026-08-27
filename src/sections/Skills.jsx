import { Terminal, BrainCircuit, Code2, Cpu } from "lucide-react";
import { skillGroups } from "../data/skills";
import Reveal from "../components/Reveal";

const ICONS = { Terminal, BrainCircuit, Code2, Cpu };

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-5">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-14 max-w-xl">
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--color-cyan)]">
            03 · Skills
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-semibold tracking-tight">
            Tools I'm building with
          </h2>
          <p className="mt-4 text-[15px] text-[var(--color-text-muted)]">
            Technologies I've worked with or am actively learning — with Machine Learning &amp;
            AI at the center of it.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillGroups.map((group, i) => {
            const Icon = ICONS[group.icon] ?? Terminal;
            return (
              <Reveal
                key={group.category}
                delay={i * 90}
                className={`group rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1.5 ${
                  group.highlight
                    ? "border-[var(--color-amber)]/35 bg-gradient-to-b from-[var(--color-amber)]/[0.07] to-transparent"
                    : "border-[var(--color-border)] bg-[var(--color-surface)]/60 hover:border-[var(--color-border-strong)]"
                }`}
              >
                <span
                  className={`grid place-items-center w-11 h-11 rounded-xl border ${
                    group.highlight
                      ? "border-[var(--color-amber)]/40 text-[var(--color-amber)] bg-[var(--color-amber)]/10"
                      : "border-[var(--color-border-strong)] text-[var(--color-cyan)] bg-[var(--color-surface-2)]"
                  }`}
                >
                  <Icon size={20} strokeWidth={1.7} />
                </span>
                <h3 className="mt-4 font-display font-medium text-[15px]">{group.category}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-white/5 text-[var(--color-text-muted)] group-hover:text-[var(--color-text)] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                {group.highlight && (
                  <span className="mt-4 inline-block font-mono text-[10px] uppercase tracking-wider text-[var(--color-amber)]">
                    Primary focus
                  </span>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
