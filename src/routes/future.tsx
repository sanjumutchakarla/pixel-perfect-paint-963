import { createFileRoute } from "@tanstack/react-router";

import { CtaLink, PageHero } from "@/components/site/Bits";
import { Reveal } from "@/components/site/Reveal";
import { roadmap } from "@/content/bricca";

export const Route = createFileRoute("/future")({
  head: () => ({
    meta: [
      { title: "Future Priorities — Looking Ahead | BRICCA Foundation" },
      {
        name: "description",
        content:
          "BRICCA Foundation's forward priorities: deepening existing programmes, expanding partnerships and building sustained community impact.",
      },
      { property: "og:title", content: "Looking Ahead — BRICCA Foundation" },
      {
        property: "og:description",
        content:
          "Future priorities for BRICCA Foundation: deeper programmes, wider partnerships, sustained impact.",
      },
    ],
  }),
  component: Future,
});

function Future() {
  return (
    <>
      <PageHero
        eyebrow="Looking ahead"
        title="Future priorities"
        lede="Our forward plan is deliberately narrow: strengthen what already works, and fund it sustainably."
      />

      <section className="container-page py-20 lg:py-28">
        <ol className="relative grid gap-12 border-l border-border pl-8 lg:pl-12">
          {roadmap.map((r, i) => (
            <Reveal as="li" key={r.year} delay={i * 110} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[2.3rem] top-2 size-3 rounded-full bg-accent lg:-left-[3.3rem]"
              />
              <p className="font-display text-sm font-bold tracking-[0.24em] text-accent">
                {r.year.toUpperCase()}
              </p>
              <h2 className="display-md mt-3 text-primary">{r.title}</h2>
              <p className="lede mt-4">{r.body}</p>
            </Reveal>
          ))}
        </ol>

        <div className="mt-16 flex flex-wrap gap-3">
          <CtaLink to="/get-involved">JOIN US</CtaLink>
          <CtaLink to="/donate" variant="outline">
            DONATE NOW
          </CtaLink>
        </div>
      </section>
    </>
  );
}
