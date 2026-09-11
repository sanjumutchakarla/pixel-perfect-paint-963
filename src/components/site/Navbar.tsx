import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Wordmark } from "@/components/site/Wordmark";
import { navLinks } from "@/content/bricca";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const overHero = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solid = scrolled || !overHero || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        solid
          ? "border-b border-border/70 bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container-page flex h-[4.5rem] items-center justify-between gap-6">
        <Link to="/" aria-label={`${"BRICCA Foundation"} home`}>
          <Wordmark tone={solid ? "dark" : "light"} />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "relative px-3 py-2 text-[0.82rem] font-medium tracking-wide transition-colors",
                solid
                  ? "text-foreground/75 hover:text-primary"
                  : "text-on-dark/85 hover:text-on-dark",
              )}
              activeProps={{
                className: cn(
                  "after:absolute after:inset-x-3 after:bottom-1 after:h-px after:bg-accent",
                  solid ? "text-primary" : "text-on-dark",
                ),
              }}
              activeOptions={{ exact: link.to === "/" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/donate"
            className="hidden items-center gap-2 bg-accent px-5 py-3 text-[0.72rem] font-bold tracking-[0.16em] text-accent-foreground transition-colors hover:bg-accent/90 sm:inline-flex"
          >
            DONATE NOW
            <ArrowRight className="size-3.5" aria-hidden="true" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className={cn(
              "grid size-11 place-items-center border transition-colors lg:hidden",
              solid ? "border-border text-foreground" : "border-on-dark/30 text-on-dark",
            )}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav aria-label="Mobile" className="container-page grid gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="flex items-center justify-between border-b border-border/60 py-4 font-display text-lg font-semibold text-foreground"
                activeProps={{ className: "text-accent" }}
                activeOptions={{ exact: link.to === "/" }}
              >
                {link.label}
                <ArrowRight className="size-4 text-muted-foreground" aria-hidden="true" />
              </Link>
            ))}
            <Link
              to="/get-involved"
              className="flex items-center justify-between py-4 font-display text-lg font-semibold text-foreground"
            >
              Get Involved
              <ArrowRight className="size-4 text-muted-foreground" aria-hidden="true" />
            </Link>
            <Link
              to="/donate"
              className="mt-2 flex items-center justify-center gap-2 bg-accent px-5 py-4 text-[0.75rem] font-bold tracking-[0.16em] text-accent-foreground"
            >
              DONATE NOW
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
