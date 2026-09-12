import { createFileRoute } from "@tanstack/react-router";
import { UserRound } from "lucide-react";

import { CtaLink, PageHero, PlaceholderNote, SectionHead } from "@/components/site/Bits";
import { Reveal } from "@/components/site/Reveal";
import { leadership, org } from "@/content/bricca";

export const Route = createFileRoute("/leadership")({
  head: () => ({
    meta: [
      { title: "Leadership — Choppa Gangadhara Rao, Founder | BRICCA Foundation" },
      {
        name: "description",
        content:
          "Choppa Gangadhara Rao, Founder & Executive Director of BRICCA Foundation, brings 18+ years of experience to the organisation's community programmes.",
      },
      { property: "og:title", content: "Leadership — BRICCA Foundation" },
      {
        property: "og:description",
        content:
          "Founder & Executive Director Choppa Gangadhara Rao and the team behind BRICCA Foundation's programmes.",
      },
    ],
  }),
  component: Leadership,
});

function Leadership() {
  const { founder, team } = leadership;

  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="Led by people who know the villages by name"
        lede={`${org.name} is led by its founder with support from programme, field, finance and reporting functions.`}
      />

      <section className="container-page py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <div className="flex aspect-4/5 w-full flex-col items-center justify-center gap-4 border border-dashed border-border-strong bg-surface text-center">
              <UserRound className="size-12 text-border-strong" aria-hidden="true" />
              <p className="px-8 text-xs leading-relaxed text-muted-foreground">
                Portrait placeholder — add the official photograph of the Founder here.
              </p>
            </div>
          </Reveal>
          <div className="self-center">
            <p className="eyebrow">Founder</p>
            <h2 className="display-lg mt-4 text-primary">{founder.name}</h2>
            <p className="mt-4 font-display text-lg font-semibold text-accent">{founder.role}</p>
            <p className="lede mt-6">{founder.bio}</p>
            <p className="mt-8 inline-block border border-border-strong px-5 py-3 font-display text-sm font-bold tracking-[0.14em] text-primary">
              {founder.experience.toUpperCase()}
            </p>
            <PlaceholderNote>
              No portrait was included in the source document, so a placeholder frame is used
              instead of a generated likeness.
            </PlaceholderNote>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface py-20 lg:py-28">
        <div className="container-page">
          <SectionHead
            eyebrow="The team"
            title="Functions that keep programmes accountable"
            lede="Roles are documented at function level; individual names can be added once you share them."
          />
          <ul className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {team.map((t, i) => (
              <Reveal as="li" key={t.role} delay={i * 80} className="bg-card p-8">
                <p className="font-display text-sm font-bold tracking-[0.2em] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-display text-lg leading-snug font-bold text-primary">
                  {t.role}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.note}</p>
              </Reveal>
            ))}
          </ul>
          <div className="mt-12">
            <CtaLink to="/compliance" variant="outline">
              GOVERNANCE & COMPLIANCE
            </CtaLink>
          </div>
        </div>
      </section>
    </>
  );
}
