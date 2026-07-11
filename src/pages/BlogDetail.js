import { blogPosts } from "../data/blogPosts";
import { profile } from "../data/profile";
import { ArrowLeftIcon, ExternalIcon, ArrowRightIcon } from "../components/ui/Icon";

export const BlogDetail = ({ slug, onBack, onOpenBlog }) => {
  const post = blogPosts.find((b) => b.slug === slug);

  if (!post)
    return (
      <div className="container-x flex min-h-screen items-center justify-center py-40">
        <div className="text-center">
          <p className="mb-4 text-ink-200">Post not found.</p>
          <button onClick={onBack} className="btn-primary">
            Back home
          </button>
        </div>
      </div>
    );

  const recs = blogPosts.filter((b) => b.slug !== slug).slice(0, 2);

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

        <div className="mx-auto max-w-3xl">
          <div className="mb-4 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-widest text-accent">
            <span>{post.date}</span>
            <span className="text-ink-200/30">·</span>
            <span>{post.readTime}</span>
            <span className="text-ink-200/30">·</span>
            {post.tags.map((t) => (
              <span key={t} className="text-ink-200/70">{t}</span>
            ))}
          </div>

          <h1 className="font-display text-4xl font-semibold leading-tight text-ink-50 md:text-6xl">
            {post.title}
          </h1>

          <div className="mt-10 flex items-center gap-4 border-y border-white/10 py-5">
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

          <div className="prose-blog mt-10">
            {post.content.split("\n\n").map((para, i) => (
              <p key={i} className="whitespace-pre-line">
                {para}
              </p>
            ))}
          </div>

          {post.link && (
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 btn-ghost"
            >
              Read original <ExternalIcon />
            </a>
          )}
        </div>

        {recs.length > 0 && (
          <div className="mt-32 border-t border-white/10 pt-16">
            <h2 className="mb-10 font-display text-3xl font-semibold text-ink-50">
              Keep reading
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {recs.map((r) => (
                <button
                  key={r.slug}
                  onClick={() => onOpenBlog(r)}
                  className="card group p-8 text-left"
                >
                  <div className="mb-4 font-mono text-xs text-ink-200/60">
                    {r.date} · {r.readTime}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-ink-50 group-hover:text-accent">
                    {r.title}
                  </h3>
                  <p className="mt-3 text-sm text-ink-200/80">{r.excerpt}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm text-accent">
                    Read <ArrowRightIcon />
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
