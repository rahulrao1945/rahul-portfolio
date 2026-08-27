import { Award, ExternalLink, Download, BadgeCheck, Sparkles } from "lucide-react";
import { certificates } from "../data/certificates";
import Reveal from "../components/Reveal";

function CertCard({ cert, delay }) {
  const isDoc = cert.fileType === "doc";
  return (
    <Reveal
      delay={delay}
      className={`group rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1.5 ${
        cert.highlight
          ? "border-[var(--color-amber)]/40"
          : "border-[var(--color-border)] hover:border-[var(--color-border-strong)]"
      } bg-[var(--color-surface)]/60`}
    >
      <div
        className={`relative h-28 flex items-center justify-center ${
          cert.highlight
            ? "bg-gradient-to-br from-[var(--color-amber)]/20 to-transparent"
            : "bg-[var(--color-surface-2)]"
        }`}
      >
        <div className="absolute inset-0 grid-fade opacity-30" />
        {cert.highlight ? (
          <Sparkles size={34} strokeWidth={1.3} className="text-[var(--color-amber)]" />
        ) : (
          <Award size={34} strokeWidth={1.3} className="text-[var(--color-text)]/25" />
        )}
        {cert.highlight && (
          <span className="absolute top-3 right-3 font-mono text-[9px] uppercase tracking-wider px-2 py-1 rounded-full bg-[var(--color-amber)]/15 border border-[var(--color-amber)]/40 text-[var(--color-amber)]">
            AI focus
          </span>
        )}
      </div>

      <div className="p-5">
        <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-cyan)]">
          {cert.type}
        </p>
        <h3 className="mt-1.5 font-display text-base font-medium leading-snug">{cert.title}</h3>

        <div className="mt-3 space-y-1 text-xs text-[var(--color-text-muted)]">
          <p className="flex items-center gap-1.5">
            <BadgeCheck size={13} className="text-[var(--color-text-faint)]" /> {cert.organization}
          </p>
          {cert.date && <p>{cert.date}</p>}
          {cert.certId && <p className="font-mono text-[var(--color-text-faint)]">ID: {cert.certId}</p>}
          {cert.duration && <p>{cert.duration}</p>}
        </div>

        <a
          href={cert.file}
          target="_blank"
          rel="noreferrer"
          download={isDoc ? true : undefined}
          className="mt-5 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-[var(--color-border-strong)] font-mono text-xs hover:border-[var(--color-amber)]/50 hover:text-[var(--color-amber)] transition-colors"
        >
          {isDoc ? <Download size={13} /> : <ExternalLink size={13} />}
          {isDoc ? "Download Certificate" : "View Certificate"}
        </a>
      </div>
    </Reveal>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-28 px-5">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-14 max-w-xl">
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--color-cyan)]">
            05 · Certifications
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-semibold tracking-tight">
            Certifications &amp; achievements
          </h2>
          <p className="mt-4 text-[15px] text-[var(--color-text-muted)]">
            Courses completed and events participated in — verifiable, original files.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((cert, i) => (
            <CertCard key={cert.id} cert={cert} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
