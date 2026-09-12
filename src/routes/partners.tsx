import { createFileRoute } from "@tanstack/react-router";

import { CtaLink, PageHero, PlaceholderNote, SectionHead } from "@/components/site/Bits";
import { Reveal } from "@/components/site/Reveal";
import { partners } from "@/content/bricca";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partners & Collaborations | BRICCA Foundation" },
      {
        name: "description",
        content:
          "BRICCA Foundation collaborates with TRRAIN, World Bank-supported initiatives and Gangavaram Port to deliver community programmes in Andhra Pradesh.",
      },
      { property: "og:title", content: "Building Impact Through Partnership" },
      {
        property: "og:description",
        content:
          "Corporate, institutional and development partnerships behind BRICCA Foundation's programmes.",
      },
    ],
  }),
  component: Partners,
});

function Partners() {
  return (
    <>
      <PageHero
        eyebrow="Partners & collaborations"
        title="Building Impact Through Partnership"
        lede="Programmes are stronger when they are designed with partners who bring funding, technical depth and accountability."
      />

      <section className="container-page py-20 lg:py-28">
        <ul className="grid gap-px bg-border sm:grid-cols-3">
          {partners.map((p, i) => (
            <Reveal
              as="li"
              key={p.name}
              delay={i * 90}
              className="flex min-h-48 flex-col items-center justify-center gap-3 bg-card px-6 py-12 text-center grayscale transition-all duration-500 hover:grayscale-0"
            >
              <span className="font-display text-xl font-bold tracking-[0.1em] text-primary">
                {p.name}
              </span>
              <span className="text-xs tracking-wide text-muted-foreground">{p.note}</span>
            </Reveal>
          ))}
        </ul>

        <PlaceholderNote>
          These are typographic placeholders sized for official logo files. Send the SVG or PNG
          logos and they will drop into these containers without changing the layout.
        </PlaceholderNote>
      </section>

      <section className="border-t border-border bg-surface py-20 lg:py-28">
        <div className="container-page">
          <SectionHead
            eyebrow="Partner with us"
            title="What a partnership with BRICCA looks like"
            lede="We work with CSR teams and institutions that need programme delivery on the ground plus documentation they can report on."
          />
          <ul className="mt-14 grid gap-px bg-border lg:grid-cols-3">
            {[
              {
                t: "Programme design",
                b: "Focus areas matched to your CSR mandate and to documented community need.",
              },
              {
                t: "On-ground delivery",
                b: "Field teams working directly in rural, tribal and coastal communities.",
              },
              {
                t: "Reporting & compliance",
                b: "12A, 80G and CSR-1 registrations, audited statements and beneficiary records.",
              },
            ].map((c, i) => (
              <Reveal as="li" key={c.t} delay={i * 90} className="bg-card p-8 lg:p-10">
                <h3 className="font-display text-xl font-bold text-primary">{c.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.b}</p>
              </Reveal>
            ))}
          </ul>
          <div className="mt-12 flex flex-wrap gap-3">
            <CtaLink to="/get-involved">BECOME A PARTNER</CtaLink>
            <CtaLink to="/compliance" variant="outline">
              COMPLIANCE DETAIL
            </CtaLink>
          </div>
        </div>
      </section>
    </>
  );
}
