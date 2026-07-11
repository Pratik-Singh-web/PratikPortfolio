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

        {/* ─── right side — editorial portrait, no card ─────────────── */}
        <Portrait />
      </div>
    </div>
  </section>
);

const Portrait = () => (
  <div className="relative mx-auto flex w-full max-w-md items-center justify-center py-8 lg:py-0">
    {/* Soft aurora glow behind */}
    <div
      className="pointer-events-none absolute inset-0 -z-10 rounded-full opacity-70 blur-3xl"
      style={{
        background:
          "radial-gradient(ellipse at 30% 30%, rgba(94,234,212,0.35), transparent 55%), radial-gradient(ellipse at 70% 70%, rgba(244,114,182,0.28), transparent 60%)",
      }}
    />

    {/* Arch-shaped portrait (no card) */}
    <div className="relative">
      {/* animated gradient ring hugging the arch */}
      <div
        className="absolute -inset-[3px] rounded-t-full rounded-b-[2rem] opacity-70 blur-[1px]"
        style={{
          background:
            "conic-gradient(from 180deg at 50% 50%, #5eead4, #f472b6, #fbbf24, #5eead4)",
          animation: "shimmer 6s linear infinite",
          maskImage:
            "linear-gradient(#000, #000) content-box, linear-gradient(#000, #000)",
          WebkitMaskImage:
            "linear-gradient(#000, #000) content-box, linear-gradient(#000, #000)",
          padding: "3px",
        }}
      />

      <img
        src={profile.profileImage}
        alt={profile.name}
        className="relative aspect-[4/5] w-[22rem] rounded-t-full rounded-b-[2rem] object-cover shadow-[0_40px_80px_-40px_rgba(94,234,212,0.4)] md:w-[24rem]"
      />

      {/* Rotating circular stamp — bottom-left of portrait */}
      <RotatingStamp />

      {/* Floating "online" pill — top right */}
      <div className="absolute -right-3 top-6 flex items-center gap-2 rounded-full border border-white/15 bg-ink-950/70 px-3 py-1.5 font-mono text-xs backdrop-blur-md md:-right-8">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
        <span className="text-ink-100">online</span>
      </div>

      {/* Floating location — bottom right */}
      <div className="absolute -right-4 bottom-16 rounded-2xl border border-white/15 bg-ink-950/70 px-3 py-2 font-mono text-xs backdrop-blur-md md:-right-10">
        <div className="text-ink-200/70">based in</div>
        <div className="text-ink-50">Greater Noida ↗</div>
      </div>

      {/* Floating role tag — left middle */}
      <div className="absolute -left-2 top-1/2 -translate-y-1/2 md:-left-8">
        <div className="rotate-[-8deg] rounded-full border border-accent/40 bg-ink-950/70 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-accent backdrop-blur-md">
          ✦ iOS · AI · Markets
        </div>
      </div>
    </div>
  </div>
);

const RotatingStamp = () => (
  <div
    className="absolute -bottom-6 -left-6 h-24 w-24 md:-bottom-8 md:-left-8"
    style={{ animation: "spin 22s linear infinite" }}
  >
    <svg viewBox="0 0 100 100" className="h-full w-full">
      <defs>
        <path
          id="stamp-circle"
          d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
          fill="none"
        />
      </defs>
      <circle
        cx="50"
        cy="50"
        r="42"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.15"
        strokeWidth="0.5"
        className="text-ink-50"
      />
      <text className="fill-accent font-mono text-[8.5px] uppercase tracking-[0.28em]">
        <textPath href="#stamp-circle">
          Available for work · Available for work ·
        </textPath>
      </text>
      <text
        x="50"
        y="55"
        textAnchor="middle"
        className="fill-accent font-display text-[14px] italic"
      >
        ✦
      </text>
    </svg>
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
