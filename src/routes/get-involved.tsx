import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import programWomen from "@/assets/program-women.jpg";
import programLivelihood from "@/assets/program-livelihood.jpg";
import programSports from "@/assets/program-sports.jpg";
import { PageHero } from "@/components/site/Bits";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/get-involved")({
  head: () => ({
    meta: [
      { title: "Get Involved — Donate, Partner or Volunteer | BRICCA Foundation" },
      {
        name: "description",
        content:
          "Three ways to support BRICCA Foundation: donate to programmes, form a CSR partnership, or volunteer with community activities in Andhra Pradesh.",
      },
      { property: "og:title", content: "Get Involved with BRICCA Foundation" },
      {
        property: "og:description",
        content: "Donate, partner or volunteer with BRICCA Foundation's community programmes.",
      },
    ],
  }),
  component: GetInvolved,
});

const options = [
  {
    title: "Donate",
    body: "Fund education, livelihood, health and relief programmes directly.",
    to: "/donate",
    cta: "DONATE NOW",
    image: programWomen,
  },
  {
    title: "Partner",
    body: "CSR and institutional partnerships with programme delivery and reporting.",
    to: "/contact",
    cta: "START A CONVERSATION",
    image: programLivelihood,
  },
  {
    title: "Volunteer",
    body: "Give time to field activities, camps, training sessions and events.",
    to: "/contact",
    cta: "VOLUNTEER WITH US",
    image: programSports,
  },
] as const;

function GetInvolved() {
  return (
    <>
      <PageHero
        eyebrow="Get involved"
        title="Three ways to stand with these communities"
        lede="Whether you give money, capability or time, it lands in the same place: programmes that families depend on."
      />

      <section className="container-page py-20 lg:py-28">
        <ul className="grid gap-px bg-border lg:grid-cols-3">
          {options.map((o, i) => (
            <Reveal as="li" key={o.title} delay={i * 100}>
              <Link
                to={o.to}
                className="group relative flex h-full min-h-[30rem] flex-col justify-end overflow-hidden bg-card p-8 lg:p-10"
              >
                <img
                  src={o.image}
                  alt=""
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="absolute inset-0 size-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-t from-primary-deep via-primary-deep/60 to-primary-deep/10"
                />
                <div className="relative">
                  <h2 className="display-md text-on-dark">{o.title}</h2>
                  <p className="mt-4 max-w-xs text-sm leading-relaxed text-on-dark-muted">
                    {o.body}
                  </p>
                  <span className="mt-8 inline-flex items-center gap-2 text-[0.7rem] font-bold tracking-[0.16em] text-accent">
                    {o.cta}
                    <ArrowUpRight
                      className="size-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>
    </>
  );
}
