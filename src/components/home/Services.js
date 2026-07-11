import { services } from "../../data/services";
import { profile } from "../../data/profile";
import { Section } from "../ui/Section";

export const Services = () => (
  <Section
    id="about"
    eyebrow="what I do"
    title={<>Three crafts, <span className="italic text-accent">one obsession</span>.</>}
    subtitle={profile.longBio}
  >
    <div className="grid gap-6 md:grid-cols-3">
      {services.map((s, i) => (
        <div key={s.title} className="card grain group overflow-hidden p-8">
          <div className="mb-5 flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-2xl text-accent">
              {s.icon}
            </div>
            <span className="font-mono text-xs text-ink-200/50">
              0{i + 1}
            </span>
          </div>
          <h3 className="font-display text-2xl font-semibold text-ink-50">
            {s.title}
          </h3>
          <p className="mt-3 text-ink-200/80">{s.description}</p>
        </div>
      ))}
    </div>
  </Section>
);
