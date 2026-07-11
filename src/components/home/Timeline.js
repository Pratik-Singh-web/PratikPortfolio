import { experiences } from "../../data/experiences";
import { Section } from "../ui/Section";

export const Timeline = () => (
  <Section
    id="work"
    eyebrow="career"
    title={<>The path so <span className="italic text-accent">far</span>.</>}
    subtitle="Every step compounded — student, investor, engineer, and now stepping into AI."
  >
    <ol className="relative border-l border-white/10 pl-8 md:pl-12">
      {experiences.map((exp, i) => (
        <li key={exp.role} className="mb-14 last:mb-0">
          <div className="absolute -left-[9px] flex h-4 w-4 items-center justify-center rounded-full border border-accent/60 bg-ink-950">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          </div>
          <div className="font-mono text-xs uppercase tracking-widest text-accent">
            {exp.period}
          </div>
          <h3 className="mt-2 font-display text-2xl font-semibold text-ink-50 md:text-3xl">
            {exp.role}
          </h3>
          <div className="mt-1 text-ink-200/70">{exp.company}</div>
          <p className="mt-4 max-w-2xl text-ink-200/80">{exp.description}</p>
        </li>
      ))}
    </ol>
  </Section>
);
