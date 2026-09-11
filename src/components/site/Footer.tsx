import { Link } from "@tanstack/react-router";

import { Wordmark } from "@/components/site/Wordmark";
import { navLinks, org } from "@/content/bricca";

export function Footer() {
  return (
    <footer className="bg-primary-deep text-on-dark">
      <div className="container-page grid gap-14 py-16 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:py-20">
        <div className="max-w-sm">
          <Wordmark tone="light" />
          <p className="mt-6 text-sm leading-relaxed text-on-dark-muted">{org.intro}</p>
          <p className="mt-6 text-[0.7rem] font-semibold tracking-[0.2em] text-on-dark-muted">
            SINCE {org.since} · {org.region.toUpperCase()}
          </p>
        </div>

        <FooterCol title="Navigation">
          {navLinks
            .filter((l) => l.to !== "/")
            .map((l) => (
              <FooterLink key={l.to} to={l.to}>
                {l.label}
              </FooterLink>
            ))}
        </FooterCol>

        <FooterCol title="Get Involved">
          <FooterLink to="/donate">Donate</FooterLink>
          <FooterLink to="/get-involved">CSR Partnership</FooterLink>
          <FooterLink to="/get-involved">Volunteer</FooterLink>
          <FooterLink to="/leadership">Leadership</FooterLink>
          <FooterLink to="/future">Future Priorities</FooterLink>
        </FooterCol>

        <FooterCol title="Compliance">
          <FooterLink to="/compliance">12A</FooterLink>
          <FooterLink to="/compliance">80G</FooterLink>
          <FooterLink to="/compliance">CSR-1</FooterLink>
          <FooterLink to="/compliance">NGO Darpan</FooterLink>
        </FooterCol>
      </div>

      <div className="border-t border-on-dark/12">
        <div className="container-page flex flex-col gap-3 py-6 text-[0.72rem] tracking-wide text-on-dark-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {org.name}. All rights reserved.
          </p>
          <p>FCRA status: Under Process — Pending Approval</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-[0.68rem] font-bold tracking-[0.24em] text-accent">
        {title.toUpperCase()}
      </h2>
      <ul className="mt-5 grid gap-3">{children}</ul>
    </div>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        to={to}
        className="text-sm text-on-dark-muted transition-colors hover:text-on-dark"
      >
        {children}
      </Link>
    </li>
  );
}
