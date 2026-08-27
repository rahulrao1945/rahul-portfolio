import { Trophy, BarChart3, Code, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/BrandIcons";
import { socials } from "../data/social";
import Reveal from "../components/Reveal";

const ICONS = { Github: GithubIcon, Linkedin: LinkedinIcon, Trophy, BarChart3, Code };

export default function Profiles() {
  return (
    <section className="relative py-24 px-5">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-12 max-w-xl">
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--color-cyan)]">
            06 · Elsewhere
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-semibold tracking-tight">
            Coding &amp; learning profiles
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {socials.map(({ name, icon, url }, i) => {
            const Icon = ICONS[icon];
            const isPlaceholder = url.startsWith("YOUR_");
            return (
              <Reveal key={name} delay={i * 70}>
                <a
                  href={isPlaceholder ? "#contact" : url}
                  target={isPlaceholder ? undefined : "_blank"}
                  rel="noreferrer"
                  className="group flex flex-col h-full rounded-2xl p-5 border border-[var(--color-border)] bg-[var(--color-surface)]/60 hover:border-[var(--color-amber)]/40 hover:-translate-y-1.5 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <span className="grid place-items-center w-10 h-10 rounded-xl bg-[var(--color-surface-2)] text-[var(--color-cyan)] group-hover:text-[var(--color-amber)] transition-colors">
                      <Icon size={18} strokeWidth={1.7} />
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="text-[var(--color-text-faint)] group-hover:text-[var(--color-amber)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    />
                  </div>
                  <p className="mt-4 font-display font-medium text-sm">{name}</p>
                  <p className="mt-1 font-mono text-[11px] text-[var(--color-text-faint)]">
                    {isPlaceholder ? "Link coming soon" : "View profile"}
                  </p>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
