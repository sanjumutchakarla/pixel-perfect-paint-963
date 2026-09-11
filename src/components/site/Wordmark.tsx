import { cn } from "@/lib/utils";

/**
 * Typographic wordmark used until the official BRICCA FOUNDATION logo file is
 * supplied. Replace the contents of this component with the official asset —
 * every usage across the site picks it up automatically.
 */
export function Wordmark({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <span
        aria-hidden="true"
        className={cn(
          "grid size-9 place-items-center border font-display text-sm font-extrabold tracking-tight",
          tone === "light"
            ? "border-on-dark/30 text-on-dark"
            : "border-primary/25 text-primary",
        )}
      >
        BF
      </span>
      <span className="leading-tight">
        <span
          className={cn(
            "block font-display text-[0.95rem] font-extrabold tracking-[0.14em]",
            tone === "light" ? "text-on-dark" : "text-primary",
          )}
        >
          BRICCA
        </span>
        <span
          className={cn(
            "block text-[0.6rem] font-semibold tracking-[0.32em]",
            tone === "light" ? "text-on-dark-muted" : "text-muted-foreground",
          )}
        >
          FOUNDATION
        </span>
      </span>
    </span>
  );
}
