import { createFileRoute } from "@tanstack/react-router";
import { Landmark, QrCode, ShieldCheck } from "lucide-react";

import { CtaLink, PlaceholderNote } from "@/components/site/Bits";
import { Reveal } from "@/components/site/Reveal";
import { contact } from "@/content/bricca";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate — Together We Can Create Lasting Change | BRICCA Foundation" },
      {
        name: "description",
        content:
          "Support BRICCA Foundation's education, livelihood, health and relief programmes in Andhra Pradesh. 80G registered; bank transfer details on request.",
      },
      { property: "og:title", content: "Donate to BRICCA Foundation" },
      {
        property: "og:description",
        content:
          "Together We Can Create Lasting Change — fund classrooms, skill training, health camps and relief.",
      },
    ],
  }),
  component: Donate,
});

function Donate() {
  return (
    <>
      <section className="bg-primary-deep pt-[4.5rem] text-on-dark">
        <div className="container-page py-24 lg:py-32">
          <Reveal className="max-w-4xl">
            <p className="eyebrow">Donate</p>
            <h1 className="display-xl mt-6 text-on-dark">
              Together We Can Create Lasting Change
            </h1>
            <p className="lede mt-7 text-on-dark-muted">
              Contributions fund classroom support, vocational training, community health camps and
              emergency relief for families across Andhra Pradesh.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <CtaLink to="/contact">DONATE NOW</CtaLink>
              <CtaLink to="/get-involved" variant="outlineLight">
                PARTNER WITH US
              </CtaLink>
            </div>
            <p className="mt-8 flex items-center gap-3 text-xs tracking-wide text-on-dark-muted">
              <ShieldCheck className="size-4 text-accent" aria-hidden="true" />
              Donations to BRICCA Foundation are covered by its 80G registration.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <Reveal className="border border-border bg-card p-8 lg:p-10">
            <Landmark className="size-7 text-primary" aria-hidden="true" />
            <h2 className="display-md mt-6 text-primary">Bank transfer details</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              For direct bank transfers and CSR disbursements.
            </p>
            <dl className="mt-8 grid gap-5">
              {contact.bank.map((b) => (
                <div
                  key={b.label}
                  className="grid gap-1 border-b border-border pb-5 sm:grid-cols-[12rem_1fr] sm:gap-6"
                >
                  <dt className="text-[0.68rem] font-bold tracking-[0.18em] text-muted-foreground">
                    {b.label.toUpperCase()}
                  </dt>
                  <dd className="font-display text-base font-semibold text-foreground">
                    {b.value}
                  </dd>
                </div>
              ))}
            </dl>
            <PlaceholderNote>
              Bank details were not in the source document. Send them and they will replace these
              PLACEHOLDER fields exactly as provided.
            </PlaceholderNote>
          </Reveal>

          <Reveal delay={120} className="border border-dashed border-border-strong bg-surface p-8">
            <QrCode className="size-7 text-border-strong" aria-hidden="true" />
            <h2 className="mt-6 font-display text-xl font-bold text-primary">
              UPI / QR code placeholder
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              No UPI ID or QR code was supplied, so none has been invented. This panel is reserved
              for your official payment QR image and UPI handle.
            </p>
            <div className="mt-8 grid aspect-square w-full max-w-56 place-items-center border border-dashed border-border-strong bg-card text-xs text-muted-foreground">
              QR IMAGE HERE
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
