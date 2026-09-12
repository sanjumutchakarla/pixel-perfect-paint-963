import { createFileRoute } from "@tanstack/react-router";
import { Medal } from "lucide-react";

import { CtaLink, PageHero } from "@/components/site/Bits";
import { Reveal } from "@/components/site/Reveal";
import { awards } from "@/content/bricca";

export const Route = createFileRoute("/recognition")({
  head: () => ({
    meta: [
      { title: "Awards & Recognition | BRICCA Foundation" },
      {
        name: "description",
        content:
          "Recognition received by BRICCA Foundation, including the Ugadhi Puraskar Award (2020, 2022), Star of the Game from Magic Bus India Foundation (2021) and the Telugu Velugu Ugadi Mahanandhi National Award (2025).",
      },
      { property: "og:title", content: "Awards & Recognition — BRICCA Foundation" },
      {
        property: "og:description",
        content: "State and national recognition for BRICCA Foundation's community work.",
      },
    ],
  }),
  component: Recognition,
});

function Recognition() {
  return (
    <>
      <PageHero
        eyebrow="Awards & recognition"
        title="Recognised for work done in the field"
        lede="Recognition from state and national platforms for community development, sport and youth engagement."
      />

      <section className="container-page py-20 lg:py-28">
        <ol className="relative grid gap-10 border-l border-border pl-8 lg:grid-cols-4 lg:gap-px lg:border-l-0 lg:border-t lg:bg-border lg:pl-0">
          {awards.map((a, i) => (
            <Reveal
              as="li"
              key={`${a.year}-${a.title}`}
              delay={i * 100}
              className="relative bg-background lg:bg-card lg:p-8"
            >
              <span
                aria-hidden="true"
                className="absolute -left-[2.28rem] top-2 size-3 rounded-full bg-accent lg:hidden"
              />
              <Medal className="hidden size-6 text-accent lg:block" aria-hidden="true" />
              <p className="font-display text-3xl font-extrabold text-accent lg:mt-6">{a.year}</p>
              <h2 className="mt-3 font-display text-lg leading-snug font-bold text-primary">
                {a.title}
              </h2>
              {a.by && <p className="mt-2 text-sm text-muted-foreground">{a.by}</p>}
            </Reveal>
          ))}
        </ol>

        <div className="mt-16 border-t border-border pt-10">
          <p className="display-md text-primary">
            Recognition follows the work.
            <span className="text-muted-foreground"> Not the other way around.</span>
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CtaLink to="/impact" variant="outline">
              SEE OUR IMPACT
            </CtaLink>
            <CtaLink to="/donate">DONATE NOW</CtaLink>
          </div>
        </div>
      </section>
    </>
  );
}
