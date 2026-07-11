import { profile } from "../../data/profile";

export const StackMarquee = () => {
  const items = [...profile.stack, ...profile.stack]; // duplicate for loop
  return (
    <div className="relative overflow-hidden border-y border-white/10 py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-950 to-transparent" />
      <div className="flex w-max animate-marquee gap-10">
        {items.map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap font-display text-3xl italic text-ink-200/40 md:text-4xl"
          >
            {item}
            <span className="ml-10 text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};
