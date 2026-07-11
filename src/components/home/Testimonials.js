import { testimonials } from "../../data/testimonials";
import { Section } from "../ui/Section";

export const Testimonials = () => (
  <Section
    id="testimonials"
    eyebrow="kind words"
    title={<>What people <span className="italic text-accent">say</span>.</>}
  >
    <div className="grid gap-6 md:grid-cols-3">
      {testimonials.map((t) => (
        <figure key={t.name} className="card p-8">
          <div className="mb-6 font-display text-4xl leading-none text-accent">"</div>
          <blockquote className="text-ink-100/90 leading-relaxed">
            {t.quote}
          </blockquote>
          <figcaption className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
            <img
              src={t.avatar}
              alt={t.name}
              className="h-11 w-11 rounded-full border border-white/10 object-cover"
            />
            <div>
              <div className="font-medium text-ink-50">{t.name}</div>
              <div className="font-mono text-xs text-ink-200/60">{t.role}</div>
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  </Section>
);
