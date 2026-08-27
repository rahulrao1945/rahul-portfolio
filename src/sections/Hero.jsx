import { useEffect, useState } from "react";
import { ArrowDown, Download, Mail, Trophy, BarChart3, Code } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/BrandIcons";
import { profile } from "../data/profile";
import { socials } from "../data/social";
import NeuralField from "../components/NeuralField";

const ICONS = { Github: GithubIcon, Linkedin: LinkedinIcon, Trophy, BarChart3, Code };

const LINES = [
  { prompt: "whoami", output: profile.name },
  { prompt: "cat role.txt", output: `${profile.headline} · ${profile.subHeadline}` },
  { prompt: "focus --primary", output: "Machine Learning ▸ Artificial Intelligence" },
];

function useTypedLines(lines) {
  const [renderedLines, setRenderedLines] = useState([]);
  const [current, setCurrent] = useState({ lineIndex: 0, field: "prompt", text: "" });

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setRenderedLines(lines.map((l) => ({ prompt: l.prompt, output: l.output })));
      setCurrent(null);
      return;
    }

    let cancelled = false;
    async function run() {
      const done = [];
      for (let i = 0; i < lines.length; i++) {
        const { prompt, output } = lines[i];
        for (let c = 1; c <= prompt.length; c++) {
          if (cancelled) return;
          setCurrent({ lineIndex: i, field: "prompt", text: prompt.slice(0, c) });
          await sleep(28);
        }
        await sleep(250);
        for (let c = 1; c <= output.length; c++) {
          if (cancelled) return;
          setCurrent({ lineIndex: i, field: "output", text: output.slice(0, c) });
          await sleep(14);
        }
        await sleep(320);
        done.push({ prompt, output });
        setRenderedLines([...done]);
      }
      setCurrent(null);
    }
    run();
    return () => {
      cancelled = true;
    };
  }, [lines]);

  return { renderedLines, current };
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

export default function Hero() {
  const { renderedLines, current } = useTypedLines(LINES);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden"
    >
      <div className="absolute inset-0 grid-fade" />
      <div className="absolute inset-0 opacity-70">
        <NeuralField className="w-full h-full" />
      </div>
      <div className="absolute -top-40 -right-40 w-[32rem] h-[32rem] rounded-full bg-[var(--color-amber)]/10 blur-[120px] animate-float-slow" />
      <div className="absolute bottom-0 -left-32 w-[26rem] h-[26rem] rounded-full bg-[var(--color-cyan)]/10 blur-[110px] animate-float" />

      <div className="relative mx-auto max-w-6xl px-5 grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center w-full">
        <div>
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--color-cyan)] mb-5 opacity-0 animate-fade-up">
            Portfolio · {profile.status} · {profile.college}
          </p>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.02] tracking-tight opacity-0 animate-fade-up [animation-delay:80ms]">
            {profile.name}
          </h1>

          <h2 className="mt-5 font-display text-xl sm:text-2xl text-[var(--color-text-muted)] opacity-0 animate-fade-up [animation-delay:160ms]">
            {profile.headline} <span className="text-[var(--color-text-faint)]">|</span>{" "}
            <span className="text-gradient font-medium">{profile.subHeadline}</span>
          </h2>

          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-[var(--color-text-muted)] opacity-0 animate-fade-up [animation-delay:240ms]">
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3 opacity-0 animate-fade-up [animation-delay:320ms]">
            <a
              href="#projects"
              className="px-5 py-3 rounded-xl bg-[var(--color-amber)] text-[#141005] text-sm font-semibold hover:brightness-110 hover:-translate-y-0.5 transition-all"
            >
              View My Projects
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-[var(--color-border-strong)] text-sm font-medium hover:bg-white/5 hover:-translate-y-0.5 transition-all"
            >
              <Download size={16} /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
            >
              <Mail size={16} /> Contact Me
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4 opacity-0 animate-fade-up [animation-delay:400ms]">
            {socials.map(({ name, icon, url }) => {
              const Icon = ICONS[icon];
              const isPlaceholder = url.startsWith("YOUR_");
              return (
                <a
                  key={name}
                  href={isPlaceholder ? "#contact" : url}
                  target={isPlaceholder ? undefined : "_blank"}
                  rel="noreferrer"
                  title={isPlaceholder ? `${name} link coming soon` : name}
                  className="w-10 h-10 grid place-items-center rounded-xl border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-amber)] hover:border-[var(--color-amber)]/40 hover:-translate-y-0.5 transition-all"
                >
                  <Icon size={17} strokeWidth={1.8} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="opacity-0 animate-fade-up [animation-delay:200ms]">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[var(--color-amber)]/15 via-transparent to-[var(--color-cyan)]/15 blur-2xl" />
            <div className="relative rounded-2xl glass overflow-hidden shadow-2xl shadow-black/40">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-[var(--color-border)]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-3 font-mono text-[11px] text-[var(--color-text-faint)]">
                  rahul@portfolio: ~
                </span>
              </div>
              <div className="p-5 font-mono text-[13px] leading-7 min-h-[220px]">
                {renderedLines.map((l, i) => (
                  <div key={i}>
                    <span className="text-[var(--color-cyan)]">➜ </span>
                    <span className="text-[var(--color-text-muted)]">{l.prompt}</span>
                    <div className="text-[var(--color-text)] pl-4">{l.output}</div>
                  </div>
                ))}
                {current && (
                  <div>
                    <span className="text-[var(--color-cyan)]">➜ </span>
                    {current.field === "prompt" ? (
                      <span className="text-[var(--color-text-muted)]">
                        {current.text}
                        <span className="inline-block w-[7px] h-[14px] bg-[var(--color-amber)] ml-0.5 align-middle animate-blink" />
                      </span>
                    ) : (
                      <>
                        <span className="text-[var(--color-text-muted)]">
                          {LINES[current.lineIndex].prompt}
                        </span>
                        <div className="text-[var(--color-text)] pl-4">
                          {current.text}
                          <span className="inline-block w-[7px] h-[14px] bg-[var(--color-amber)] ml-0.5 align-middle animate-blink" />
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Profile photo chip */}
            <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-2xl overflow-hidden border-2 border-[var(--color-bg)] shadow-xl bg-[var(--color-surface-2)]">
              <img
                src={profile.photo}
                alt={`${profile.name} profile photo`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextSibling.style.display = "grid";
                }}
              />
              <div
                className="w-full h-full hidden place-items-center font-display text-2xl text-[var(--color-amber)]"
                style={{ display: "none" }}
              >
                RY
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--color-text-faint)] hover:text-[var(--color-amber)] transition-colors animate-bounce"
        aria-label="Scroll to About section"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
