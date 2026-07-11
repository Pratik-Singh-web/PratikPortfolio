import { blogPosts } from "../../data/blogPosts";
import { Section } from "../ui/Section";
import { ArrowRightIcon } from "../ui/Icon";

export const Writing = ({ onOpen }) => (
  <Section
    id="writing"
    eyebrow="essays & notes"
    title={<>Things I've <span className="italic text-accent">learned</span>.</>}
    subtitle="Notes from the intersection of iOS, AI, and markets."
  >
    <div className="grid gap-6 md:grid-cols-3">
      {blogPosts.map((post, i) => (
        <button
          key={post.slug}
          onClick={() => onOpen(post)}
          className="card group flex flex-col p-8 text-left"
        >
          <div className="mb-6 flex items-center justify-between font-mono text-xs text-ink-200/60">
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>
          <h3 className="font-display text-2xl font-semibold text-ink-50 group-hover:text-accent">
            {post.title}
          </h3>
          <p className="mt-4 flex-1 text-ink-200/80">{post.excerpt}</p>
          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-2">
              {post.tags.slice(0, 2).map((t) => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>
            <ArrowRightIcon className="text-ink-200 transition group-hover:text-accent" />
          </div>
        </button>
      ))}
    </div>
  </Section>
);
