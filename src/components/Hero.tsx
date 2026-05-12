import heroBurger from "@/assets/hero-burger.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-gradient-hero">
      {/* Glow orbs */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-accent/20 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-primary/40 blur-[140px]" />

      <div className="relative mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-20 pt-32 lg:grid-cols-2 lg:pt-24">
        <div className="z-10 text-center lg:text-left">
          <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.4em] text-accent">
            Crafted for craving
          </p>
          <h1 className="animate-fade-up delay-150 mt-6 font-display text-6xl font-bold leading-[0.95] text-foreground sm:text-7xl lg:text-8xl xl:text-9xl">
            AL<span className="text-gradient-gold">BER</span>TO
          </h1>
          <p className="animate-fade-up delay-300 mx-auto mt-8 max-w-md text-lg leading-relaxed text-foreground/70 lg:mx-0">
            Bold Flavor. Elegant Experience. A modern temple of grilled craft, golden bites and velvet drinks.
          </p>
          <div className="animate-fade-up delay-500 mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#menu"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-gold px-9 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold-foreground shadow-glow transition-transform hover:scale-105"
            >
              Explore Menu
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#dishes"
              className="text-sm font-medium uppercase tracking-[0.2em] text-foreground/70 underline-offset-8 hover:text-accent hover:underline"
            >
              Signature Picks
            </a>
          </div>
        </div>

        <div className="relative animate-fade-in delay-300">
          <div className="absolute inset-0 -z-10 rounded-full bg-accent/30 blur-[120px]" />
          <img
            src={heroBurger}
            alt="Signature ALBERTO flame-grilled burger"
            width={1600}
            height={1280}
            className="animate-float-slow mx-auto w-full max-w-xl drop-shadow-[0_40px_80px_rgba(0,0,0,0.7)]"
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
}
