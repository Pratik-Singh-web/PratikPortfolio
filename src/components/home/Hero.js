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

        {/* right — portrait card */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-accent/40 via-magenta/30 to-amber/20 opacity-40 blur-2xl" />
          <div className="grain relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-2 backdrop-blur">
            <img
              src={profile.profileImage}
              alt={profile.name}
              className="aspect-[4/5] w-full rounded-[2rem] object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl border border-white/10 bg-ink-950/70 px-4 py-3 backdrop-blur-xl">
              <div>
                <div className="font-display text-lg font-semibold text-ink-50">
                  {profile.name}
                </div>
                <div className="font-mono text-xs text-ink-200/80">
                  {profile.role}
                </div>
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-ink-950">
                <ArrowRightIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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
