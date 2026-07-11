import { profile } from "../../data/profile";
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  PhoneIcon,
  WhatsappIcon,
} from "../ui/Icon";

export const Footer = () => (
  <footer id="contact" className="relative overflow-hidden border-t border-white/10 bg-ink-950">
    <div className="absolute inset-0 bg-aurora opacity-30" />
    <div className="container-x relative py-24">
      <div className="mb-10 max-w-3xl">
        <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-accent">
          <span className="h-px w-8 bg-accent" /> contact
        </div>
        <h2 className="text-4xl font-semibold text-ink-50 md:text-6xl">
          Let's build something<br />
          <span className="italic text-accent">worth</span> using.
        </h2>
        <p className="mt-6 text-lg text-ink-200/80">
          Working on a mobile product, an AI idea, or want a second opinion?
          Ring me directly or drop a message on WhatsApp.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={profile.social.tel} className="btn-primary">
            <PhoneIcon /> Call {profile.phoneDisplay}
          </a>
          <a
            href={profile.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <WhatsappIcon /> WhatsApp
          </a>
          <a href={profile.social.email} className="btn-ghost">
            Or email me
          </a>
        </div>
      </div>

      <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center">
        <p className="font-mono text-sm text-ink-200/70">
          © {new Date().getFullYear()} Pratik Singh · Made in {profile.location}.
        </p>
        <div className="flex items-center gap-3">
          <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 p-2.5 text-ink-100 transition hover:border-accent hover:text-accent" aria-label="GitHub">
            <GithubIcon />
          </a>
          <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 p-2.5 text-ink-100 transition hover:border-accent hover:text-accent" aria-label="LinkedIn">
            <LinkedinIcon />
          </a>
          <a href={profile.social.instagram} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 p-2.5 text-ink-100 transition hover:border-accent hover:text-accent" aria-label="Instagram">
            <InstagramIcon />
          </a>
        </div>
      </div>
    </div>
  </footer>
);
