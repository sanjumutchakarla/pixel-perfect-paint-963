import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck, Clock3, FileCheck2 } from "lucide-react";

import { CtaLink, PageHero, PlaceholderNote, SectionHead } from "@/components/site/Bits";
import { Reveal } from "@/components/site/Reveal";
import { compliance } from "@/content/bricca";

export const Route = createFileRoute("/compliance")({
  head: () => ({
    meta: [
      { title: "Trust & Compliance — 12A, 80G, CSR-1, NGO Darpan | BRICCA Foundation" },
      {
        name: "description",
        content:
          "BRICCA Foundation's registrations and compliance: Society Registration, PAN, 12A, 80G, CSR-1, NGO Darpan, and FCRA under process pending approval.",
      },
      { property: "og:title", content: "Trust & Compliance — BRICCA Foundation" },
      {
        property: "og:description",
        content:
          "Transparent. Accountable. Compliant. Registrations, audited statements and FCRA status.",
      },
    ],
  }),
  component: Compliance,
});

function Compliance() {
  return (
    <>
      <PageHero
        eyebrow="Trust & compliance"
        title="Transparent. Accountable. Compliant."
        lede="Every registration below is held by BRICCA Foundation. Where an approval is still in process, we say so plainly."
      />

      <section className="container-page py-20 lg:py-28">
        <ul className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {compliance.map((c, i) => {
            const pending = c.status.startsWith("Under Process");
            return (
              <Reveal as="li" key={c.title} delay={i * 70} className="bg-card p-8">
                {pending ? (
                  <Clock3 className="size-6 text-accent" aria-hidden="true" />
                ) : (
                  <BadgeCheck className="size-6 text-primary" aria-hidden="true" />
                )}
                <h2 className="mt-5 font-display text-xl font-bold text-primary">{c.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{c.detail}</p>
                <p
                  className={`mt-6 inline-block border px-3 py-2 text-[0.65rem] font-bold tracking-[0.16em] ${
                    pending
                      ? "border-accent/50 bg-accent/10 text-accent-foreground"
                      : "border-border-strong text-muted-foreground"
                  }`}
                >
                  {c.status.toUpperCase()}
                </p>
              </Reveal>
            );
          })}
        </ul>

        <PlaceholderNote>
          Registration numbers are marked PLACEHOLDER because they were not in the source document.
          FCRA is shown, correctly, as under process and pending approval.
        </PlaceholderNote>
      </section>

      <section className="bg-primary py-20 text-on-dark lg:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHead
            eyebrow="Financial transparency"
            tone="light"
            title="Audited financial statements"
            lede="BRICCA Foundation maintains audited financial statements and reports to its donors and partners on programme spending."
          />
          <Reveal className="self-center">
            <div className="flex items-start gap-5 border-t border-on-dark/20 pt-8">
              <FileCheck2 className="mt-1 size-7 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <p className="font-display text-xl font-bold text-on-dark">
                  Statements available on request
                </p>
                <p className="mt-3 text-sm leading-relaxed text-on-dark-muted">
                  Partners and CSR teams conducting due diligence can request audited statements
                  and programme reports through the contact page.
                </p>
                <div className="mt-8">
                  <CtaLink to="/contact" variant="outlineLight">
                    REQUEST DOCUMENTS
                  </CtaLink>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
