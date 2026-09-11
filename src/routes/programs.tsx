import { createFileRoute } from "@tanstack/react-router";

import { CtaLink, PageHero, SectionHead } from "@/components/site/Bits";
import { ProgramGrid } from "@/components/site/ProgramGrid";
import { Reveal } from "@/components/site/Reveal";
import { programs } from "@/content/bricca";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — Education, Livelihood, Health & Inclusion | BRICCA Foundation" },
      {
        name: "description",
        content:
          "Nine focus areas of BRICCA Foundation: education, livelihood and skills, women empowerment, disability inclusion, health, disaster relief, agriculture, sports and tribal & coastal development.",
      },
      { property: "og:title", content: "BRICCA Foundation Programs" },
      {
        property: "og:description",
        content:
          "Nine programme areas with objectives and target beneficiaries, delivered across Andhra Pradesh.",
      },
    ],
  }),
  component: Programs,
});

function Programs() {
  return (
    <>
      <PageHero
        eyebrow="Our focus areas"
        title="Nine programme areas, designed around local need"
        lede="From classrooms to coastal villages, each programme has a defined objective and a defined group of beneficiaries."
      />

      <section className="py-20 lg:py-24">
        <div className="container-page">
          <ProgramGrid />
        </div>
      </section>

      <section className="border-t border-border bg-surface py-20 lg:py-28">
        <div className="container-page">
          <SectionHead
            eyebrow="Programme portfolio"
            title="Objectives and beneficiaries at a glance"
          />

          <div className="mt-12 hidden lg:block">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">
                BRICCA Foundation programme portfolio with objectives and target beneficiaries
              </caption>
              <thead>
                <tr className="border-b border-border-strong">
                  {["Programme", "Objective", "Target beneficiaries"].map((h) => (
                    <th
                      key={h}
                      scope="col"
                      className="py-4 pr-8 text-[0.68rem] font-bold tracking-[0.2em] text-muted-foreground"
                    >
                      {h.toUpperCase()}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {programs.map((p) => (
                  <tr key={p.slug} className="border-b border-border align-top">
                    <th
                      scope="row"
                      className="py-6 pr-8 font-display text-base font-bold text-primary"
                    >
                      <span className="mr-3 text-xs font-bold tracking-[0.2em] text-accent">
                        {p.no}
                      </span>
                      {p.title}
                    </th>
                    <td className="py-6 pr-8 text-sm leading-relaxed text-muted-foreground">
                      {p.objective}
                    </td>
                    <td className="py-6 text-sm leading-relaxed text-muted-foreground">
                      {p.beneficiaries}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <ul className="mt-12 grid gap-4 lg:hidden">
            {programs.map((p, i) => (
              <Reveal as="li" key={p.slug} delay={i * 50} className="border border-border bg-card p-6">
                <p className="text-xs font-bold tracking-[0.2em] text-accent">{p.no}</p>
                <h3 className="mt-2 font-display text-lg font-bold text-primary">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.objective}</p>
                <p className="mt-4 text-[0.68rem] font-bold tracking-[0.18em] text-muted-foreground">
                  BENEFICIARIES
                </p>
                <p className="mt-1 text-sm text-foreground">{p.beneficiaries}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-page grid gap-16">
          {programs.map((p, i) => (
            <Reveal
              key={p.slug}
              className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                i % 2 === 1 ? "lg:[&>figure]:order-2" : ""
              }`}
            >
              <figure className="relative">
                <img
                  src={p.image}
                  alt={`${p.title} programme activity`}
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="aspect-4/5 w-full object-cover"
                />
              </figure>
              <div>
                <p className="eyebrow">{p.no} · Programme</p>
                <h2 className="display-md mt-4 text-primary">{p.title}</h2>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                  {p.objective}
                </p>
                <p className="mt-6 border-t border-border pt-6 text-[0.68rem] font-bold tracking-[0.18em] text-muted-foreground">
                  TARGET BENEFICIARIES
                </p>
                <p className="mt-2 font-display text-lg font-semibold text-foreground">
                  {p.beneficiaries}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="container-page mt-16">
          <CtaLink to="/donate">SUPPORT THESE PROGRAMMES</CtaLink>
        </div>
      </section>
    </>
  );
}
