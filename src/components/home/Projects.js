import { projects } from "../../data/projects";
import { Section } from "../ui/Section";
import { ArrowRightIcon } from "../ui/Icon";

export const Projects = ({ onOpen }) => (
  <Section
    id="projects"
    eyebrow="selected work"
    title={<>Products I've <span className="italic text-accent">shipped</span>.</>}
    subtitle="Handpicked. Each solves a problem I actually had, or wished someone had already built."
  >
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((p, i) => (
        <button
          key={p.slug}
          onClick={() => onOpen(p)}
          className={`card grain group relative overflow-hidden text-left ${
            i === 0 ? "md:col-span-2" : ""
          }`}
        >
          <div className="grid gap-0 md:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden md:aspect-auto">
              <img
                src={p.imageUrl}
                alt={p.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
            </div>
            <div className="flex flex-col justify-between p-8">
              <div>
                <div className="mb-4 flex items-center gap-3 font-mono text-xs text-ink-200/60">
                  <span>{p.year}</span>
                  <span className="h-1 w-1 rounded-full bg-ink-200/30" />
                  <span>{p.tags[0]}</span>
                </div>
                <h3 className="font-display text-3xl font-semibold text-ink-50 md:text-4xl">
                  {p.title}
                </h3>
                <p className="mt-3 text-ink-200/80">{p.tagline}</p>
              </div>
              <div className="mt-8 flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {p.tags.slice(0, 3).map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-ink-100 transition group-hover:border-accent group-hover:bg-accent group-hover:text-ink-950">
                  <ArrowRightIcon />
                </div>
              </div>
            </div>
          </div>
        </button>
      ))}
    </div>
  </Section>
);
