import { profile } from "../../data/profile";
import { ArrowRightIcon } from "../ui/Icon";

export const Hero = ({ onOpenContact }) => (
  <section
    id="home"
    className="relative min-h-screen overflow-hidden pt-32 md:pt-40"
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

    <div className="container-x">
      <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-xs">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            <span className="text-ink-200">
              Open to iOS + AI collaborations
            </span>
          </div>

          <h1 className="font-display text-6xl font-semibold leading-[0.95] tracking-tight text-ink-50 md:text-8xl">
            Hey, I'm{" "}
            <span className="italic text-accent">Pratik</span>
            <span className="inline-block w-[0.15em] animate-blink text-accent">
              _
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-200/80 md:text-xl">
            I ship <span className="text-accent">iOS apps</span> at IndiaMART,
            tinker with <span className="text-accent">on-device AI</span>, and
            invest in <span className="text-accent">public markets</span>.
            Currently based in {profile.location}.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              See my work <ArrowRightIcon />
            </a>
            <button onClick={onOpenContact} className="btn-ghost">
              Book a call
            </button>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
            <Stat n={profile.yearsExperience} l="Years shipping" />
            <Stat n={profile.projectsShipped} l="Projects built" />
            <Stat n={profile.yearsInvesting} l="Years investing" />
          </div>
        </div>

        {/* ─── right side — frameless feathered portrait ─────────────── */}
        <Portrait />
      </div>
    </div>
  </section>
);

// Portrait v4 — completely frameless.
// The photo edges dissolve into the page via a soft radial mask, with a
// massive faded serif letterform behind and a floating signature block.
const Portrait = () => (
  <div className="relative mx-auto flex h-[36rem] w-full max-w-lg items-center justify-center">
    {/* Giant serif letterform behind everything */}
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 flex select-none items-center justify-center overflow-hidden"
    >
      <span className="font-display text-[32rem] font-black leading-none tracking-tighter text-ink-50 opacity-[0.05]">
        p.
      </span>
    </div>

    {/* Soft accent light behind head area */}
    <div
      aria-hidden
      className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 blur-3xl"
      style={{
        background:
          "radial-gradient(circle, rgba(94,234,212,0.4), rgba(244,114,182,0.25) 50%, transparent 75%)",
      }}
    />

    {/* The photo — feathered edges, no frame at all */}
    <img
      src={profile.profileImage}
      alt={profile.name}
      className="relative h-[34rem] w-auto max-w-full object-contain"
      style={{
        maskImage:
          "radial-gradient(ellipse 65% 75% at 50% 45%, black 40%, transparent 92%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 65% 75% at 50% 45%, black 40%, transparent 92%)",
      }}
    />

    {/* Signature block — floats bottom-left as if handwritten in the corner */}
    <div className="absolute bottom-4 left-2 md:bottom-8 md:left-6">
      <div className="font-display text-2xl italic text-ink-50/90 md:text-3xl">
        — pratik
      </div>
      <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.3em] text-ink-200/60">
        est. {profile.careerStartYear}
      </div>
    </div>

    {/* Availability marker — floats top-right */}
    <div className="absolute right-2 top-6 md:right-6">
      <div className="flex items-center gap-2 font-mono text-[11px] text-ink-100">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
        <span className="tracking-widest uppercase">available</span>
      </div>
    </div>
  </div>
);

const Stat = ({ n, l }) => (
  <div>
    <div className="font-display text-3xl font-semibold text-accent md:text-4xl">
      {n}
    </div>
    <div className="mt-1 font-mono text-xs uppercase tracking-widest text-ink-200/70">
      {l}
    </div>
  </div>
);
