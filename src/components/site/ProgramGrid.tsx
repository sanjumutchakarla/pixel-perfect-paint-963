import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { programs } from "@/content/bricca";

export function ProgramGrid({ limit }: { limit?: number }) {
  const items = limit ? programs.slice(0, limit) : programs;

  return (
    <ul className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
      {items.map((p, i) => (
        <Reveal as="li" key={p.slug} delay={(i % 3) * 90}>
          <article className="group relative h-full overflow-hidden bg-card">
            <div className="relative aspect-4/5 overflow-hidden">
              <img
                src={p.image}
                alt={`${p.title} programme — ${p.short}`}
                width={800}
                height={1000}
                loading="lazy"
                className="size-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-primary-deep/92 via-primary-deep/35 to-transparent transition-opacity duration-500 group-hover:from-primary-deep"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 lg:p-7">
                <p className="font-display text-[0.7rem] font-bold tracking-[0.24em] text-accent">
                  {p.no}
                </p>
                <h3 className="mt-2 font-display text-xl font-bold text-on-dark lg:text-[1.4rem]">
                  {p.title}
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-on-dark-muted">
                  {p.short}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-[0.68rem] font-bold tracking-[0.18em] text-on-dark">
                  EXPLORE
                  <ArrowUpRight
                    className="size-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </div>
          </article>
        </Reveal>
      ))}
    </ul>
  );
}
