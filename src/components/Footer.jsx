import { Trophy, BarChart3, Code, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile } from "../data/profile";
import { socials } from "../data/social";

const ICONS = { Github: GithubIcon, Linkedin: LinkedinIcon, Trophy, BarChart3, Code };

export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--color-border)] py-12 px-5">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="grid place-items-center w-9 h-9 rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)] text-[var(--color-amber)]">
            <Terminal size={15} />
          </span>
          <div>
            <p className="font-display font-medium text-sm">{profile.name}</p>
            <p className="font-mono text-[11px] text-[var(--color-text-faint)]">
              {profile.headline} · {profile.subHeadline}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {socials.map(({ name, icon, url }) => {
            const Icon = ICONS[icon];
            const isPlaceholder = url.startsWith("YOUR_");
            return (
              <a
                key={name}
                href={isPlaceholder ? "#contact" : url}
                target={isPlaceholder ? undefined : "_blank"}
                rel="noreferrer"
                title={name}
                className="w-9 h-9 grid place-items-center rounded-lg border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-amber)] hover:border-[var(--color-amber)]/40 transition-colors"
              >
                <Icon size={15} />
              </a>
            );
          })}
        </div>
      </div>

      <p className="mt-8 text-center font-mono text-[11px] text-[var(--color-text-faint)]">
        © 2026 {profile.name}. All Rights Reserved.
      </p>
    </footer>
  );
}
