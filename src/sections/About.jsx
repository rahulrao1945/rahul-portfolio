import {
  Brain,
  Sparkles,
  ScanEye,
  FileCode2,
  Database,
  Puzzle,
  Laptop2,
  Globe,
} from "lucide-react";
import { profile, interests } from "../data/profile";
import Reveal from "../components/Reveal";

const INTEREST_ICONS = {
  "Machine Learning": Brain,
  "Artificial Intelligence": Sparkles,
  "Computer Vision": ScanEye,
  Python: FileCode2,
  "Data Science": Database,
  "Problem Solving": Puzzle,
  "Software Development": Laptop2,
  "Web Development": Globe,
};

export default function About() {
  return (
    <section id="about" className="relative py-28 px-5">
      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-14 items-start">
          <Reveal>
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--color-cyan)]">
              01 · About
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-semibold tracking-tight">
              A student building toward{" "}
              <span className="text-gradient">Machine Learning.</span>
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-[var(--color-text-muted)]">
              {profile.about}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 max-w-sm">
              <div className="glass rounded-xl p-4">
                <p className="font-mono text-2xl text-[var(--color-amber)]">2nd</p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">Year, B.Tech CSE</p>
              </div>
              <div className="glass rounded-xl p-4">
                <p className="font-mono text-2xl text-[var(--color-cyan)]">5+</p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">Projects &amp; certificates</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h3 className="font-display text-lg font-medium text-[var(--color-text)] mb-6">
              Areas of interest
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {interests.map((interest, i) => {
                const Icon = INTEREST_ICONS[interest.name] ?? Sparkles;
                return (
                  <Reveal
                    key={interest.name}
                    delay={i * 60}
                    className={`group rounded-2xl p-5 border transition-all duration-300 hover:-translate-y-1 ${
                      interest.primary
                        ? "border-[var(--color-amber)]/40 bg-[var(--color-amber)]/[0.06]"
                        : "border-[var(--color-border)] bg-[var(--color-surface)]/60 hover:border-[var(--color-border-strong)]"
                    }`}
                  >
                    <Icon
                      size={22}
                      strokeWidth={1.7}
                      className={
                        interest.primary
                          ? "text-[var(--color-amber)]"
                          : "text-[var(--color-cyan)] group-hover:text-[var(--color-amber)] transition-colors"
                      }
                    />
                    <p className="mt-3 text-sm font-medium leading-snug">{interest.name}</p>
                    {interest.primary && (
                      <span className="mt-2 inline-block font-mono text-[10px] uppercase tracking-wider text-[var(--color-amber)]">
                        Primary focus
                      </span>
                    )}
                  </Reveal>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
