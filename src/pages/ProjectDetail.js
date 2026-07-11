import { projects } from "../data/projects";
import { profile } from "../data/profile";
import { ArrowLeftIcon, ExternalIcon, ArrowRightIcon } from "../components/ui/Icon";

export const ProjectDetail = ({ slug, onBack, onOpenProject }) => {
  const project = projects.find((p) => p.slug === slug);

  if (!project)
    return (
      <div className="container-x flex min-h-screen items-center justify-center py-40">
        <div className="text-center">
          <p className="mb-4 text-ink-200">Project not found.</p>
          <button onClick={onBack} className="btn-primary">
            Back home
          </button>
        </div>
      </div>
    );

  const recs = projects.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <article className="relative pt-32 md:pt-40">
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[50rem] w-[50rem] -translate-x-1/2 bg-aurora opacity-40 blur-3xl" />
      <div className="container-x">
        <button
          onClick={onBack}
          className="mb-10 inline-flex items-center gap-2 font-mono text-sm text-ink-200 hover:text-accent"
        >
          <ArrowLeftIcon /> back
        </button>

        <div className="mb-4 flex flex-wrap gap-3 font-mono text-xs uppercase tracking-widest text-accent">
          <span>{project.year}</span>
          <span className="text-ink-200/30">·</span>
          {project.tags.map((t) => (
            <span key={t} className="text-ink-200/70">{t}</span>
          ))}
        </div>

        <h1 className="font-display text-5xl font-semibold leading-tight text-ink-50 md:text-7xl">
          {project.title}
        </h1>
        <p className="mt-6 max-w-3xl text-xl text-ink-200/80">
          {project.tagline}
        </p>

        <div className="mt-12 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <img
            src={profile.profileImage}
            alt={profile.name}
            className="h-12 w-12 rounded-full border border-accent/40 object-cover"
          />
          <div>
            <div className="font-medium text-ink-50">{profile.name}</div>
            <div className="font-mono text-xs text-ink-200/60">
              {profile.designation}
            </div>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-white/10">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="aspect-video w-full object-cover"
          />
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <p className="text-lg leading-relaxed text-ink-100/90">
            {project.description}
          </p>

          {project.status && (
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/5 px-3 py-1 font-mono text-xs uppercase tracking-widest text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {project.status}
            </div>
          )}

          {/* Rich sections: What we built · How we built it · Why useful */}
          {project.sections && project.sections.length > 0 && (
            <div className="mt-20 space-y-16">
              {project.sections.map((s, i) => (
                <div key={s.heading}>
                  <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-accent">
                    <span className="h-px w-6 bg-accent" />
                    section 0{i + 1}
                  </div>
                  <h2 className="font-display text-3xl font-semibold text-ink-50 md:text-5xl">
                    {s.heading}
                  </h2>
                  <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-100/85">
                    {s.body.split("\n\n").map((para, j) => (
                      <p key={j} className="whitespace-pre-line">{para}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Highlights — bullet grid */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="mt-20">
              <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-accent">
                <span className="h-px w-6 bg-accent" /> highlights
              </div>
              <h2 className="mb-8 font-display text-3xl font-semibold text-ink-50 md:text-4xl">
                What makes it different
              </h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {project.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 leading-relaxed text-ink-100/90"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-16 btn-primary"
          >
            {project.linkLabel || "View source on GitHub"} <ExternalIcon />
          </a>
        </div>

        {recs.length > 0 && (
          <div className="mt-32 border-t border-white/10 pt-16">
            <h2 className="mb-10 font-display text-3xl font-semibold text-ink-50">
              More work
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {recs.map((r) => (
                <button
                  key={r.slug}
                  onClick={() => onOpenProject(r)}
                  className="card group overflow-hidden text-left"
                >
                  <img
                    src={r.imageUrl}
                    alt={r.title}
                    className="aspect-video w-full object-cover transition group-hover:scale-105"
                  />
                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold text-ink-50 group-hover:text-accent">
                      {r.title}
                    </h3>
                    <p className="mt-2 text-sm text-ink-200/80">{r.tagline}</p>
                    <div className="mt-4 inline-flex items-center gap-2 text-sm text-accent">
                      Open <ArrowRightIcon />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
};
