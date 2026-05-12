export function Footer() {
  return (
    <footer className="relative bg-maroon-rich py-16 text-cream">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-3xl font-bold tracking-[0.2em] text-gradient-gold">ALBERTO</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/75">
              Crafted for craving. A modern luxury kitchen serving bold flavor with elegant ease.
            </p>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold text-cream">Visit</h4>
            <p className="mt-4 text-sm text-cream/75">
              42 Golden Avenue<br />Open daily · 11am — Late
            </p>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold text-cream">Connect</h4>
            <p className="mt-4 text-sm text-cream/75">
              hello@alberto.dine<br />+1 (555) 014-2200
            </p>
          </div>
        </div>
        <div className="mt-12 border-t border-cream/15 pt-6 text-center text-xs uppercase tracking-[0.3em] text-cream/60">
          © {new Date().getFullYear()} Alberto · All rights reserved
        </div>
      </div>
    </footer>
  );
}
