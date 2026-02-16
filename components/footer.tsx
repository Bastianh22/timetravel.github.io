export function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-card px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl tracking-wide text-primary">
                Chronos
              </span>
              <span className="font-serif text-2xl tracking-wide text-foreground">
                Voyages
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              The world&apos;s foremost luxury time travel agency. We curate
              bespoke journeys through the most extraordinary eras in human
              civilization.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-primary">
                Company
              </h4>
              <ul className="mt-4 flex flex-col gap-3">
                {["About", "Careers", "Press", "Partners"].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-primary">
                Legal
              </h4>
              <ul className="mt-4 flex flex-col gap-3">
                {["Privacy", "Terms", "Temporal Accords", "Safety"].map(
                  (link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-primary">
              Stay Informed
            </h4>
            <p className="mt-4 text-sm text-muted-foreground">
              Receive exclusive previews of newly unlocked eras and private
              invitations.
            </p>
            <form className="mt-4 flex gap-0">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 border border-border bg-secondary/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button
                type="submit"
                className="bg-primary px-6 py-2.5 text-xs uppercase tracking-[0.15em] text-primary-foreground transition-opacity hover:opacity-90"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; 2026 Chronos Voyages. All timelines reserved.
          </p>
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60">
            Temporal License No. CV-7749-OMEGA
          </p>
        </div>
      </div>
    </footer>
  )
}
