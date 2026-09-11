import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Handshake, Award, MapPin } from "lucide-react";

import heroImage from "@/assets/hero-community.jpg";
import featureAbout from "@/assets/feature-about.jpg";
import featureImpact from "@/assets/feature-impact.jpg";
import { CtaLink, SectionHead } from "@/components/site/Bits";
import { ProgramGrid } from "@/components/site/ProgramGrid";
import { Reveal } from "@/components/site/Reveal";
import { StatStrip } from "@/components/site/StatStrip";
import { awards, org, partners, stats } from "@/content/bricca";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BRICCA Foundation — Transforming Lives, Empowering Communities" },
      {
        name: "description",
        content:
          "Since 2019, BRICCA Foundation has supported 900+ families across Andhra Pradesh through education, livelihood, health, inclusion and disaster relief programmes.",
      },
      {
        property: "og:title",
        content: "BRICCA Foundation — Transforming Lives, Empowering Communities",
      },
      {
        property: "og:description",
        content:
          "Education, livelihood, health and inclusion programmes for rural, tribal and coastal communities in Andhra Pradesh.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="relative min-h-[92svh] overflow-hidden bg-primary-deep">
        <img
          src={heroImage}
          alt="Children and women of a village community in Andhra Pradesh outside their school"
          width={1920}
          height={1088}
          className="absolute inset-0 size-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-r from-primary-deep/95 via-primary-deep/70 to-primary-deep/25"
        />
        <div className="container-page relative flex min-h-[92svh] flex-col justify-end pb-14 pt-36 lg:justify-center lg:pb-28">
          <div className="max-w-3xl">
            <p className="eyebrow">{org.name.toUpperCase()}</p>
            <h1 className="display-xl mt-6 text-on-dark">
              Transforming Lives.
              <br />
              Empowering Communities.
            </h1>
            <p className="lede mt-7 text-on-dark-muted">{org.intro}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <CtaLink to="/donate">DONATE NOW</CtaLink>
              <CtaLink to="/impact" variant="outlineLight">
                EXPLORE OUR IMPACT
              </CtaLink>
            </div>
          </div>
        </div>

        <div className="relative border-t border-on-dark/15 bg-primary-deep/70 backdrop-blur-md">
          <div className="container-page grid gap-5 py-6 text-on-dark-muted sm:grid-cols-2 lg:grid-cols-4">
            <TrustItem icon={MapPin} text={`Working in ${org.region}`} />
            <TrustItem icon={ShieldCheck} text="12A · 80G · CSR-1 · NGO Darpan registered" />
            <TrustItem icon={Handshake} text="CSR & institutional partnerships" />
            <TrustItem icon={Award} text="4 state and national recognitions" />
          </div>
        </div>
      </section>

      <section aria-label="Impact figures" className="border-b border-border bg-surface">
        <div className="container-page">
          <StatStrip />
        </div>
      </section>

      <section className="container-page py-24 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative">
              <img
                src={featureAbout}
                alt="Community meeting under a tree in a village in Andhra Pradesh"
                width={1400}
                height={1050}
                loading="lazy"
                className="w-full object-cover"
              />
              <p className="absolute -bottom-6 left-0 bg-primary px-6 py-4 font-display text-sm font-bold tracking-[0.2em] text-on-dark">
                SINCE {org.since}
              </p>
            </div>
          </Reveal>
          <div>
            <SectionHead
              eyebrow="Who we are"
              title={`About ${org.name}`}
              lede={org.intro}
            />
            <dl className="mt-10 grid gap-8">
              <div className="rule-accent">
                <dt className="text-[0.7rem] font-bold tracking-[0.22em] text-accent">VISION</dt>
                <dd className="mt-3 font-display text-xl leading-snug font-semibold text-foreground">
                  Communities in Andhra Pradesh where every child, woman and young person has a
                  fair opportunity to learn, earn and live with dignity.
                </dd>
              </div>
              <div className="rule-accent">
                <dt className="text-[0.7rem] font-bold tracking-[0.22em] text-accent">MISSION</dt>
                <dd className="mt-3 font-display text-xl leading-snug font-semibold text-foreground">
                  To deliver education, livelihood, health and inclusion programmes with local
                  partners, and to document their impact transparently.
                </dd>
              </div>
            </dl>
            <div className="mt-10">
              <CtaLink to="/about" variant="outline">
                READ OUR STORY
              </CtaLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-24 lg:py-32">
        <div className="container-page">
          <SectionHead
            eyebrow="Our focus areas"
            title="Nine programmes, one commitment to dignity"
            lede="Each focus area responds to a documented need in the communities we serve, from classrooms and skill centres to health camps and disaster relief."
          />
        </div>
        <div className="container-page mt-14">
          <ProgramGrid />
        </div>
        <div className="container-page mt-12">
          <CtaLink to="/programs" variant="outline">
            SEE PROGRAMME DETAIL
          </CtaLink>
        </div>
      </section>

      <section className="bg-primary py-24 text-on-dark lg:py-32">
        <div className="container-page grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <SectionHead
              eyebrow="Our impact"
              tone="light"
              title="Measured in families, not in adjectives"
              lede="Every figure below is drawn from BRICCA Foundation's own programme records."
            />
            <div className="mt-10">
              <CtaLink to="/impact" variant="outlineLight">
                VIEW FULL IMPACT
              </CtaLink>
            </div>
          </div>
          <Reveal>
            <img
              src={featureImpact}
              alt="A volunteer handing a food kit to a community member"
              width={1600}
              height={1000}
              loading="lazy"
              className="w-full object-cover"
            />
            <ul className="mt-px grid divide-y divide-on-dark/15 border-t border-on-dark/15 sm:grid-cols-2 sm:divide-y-0 sm:divide-x">
              {stats.slice(1, 3).map((s) => (
                <li key={s.label} className="px-6 py-8">
                  <p className="font-display text-4xl font-extrabold text-on-dark">{s.plain}</p>
                  <p className="mt-2 text-[0.7rem] font-semibold tracking-[0.18em] text-on-dark-muted">
                    {s.label.toUpperCase()}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-24 lg:py-32">
        <SectionHead
          eyebrow="Partners & collaborations"
          title="Building Impact Through Partnership"
          lede="BRICCA Foundation works alongside corporate, institutional and development partners to design and deliver programmes at scale."
        />
        <ul className="mt-14 grid gap-px bg-border sm:grid-cols-3">
          {partners.map((p, i) => (
            <Reveal
              as="li"
              key={p.name}
              delay={i * 90}
              className="flex min-h-40 flex-col items-center justify-center gap-3 bg-card px-6 py-10 text-center grayscale transition-all duration-500 hover:grayscale-0"
            >
              <span className="font-display text-lg font-bold tracking-[0.12em] text-primary">
                {p.name}
              </span>
              <span className="text-xs tracking-wide text-muted-foreground">{p.note}</span>
            </Reveal>
          ))}
        </ul>
        <div className="mt-12">
          <CtaLink to="/partners" variant="outline">
            PARTNERSHIP DETAIL
          </CtaLink>
        </div>
      </section>

      <section className="border-y border-border bg-surface py-24 lg:py-28">
        <div className="container-page">
          <SectionHead eyebrow="Recognition" title="Awarded for work on the ground" />
          <ol className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {awards.map((a, i) => (
              <Reveal as="li" key={`${a.year}-${a.title}`} delay={i * 90} className="bg-card p-7">
                <p className="font-display text-3xl font-extrabold text-accent">{a.year}</p>
                <p className="mt-4 font-display text-base leading-snug font-bold text-primary">
                  {a.title}
                </p>
                {a.by && <p className="mt-2 text-xs text-muted-foreground">{a.by}</p>}
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-primary-deep py-24 text-on-dark lg:py-32">
        <div className="container-page max-w-4xl text-center">
          <Reveal>
            <p className="eyebrow justify-center">Support our work</p>
            <h2 className="display-lg mt-6 text-on-dark">
              Together We Can Create Lasting Change
            </h2>
            <p className="lede mx-auto mt-6 text-on-dark-muted">
              Your contribution funds classrooms, skill training, health camps and emergency
              relief for families across Andhra Pradesh.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <CtaLink to="/donate">DONATE NOW</CtaLink>
              <CtaLink to="/get-involved" variant="outlineLight">
                PARTNER WITH US
              </CtaLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function TrustItem({
  icon: Icon,
  text,
}: {
  icon: typeof MapPin;
  text: string;
}) {
  return (
    <p className="flex items-center gap-3 text-xs tracking-wide">
      <Icon className="size-4 shrink-0 text-accent" aria-hidden="true" />
      {text}
    </p>
  );
}
