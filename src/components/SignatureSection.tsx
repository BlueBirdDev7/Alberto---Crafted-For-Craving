import type { MenuItem } from "@/lib/menu-data";

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  featured: MenuItem;
  items: MenuItem[];
  reverse?: boolean;
  tone?: "default" | "maroon" | "warm";
};

export function SignatureSection({ id, eyebrow, title, subtitle, featured, items, reverse, tone = "default" }: Props) {
  const isMaroon = tone === "maroon";
  const toneClass = isMaroon
    ? "bg-maroon-rich"
    : tone === "warm"
    ? "bg-gradient-warm"
    : "";

  // On maroon sections, force cream text on the section header + featured copy
  // (cards keep their own card background + foreground colors, so we don't override CSS vars globally)
  const headingColor = isMaroon ? "text-cream" : "text-foreground";
  const bodyColor = isMaroon ? "text-cream/75" : "text-muted-foreground";

  return (
    <section id={id} className={`relative overflow-hidden py-28 ${toneClass}`}>
      {isMaroon && (
        <>
          <div className="pointer-events-none absolute -left-32 top-20 h-[400px] w-[400px] rounded-full bg-accent/15 blur-[120px]" />
          <div className="pointer-events-none absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[120px]" />
        </>
      )}
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent">{eyebrow}</p>
          <h2 className={`mt-4 font-display text-5xl font-bold leading-tight md:text-6xl ${headingColor}`}>{title}</h2>
          <p className={`mt-5 text-base leading-relaxed ${bodyColor}`}>{subtitle}</p>
        </div>

        {/* Featured */}
        <div
          className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div className="group relative">
            <div className="absolute -inset-6 rounded-full bg-accent/20 blur-3xl transition-all duration-700 group-hover:bg-accent/30" />
            <img
              src={featured.image}
              alt={featured.name}
              loading="lazy"
              width={1280}
              height={1280}
              className="relative mx-auto w-full max-w-lg rounded-3xl shadow-luxe transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div>
            <span className="inline-block rounded-full border border-accent/40 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-accent">
              Signature
            </span>
            <h3 className={`mt-5 font-display text-4xl font-bold md:text-5xl ${headingColor}`}>{featured.name}</h3>
            <p className={`mt-5 text-lg leading-relaxed ${bodyColor}`}>{featured.description}</p>
            <div className="mt-8 flex items-center gap-6">
              <span className="font-display text-3xl font-bold text-gradient-gold">{featured.price}</span>
              <a
                href="#menu"
                className={`group/btn inline-flex items-center gap-2 rounded-full border px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] transition-all hover:border-accent hover:text-accent ${
                  isMaroon ? "border-cream/25 text-cream" : "border-foreground/15 text-foreground"
                }`}
              >
                Order
                <span className="transition-transform group-hover/btn:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Smaller cards */}
        <div className={`mt-20 grid gap-6 ${items.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
          {items.map((item) => (
            <article
              key={item.name}
              className="group relative overflow-hidden rounded-2xl bg-card text-card-foreground transition-all duration-500 hover:-translate-y-2 hover:shadow-luxe"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h4 className="font-display text-xl font-semibold">{item.name}</h4>
                  <span className="shrink-0 font-display text-lg font-bold text-accent">{item.price}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
