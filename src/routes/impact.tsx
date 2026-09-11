import { createFileRoute } from "@tanstack/react-router";

import featureImpact from "@/assets/feature-impact.jpg";
import programHealth from "@/assets/program-health.jpg";
import { CtaLink, PageHero } from "@/components/site/Bits";
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
  component: Impact;
});

function Impact() {
  return null;
}
