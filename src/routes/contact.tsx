import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

import featureAbout from "@/assets/feature-about.jpg";
import { PageHero, PlaceholderNote } from "@/components/site/Bits";
import { Reveal } from "@/components/site/Reveal";
import { contact, org } from "@/content/bricca";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact BRICCA Foundation — Andhra Pradesh, India" },
      {
        name: "description",
        content:
          "Contact BRICCA Foundation for CSR partnerships, volunteering, donations or due-diligence documents. Based in Andhra Pradesh, India.",
      },
      { property: "og:title", content: "Contact BRICCA Foundation" },
      {
        property: "og:description",
        content:
          "Get in touch about partnerships, volunteering, donations or programme documentation.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to us about partnership, giving or volunteering"
        lede={`${org.name} responds to CSR teams, donors, volunteers and institutions carrying out due diligence.`}
      />

      <section className="container-page py-20 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <img
                src={featureAbout}
                alt="Community gathering in a village in Andhra Pradesh"
                width={1400}
                height={1050}
                loading="lazy"
                className="w-full object-cover"
              />
            </Reveal>
            <dl className="mt-10 grid gap-6">
              <ContactRow icon={MapPin} label="Registered office" value={contact.address} />
              <ContactRow icon={Phone} label="Phone" value={contact.phone} />
              <ContactRow icon={Mail} label="Email" value={contact.email} />
            </dl>
            <PlaceholderNote>
              Address, phone and email are PLACEHOLDER values — the source document did not include
              them, and nothing has been invented. Send the real details to have them filled in.
            </PlaceholderNote>
          </div>

          <Reveal delay={100} className="border border-border bg-card p-8 lg:p-10">
            <h2 className="display-md text-primary">Send a message</h2>
            <form
              className="mt-8 grid gap-6"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <Field id="name" label="Name" />
              <Field id="email" label="Email" type="email" />
              <Field id="phone" label="Phone" type="tel" required={false} />
              <Field id="subject" label="Subject" />
              <div className="grid gap-2">
                <label
                  htmlFor="message"
                  className="text-[0.68rem] font-bold tracking-[0.18em] text-muted-foreground"
                >
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center bg-accent px-6 py-4 text-[0.72rem] font-bold tracking-[0.16em] text-accent-foreground transition-colors hover:bg-accent/90"
              >
                SEND MESSAGE
              </button>
              <p aria-live="polite" className="min-h-5 text-sm text-muted-foreground">
                {sent
                  ? "Thank you — your message has been recorded in this form. Connect an email or database service to deliver it to the foundation's inbox."
                  : ""}
              </p>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof MapPin;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-4 border-b border-border pb-6">
      <Icon className="mt-1 size-5 shrink-0 text-accent" aria-hidden="true" />
      <div>
        <dt className="text-[0.68rem] font-bold tracking-[0.18em] text-muted-foreground">
          {label.toUpperCase()}
        </dt>
        <dd className="mt-1 font-display text-base font-semibold text-foreground">{value}</dd>
      </div>
    </div>
  );
}

function Field({
  id,
  label,
  type = "text",
  required = true,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="grid gap-2">
      <label
        htmlFor={id}
        className="text-[0.68rem] font-bold tracking-[0.18em] text-muted-foreground"
      >
        {label.toUpperCase()}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
      />
    </div>
  );
}
