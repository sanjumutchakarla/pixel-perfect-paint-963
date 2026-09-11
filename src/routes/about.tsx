import { createFileRoute } from "@tanstack/react-router";

import featureAbout from "@/assets/feature-about.jpg";
import { CtaLink, PageHero, SectionHead } from "@/components/site/Bits";
import { Reveal } from "@/components/site/Reveal";
import { StatStrip } from "@/components/site/StatStrip";
import { org } from "@/content/bricca";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About BRICCA Foundation — Working in Andhra Pradesh since 2019" },
      {
        name: "description",
        content:
          "BRICCA Foundation's vision, mission and approach to community development in rural, tribal and coastal Andhra Pradesh.",
      },
      { property: "og:title", content: "About BRICCA Foundation" },
      {
        property: "og:description",
        content:
          "Vision, mission and approach of BRICCA Foundation, working with communities in Andhra Pradesh since 2019.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A foundation built in the communities it serves"
        lede={org.intro}
      />

      <section className="container-page py-20 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <Reveal>
            <img
              src={featureAbout}
              alt="Villagers seated in a circle during a community consultation"
              width={1400}
              height={1050}
              loading="lazy"
              className="w-full object-cover"
            />
          </Reveal>
          <div className="grid gap-10 self-center">
            <div className="rule-accent">
              <p className="text-[0.7rem] font-bold tracking-[0.22em] text-accent">SINCE 2019</p>
              <p className="mt-3 font-display text-2xl leading-snug font-bold text-foreground">
                Established in {org.since} and active across {org.region}.
              </p>
            </div>
            <div className="rule-accent">
              <p className="text-[0.7rem] font-bold tracking-[0.22em] text-accent">VISION</p>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Communities where every child, woman and young person has a fair opportunity to
                learn, earn and live with dignity.
              </p>
            </div>
            <div className="rule-accent">
              <p className="text-[0.7rem] font-bold tracking-[0.22em] text-accent">MISSION</p>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                To deliver education, livelihood, health and inclusion programmes with local and
                institutional partners, and to document their impact transparently.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="container-page">
          <StatStrip />
        </div>
      </section>

      <section className="container-page py-20 lg:py-28">
        <SectionHead
          eyebrow="How we work"
          title="Local partnership, documented outcomes"
          lede="Programmes are designed with community input, delivered with partners, and reported with beneficiary-level records."
        />
        <ol className="mt-14 grid gap-px bg-border lg:grid-cols-3">
          {[
            {
              n: "01",
              t: "Listen locally",
              b: "Needs are identified with community members, local bodies and existing groups.",
            },
            {
              n: "02",
              t: "Deliver with partners",
              b: "Programmes run alongside CSR, institutional and development partners.",
            },
            {
              n: "03",
              t: "Report transparently",
              b: "Beneficiary numbers and audited financial statements support every claim we make.",
            },
          ].map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 90} className="bg-card p-8 lg:p-10">
              <p className="font-display text-sm font-bold tracking-[0.24em] text-accent">{s.n}</p>
              <h3 className="mt-4 font-display text-xl font-bold text-primary">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.b}</p>
            </Reveal>
          ))}
        </ol>
        <div className="mt-12 flex flex-wrap gap-3">
          <CtaLink to="/programs" variant="outline">
            OUR PROGRAMMES
          </CtaLink>
          <CtaLink to="/compliance" variant="outline">
            TRUST & COMPLIANCE
          </CtaLink>
        </div>
      </section>
    </>
  );
}
