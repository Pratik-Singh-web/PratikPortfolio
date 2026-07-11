import { profile } from "../../data/profile";
import { ArrowRightIcon, PhoneIcon, WhatsappIcon } from "../ui/Icon";

export const Hero = ({ onOpenContact }) => (
  <section
    id="home"
    className="relative flex min-h-screen items-center overflow-hidden pt-32 md:pt-40"
  >
    {/* aurora blobs */}
    <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[70rem] w-[70rem] -translate-x-1/2 bg-aurora opacity-60 blur-3xl" />

    {/* subtle grid */}
    <div
      className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        maskImage:
          "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 80%)",
      }}
    />

    {/* Huge faded serif letterform behind everything */}
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 flex select-none items-center justify-center overflow-hidden"
    >
      <span className="font-display text-[38rem] font-black leading-none tracking-tighter text-ink-50 opacity-[0.04] md:text-[46rem]">
        p.
      </span>
    </div>

    <div className="container-x relative">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        {/* Top strip: availability + location */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-3 font-mono text-xs">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="text-ink-200 uppercase tracking-widest">
              Available for iOS + AI collaborations
            </span>
          </div>
          <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-ink-200 md:inline-flex">
            <span>◉</span>
            <span>Greater Noida, IN</span>
          </div>
        </div>

        {/* Massive display headline */}
        <h1 className="font-display font-semibold leading-[0.9] tracking-tight text-ink-50">
          <span className="block text-5xl md:text-7xl">Hey, I'm</span>
          <span className="block text-[5.5rem] md:text-[11rem]">
            <span className="italic text-accent">Pratik</span>
            <span className="inline-block w-[0.12em] animate-blink text-accent align-baseline">
              _
            </span>
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-ink-200/80 md:text-xl">
          I ship <span className="text-accent">iOS apps</span> at IndiaMART,
          tinker with <span className="text-accent">on-device AI</span>, and
          invest in <span className="text-accent">public markets</span>. Based
          in {profile.location}, building at the intersection of mobile,
          intelligence, and markets.
        </p>

        {/* CTAs */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <a href="#projects" className="btn-primary">
            See my work <ArrowRightIcon />
          </a>
          <a href={profile.social.tel} className="btn-ghost">
            <PhoneIcon /> Call
          </a>
          <a
            href={profile.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <WhatsappIcon /> WhatsApp
          </a>
        </div>

        {/* Stats row anchoring the hero */}
        <div className="mt-20 grid w-full max-w-3xl grid-cols-3 gap-6 border-t border-white/10 pt-10">
          <Stat n={profile.yearsExperience} l="Years shipping" />
          <Stat n={profile.projectsShipped} l="Projects built" />
          <Stat n={profile.yearsInvesting} l="Years investing" />
        </div>

        {/* Scroll hint */}
        <div className="mt-20 flex flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.4em] text-ink-200/50">
          <span>scroll</span>
          <span className="animate-floaty">↓</span>
        </div>
      </div>
    </div>
  </section>
);

const Stat = ({ n, l }) => (
  <div className="text-center">
    <div className="font-display text-4xl font-semibold text-accent md:text-5xl">
      {n}
    </div>
    <div className="mt-2 font-mono text-xs uppercase tracking-widest text-ink-200/70">
      {l}
    </div>
  </div>
);
