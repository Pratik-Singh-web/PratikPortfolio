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
            <Stat n="4+" l="Years investing" />
          </div>
        </div>

        {/* ─── right side — clean circular portrait ───────────────── */}
        <Portrait />
      </div>
    </div>
  </section>
);

const Portrait = () => (
  <div className="relative mx-auto flex w-full max-w-md items-center justify-center py-6 lg:py-0">
    {/* Massive faded "P" behind everything */}
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 flex select-none items-center justify-center overflow-hidden"
    >
      <span className="font-display text-[26rem] font-black leading-none tracking-tighter text-ink-50 opacity-[0.04]">
        P
      </span>
    </div>

    {/* Soft accent glow */}
    <div
      className="pointer-events-none absolute inset-8 -z-10 rounded-full opacity-60 blur-3xl"
      style={{
        background:
          "radial-gradient(circle at 40% 40%, rgba(94,234,212,0.35), transparent 60%)",
      }}
    />

    <div className="relative aspect-square w-[22rem] md:w-[26rem]">
      {/* Rotating dashed ring */}
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full"
        style={{ animation: "spin 40s linear infinite" }}
      >
        <circle
          cx="100"
          cy="100"
          r="98"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.4"
          strokeDasharray="2 4"
          className="text-accent opacity-60"
        />
      </svg>

      {/* Counter-rotating serif text ring */}
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full"
        style={{ animation: "spin 30s linear infinite reverse" }}
      >
        <defs>
          <path
            id="hero-text-path"
            d="M 100,100 m -88,0 a 88,88 0 1,1 176,0 a 88,88 0 1,1 -176,0"
            fill="none"
          />
        </defs>
        <text className="fill-ink-50 font-display text-[7px] uppercase tracking-[0.55em] opacity-70">
          <textPath href="#hero-text-path" startOffset="0%">
            Pratik Singh · iOS engineer · AI · Investor · Pratik Singh · iOS engineer · AI · Investor ·
          </textPath>
        </text>
      </svg>

      {/* The photo — perfect circle, no frame */}
      <div className="absolute inset-[16%] overflow-hidden rounded-full ring-1 ring-white/10 shadow-[0_30px_80px_-30px_rgba(94,234,212,0.55)]">
        <img
          src={profile.profileImage}
          alt={profile.name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Availability marker — bottom center */}
      <div className="absolute bottom-[2%] left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-2 rounded-full border border-white/15 bg-ink-950/80 px-3.5 py-1.5 font-mono text-[11px] backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="text-ink-100">available for work</span>
        </div>
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
