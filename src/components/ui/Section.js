export const Section = ({ id, eyebrow, title, subtitle, children, className = "" }) => (
  <section id={id} className={`relative py-24 md:py-32 ${className}`}>
    <div className="container-x">
      {(eyebrow || title || subtitle) && (
        <div className="mb-14 max-w-2xl">
          {eyebrow && (
            <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-accent">
              <span className="h-px w-8 bg-accent" />
              {eyebrow}
            </div>
          )}
          {title && (
            <h2 className="text-4xl font-semibold text-ink-50 md:text-6xl">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-5 text-lg text-ink-200/80">{subtitle}</p>
          )}
        </div>
      )}
      {children}
    </div>
  </section>
);
