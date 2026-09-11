import { Link, type LinkProps } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

export function CtaLink({
  to,
  children,
  variant = "solid",
  className,
}: {
  to: LinkProps["to"];
  children: React.ReactNode;
  variant?: "solid" | "outline" | "outlineLight";
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={cn(
        "group inline-flex items-center gap-3 px-6 py-4 text-[0.72rem] font-bold tracking-[0.16em] transition-colors",
        variant === "solid" && "bg-accent text-accent-foreground hover:bg-accent/90",
        variant === "outline" &&
          "border border-border-strong text-foreground hover:border-accent hover:text-accent",
        variant === "outlineLight" &&
          "border border-on-dark/35 text-on-dark hover:border-accent hover:text-accent",
        className,
      )}
    >
      {children}
      <ArrowRight
        className="size-3.5 transition-transform duration-300 group-hover:translate-x-1"
        aria-hidden="true"
      />
    </Link>
  );
}

export function PageHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <section className="bg-primary pt-[4.5rem] text-on-dark">
      <div className="container-page py-20 lg:py-28">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="display-lg mt-5 max-w-4xl text-on-dark">{title}</h1>
          {lede && <p className="lede mt-6 text-on-dark-muted">{lede}</p>}
        </Reveal>
      </div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  lede,
  tone = "dark",
  className,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <Reveal className={cn("max-w-3xl", className)}>
      <p className="eyebrow">{eyebrow}</p>
      <h2
        className={cn("display-lg mt-4", tone === "light" ? "text-on-dark" : "text-foreground")}
      >
        {title}
      </h2>
      {lede && (
        <p className={cn("lede mt-5", tone === "light" && "text-on-dark-muted")}>{lede}</p>
      )}
    </Reveal>
  );
}

export function PlaceholderNote({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-4 border-l-2 border-accent/60 bg-accent/8 px-4 py-3 text-xs leading-relaxed text-muted-foreground">
      {children}
    </p>
  );
}
