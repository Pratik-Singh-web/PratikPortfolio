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

        {/* ─── right side — transparent cutout, no dark backdrop ─────── */}
        <Portrait />
      </div>
    </div>
  </section>
);

// Portrait v5 — transparent cutout floating on the page.
// The photo's own background is removed (public/profile-cutout.png),
// so we can present the person cleanly on top of the aurora page with
// no dark frame, no mask, no ring, no card.
const Portrait = () => (
  <div className="relative mx-auto flex h-[38rem] w-full max-w-lg items-end justify-center">
    {/* Big serif letterform behind — page-level, not around the photo */}
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 flex select-none items-center justify-center overflow-hidden"
    >
      <span className="font-display text-[26rem] font-black leading-none tracking-tighter text-ink-50 opacity-[0.06]">
        p.
      </span>
    </div>

    {/* Diffuse aurora glow — sits behind the head area */}
    <div
      aria-hidden
      className="pointer-events-none absolute left-1/2 top-[18%] h-80 w-80 -translate-x-1/2 rounded-full opacity-60 blur-3xl"
      style={{
        background:
          "radial-gradient(circle, rgba(94,234,212,0.45), rgba(244,114,182,0.25) 55%, transparent 80%)",
      }}
    />

    {/* Floating meta chips — anchored to page corners, not to the photo */}
    <div className="pointer-events-none absolute right-0 top-4 flex flex-col items-end gap-3 font-mono text-[11px] text-ink-100">
      <div className="flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
        <span className="uppercase tracking-widest">available</span>
      </div>
      <div className="text-right text-ink-200/70">
        <div className="text-ink-200/50">based in</div>
        <div className="text-ink-50">Greater Noida, IN ↗</div>
      </div>
    </div>

    <div className="pointer-events-none absolute bottom-4 left-0 font-display italic text-ink-50/90">
      <div className="text-3xl">— pratik</div>
      <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.3em] text-ink-200/60 not-italic">
        est. {profile.careerStartYear}
      </div>
    </div>

    {/* The cutout — no card, no ring, no mask; drop-shadow gives it depth */}
    <img
      src={process.env.PUBLIC_URL + "/profile-cutout.png"}
      alt={profile.name}
      className="relative z-10 h-[38rem] w-auto max-w-full object-contain"
      style={{
        filter:
          "drop-shadow(0 30px 60px rgba(94,234,212,0.25)) drop-shadow(0 10px 30px rgba(0,0,0,0.4))",
      }}
      onError={(e) => {
        // fall back to original if cutout file isn't present yet
        e.target.onerror = null;
        e.target.src = profile.profileImage;
      }}
    />
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
