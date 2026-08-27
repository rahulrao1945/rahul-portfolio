import { ExternalLink, BarChart3, Star, ScanEye, Lock, Bot, ShoppingCart } from "lucide-react";
import { GithubIcon } from "../components/BrandIcons";
import { projects } from "../data/projects";
import Reveal from "../components/Reveal";

const PROJECT_ICONS = {
  "cat-vs-dog": ScanEye,
  "smart-locker": Lock,
  "line-follower": Bot,
  "circuit-mart": ShoppingCart,
};

function LinkButton({ href, children, icon: Icon }) {
  const isPlaceholder = !href || href.startsWith("YOUR_");
  return (
    <a
      href={isPlaceholder ? undefined : href}
      target={isPlaceholder ? undefined : "_blank"}
      rel="noreferrer"
      aria-disabled={isPlaceholder}
      title={isPlaceholder ? "Link coming soon" : children}
      onClick={(e) => isPlaceholder && e.preventDefault()}
      className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg font-mono text-xs border transition-all ${
        isPlaceholder
          ? "border-[var(--color-border)] text-[var(--color-text-faint)] cursor-not-allowed"
          : "border-[var(--color-border-strong)] text-[var(--color-text)] hover:border-[var(--color-amber)]/50 hover:text-[var(--color-amber)] hover:-translate-y-0.5"
      }`}
    >
      <Icon size={13} /> {children}
    </a>
  );
}

function ProjectCard({ project, delay }) {
  const Icon = PROJECT_ICONS[project.id] ?? GithubIcon;
  return (
    <Reveal
      delay={delay}
      className={`group relative rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-2 ${
        project.featured
          ? "border-[var(--color-amber)]/35 md:col-span-2"
          : "border-[var(--color-border)] hover:border-[var(--color-border-strong)]"
      } bg-[var(--color-surface)]/60`}
    >
      {project.featured && (
        <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--color-amber)]/15 border border-[var(--color-amber)]/40 font-mono text-[10px] uppercase tracking-wider text-[var(--color-amber)]">
          <Star size={11} fill="currentColor" /> Featured · ML
        </div>
      )}

      {/* Illustration */}
      <div
        className={`relative h-40 flex items-center justify-center overflow-hidden ${
          project.featured
            ? "bg-gradient-to-br from-[var(--color-amber)]/15 via-[var(--color-surface)] to-[var(--color-cyan)]/10"
            : "bg-[var(--color-surface-2)]"
        }`}
      >
        <div className="absolute inset-0 grid-fade opacity-40" />
        <Icon
          size={56}
          strokeWidth={1.2}
          className="relative text-[var(--color-text)]/20 group-hover:text-[var(--color-amber)]/40 group-hover:scale-110 transition-all duration-500"
        />
      </div>

      <div className="p-6">
        <p className="font-mono text-[11px] uppercase tracking-wider text-[var(--color-cyan)]">
          {project.category}
        </p>
        <h3 className="mt-2 font-display text-xl font-medium">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-white/5 text-[var(--color-text-muted)]"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2.5">
          {project.links.github && (
            <LinkButton href={project.links.github} icon={GithubIcon}>
              GitHub
            </LinkButton>
          )}
          {project.links.kaggle && (
            <LinkButton href={project.links.kaggle} icon={BarChart3}>
              Kaggle
            </LinkButton>
          )}
          {project.links.demo && (
            <LinkButton href={project.links.demo} icon={ExternalLink}>
              Live Demo
            </LinkButton>
          )}
        </div>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-5">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-14 max-w-xl">
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--color-cyan)]">
            04 · Projects
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-semibold tracking-tight">
            Things I've built
          </h2>
          <p className="mt-4 text-[15px] text-[var(--color-text-muted)]">
            A mix of Machine Learning, IoT/robotics and web projects — from coursework and
            hackathons.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 90} />
          ))}
        </div>
      </div>
    </section>
  );
}
