import { useState } from "react";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/BrandIcons";
import { profile } from "../data/profile";
import { socials } from "../data/social";
import Reveal from "../components/Reveal";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const github = socials.find((s) => s.name === "GitHub");
  const linkedin = socials.find((s) => s.name === "LinkedIn");

  function handleSubmit(e) {
    e.preventDefault();
    // No backend is configured yet — see the note below the form
    // for how to wire this up (Formspree, EmailJS, or your own API).
    setSent(true);
  }

  return (
    <section id="contact" className="relative py-28 px-5">
      <div className="mx-auto max-w-6xl grid lg:grid-cols-[0.9fr_1.1fr] gap-14">
        <Reveal>
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--color-cyan)]">
            07 · Contact
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-semibold tracking-tight">
            Let's build something.
          </h2>
          <p className="mt-4 max-w-md text-[15px] text-[var(--color-text-muted)]">
            Open to internships, collaborations and interesting Machine Learning projects.
            Reach out through any of these.
          </p>

          <div className="mt-8 space-y-3">
            <a
              href={`mailto:${raorahul11123}`}
              className="flex items-center gap-3 px-4 py-3 rounded-xl border border-[var(--color-border)] hover:border-[var(--color-amber)]/40 transition-colors group"
            >
              <span className="grid place-items-center w-9 h-9 rounded-lg bg-[var(--color-surface-2)] text-[var(--color-amber)]">
                <Mail size={16} />
              </span>
              <span className="font-mono text-sm text-[var(--color-text-muted)] group-hover:text-[var(--color-text)]">
                {profile.email}
              </span>
            </a>
            <a
              href={linkedin.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded-xl border border-[var(--color-border)] hover:border-[var(--color-amber)]/40 transition-colors group"
            >
              <span className="grid place-items-center w-9 h-9 rounded-lg bg-[var(--color-surface-2)] text-[var(--color-cyan)]">
                <LinkedinIcon size={16} />
              </span>
              <span className="font-mono text-sm text-[var(--color-text-muted)] group-hover:text-[var(--color-text)]">
                linkedin.com/in/rahul-yadav-b54354320
              </span>
            </a>
            <a
              href={github.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded-xl border border-[var(--color-border)] hover:border-[var(--color-amber)]/40 transition-colors group"
            >
              <span className="grid place-items-center w-9 h-9 rounded-lg bg-[var(--color-surface-2)] text-[var(--color-cyan)]">
                <GithubIcon size={16} />
              </span>
              <span className="font-mono text-sm text-[var(--color-text-muted)] group-hover:text-[var(--color-text)]">
                github.com/rahulrao1945
              </span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form onSubmit={handleSubmit} className="glass rounded-2xl p-7 space-y-5">
            {sent ? (
              <div className="flex flex-col items-center justify-center text-center py-10">
                <CheckCircle2 size={36} className="text-[var(--color-cyan)]" />
                <p className="mt-4 font-display text-lg">Message ready to send</p>
                <p className="mt-2 text-sm text-[var(--color-text-muted)] max-w-xs">
                  This form isn't connected to a backend yet — see the note below for how to
                  wire it up.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-5 font-mono text-xs text-[var(--color-amber)] hover:underline"
                >
                  Send another
                </button>
              </div>
            ) : (
              <>
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-[var(--color-text-muted)] mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--color-surface-2)] border border-[var(--color-border)] text-sm placeholder:text-[var(--color-text-faint)] focus:border-[var(--color-amber)]/50 outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-[var(--color-text-muted)] mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--color-surface-2)] border border-[var(--color-border)] text-sm placeholder:text-[var(--color-text-faint)] focus:border-[var(--color-amber)]/50 outline-none transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-[var(--color-text-muted)] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--color-surface-2)] border border-[var(--color-border)] text-sm placeholder:text-[var(--color-text-faint)] focus:border-[var(--color-amber)]/50 outline-none transition-colors resize-none"
                    placeholder="Tell me about the opportunity..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[var(--color-amber)] text-[#141005] text-sm font-semibold hover:brightness-110 transition"
                >
                  <Send size={15} /> Send Message
                </button>
                <p className="text-[11px] text-[var(--color-text-faint)] leading-relaxed">
                  This is a frontend-only form. To make it actually deliver messages, connect a
                  service like{" "}
                  <span className="text-[var(--color-text-muted)]">Formspree</span>,{" "}
                  <span className="text-[var(--color-text-muted)]">EmailJS</span>, or your own
                  API endpoint inside <code className="font-mono">handleSubmit</code> in{" "}
                  <code className="font-mono">Contact.jsx</code>.
                </p>
              </>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
