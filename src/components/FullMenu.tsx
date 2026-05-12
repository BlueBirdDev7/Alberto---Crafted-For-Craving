import { fullMenu } from "@/lib/menu-data";

export function FullMenu() {
  return (
    <section id="menu" className="relative py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-secondary/40 to-background" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent">The Full Menu</p>
          <h2 className="mt-4 font-display text-5xl font-bold md:text-6xl">A Curated Indulgence</h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Every plate is crafted with intention — bold, warm and unapologetically delicious.
          </p>
        </div>

        <div className="space-y-20">
          {fullMenu.map((cat) => (
            <div key={cat.category}>
              <div className="mb-10 flex items-end justify-between border-b border-border pb-6">
                <h3 className="font-display text-3xl font-semibold md:text-4xl">{cat.category}</h3>
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                  {cat.items.length} items
                </span>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {cat.items.map((item) => (
                  <article
                    key={item.name}
                    className="group flex gap-5 rounded-2xl border border-border bg-card/60 p-4 transition-all duration-500 hover:border-accent/40 hover:bg-card"
                  >
                    <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl">
                      <img
                        src={item.image}
                        alt={item.name}
                        loading="lazy"
                        width={200}
                        height={200}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline justify-between gap-3">
                        <h4 className="truncate font-display text-lg font-semibold">{item.name}</h4>
                        <span className="font-display text-lg font-bold text-gradient-gold">
                          {item.price}
                        </span>
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
