import { createFileRoute } from "@tanstack/react-router";

import featureImpact from "@/assets/feature-impact.jpg";
import programHealth from "@/assets/program-health.jpg";
import programEducation from "@/assets/program-education.jpg";
import { CtaLink, PageHero, SectionHead } from "@/components/site/Bits";
import { Counter, Reveal } from "@/components/site/Reveal";
import { stats } from "@/content/bricca";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Our Impact — 900+ families supported | BRICCA Foundation" },
      {
        name: "description",
        content:
          "BRICCA Foundation's documented impact: 900+ families supported, 5,000+ food packets distributed, 1,500+ vaccination beneficiaries and 9 vaccination camps.",
      },
      { property: "og:title", content: "Our Impact — BRICCA Foundation" },
      {
        property: "og:description",
        content:
          "900+ families supported, 5,000+ food packets distributed, 1,500+ vaccination beneficiaries, 9 vaccination camps.",
      },
    ],
  }),
  component: Impact,
});

function Impact() {
  const figures = stats.slice(1);

  return (
    <>
      <PageHero
        eyebrow="Our impact"
        title="Impact we can count, and account for"
        lede="Every figure on this page comes from BRICCA Foundation's own programme records."
      />

      <section className="container-page py-20 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-20">
          <Reveal>
            <img
              src={featureImpact}
              alt="A volunteer handing a relief kit to a community member"
              width={1600}
              height={1000}
              loading="lazy"
              className="w-full object-cover"
            />
          </Reveal>
          <div>
            <p className="eyebrow">Families first</p>
            <p className="display-xl mt-4 text-primary">
              <Counter value={900} suffix="+" />
            </p>
            <p className="mt-3 font-display text-xl font-bold text-foreground">
              Families supported
            </p>
            <p className="lede mt-5">
              Support reached households across rural, tribal and coastal communities in Andhra
              Pradesh through relief, health and programme activities.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface py-20 lg:py-24">
        <div className="container-page">
          <SectionHead eyebrow="Documented figures" title="The numbers behind the work" />
          <ul className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {figures.map((s, i) => (
              <Reveal as="li" key={s.label} delay={i * 90} className="bg-card p-8 lg:p-10">
                <p className="font-display text-4xl font-extrabold text-accent lg:text-5xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-4 text-[0.7rem] font-semibold tracking-[0.18em] text-muted-foreground">
                  {s.label.toUpperCase()}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-page py-20 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <img
              src={programHealth}
              alt="Health worker screening a villager at a community camp"
              width={800}
              height={1000}
              loading="lazy"
              className="aspect-4/5 w-full object-cover"
            />
            <h3 className="mt-8 font-display text-2xl font-bold text-primary">
              Health reaching the last village
            </h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              9 vaccination camps and 1,500+ vaccination beneficiaries — delivered where families
              live, not where clinics happen to be.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={programEducation}
              alt="Children learning in a classroom"
              width={800}
              height={1000}
              loading="lazy"
              className="aspect-4/5 w-full object-cover"
            />
            <h3 className="mt-8 font-display text-2xl font-bold text-primary">
              Learning as the long game
            </h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Education and skills programmes give children and young people a route out of
              inherited disadvantage, alongside relief work that meets immediate need.
            </p>
          </Reveal>
        </div>
        <div className="mt-16 flex flex-wrap gap-3">
          <CtaLink to="/projects" variant="outline">
            PREVIOUS PROJECTS
          </CtaLink>
          <CtaLink to="/donate">DONATE NOW</CtaLink>
        </div>
      </section>
    </>
  );
}
