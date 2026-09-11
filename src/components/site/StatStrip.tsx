import { Counter, Reveal } from "@/components/site/Reveal";
import { stats } from "@/content/bricca";
import { cn } from "@/lib/utils";

export function StatStrip({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <ul
      className={cn(
        "grid divide-y sm:grid-cols-2 sm:divide-x lg:grid-cols-5 lg:divide-y-0",
        tone === "dark" ? "divide-on-dark/15" : "divide-border",
      )}
    >
      {stats.map((s, i) => (
        <Reveal as="li" key={s.label} delay={i * 80} className="px-6 py-8 lg:px-8 lg:py-10">
          <p
            className={cn(
              "font-display text-4xl font-extrabold tracking-tight lg:text-5xl",
              tone === "dark" ? "text-on-dark" : "text-primary",
            )}
          >
            <Counter value={s.value} suffix={s.suffix} />
          </p>
          <p
            className={cn(
              "mt-3 text-[0.7rem] font-semibold tracking-[0.18em]",
              tone === "dark" ? "text-on-dark-muted" : "text-muted-foreground",
            )}
          >
            {s.label.toUpperCase()}
          </p>
        </Reveal>
      ))}
    </ul>
  );
}
