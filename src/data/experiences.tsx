export interface ExperienceEntry {
  date: string;
  title: string;
  company: string;
  meta: string;
  align: "right" | "left";
  bullets: React.ReactNode[];
}

export const experiences: ExperienceEntry[] = [
  {
    date: "Sep 2022 – Aug 2026",
    title: "Software Engineer",
    company: "Appycodes",
    meta: "Creoate · B2B Wholesale Marketplace · Remote UK",
    align: "right",
    bullets: [
      <>
        Cut average per-shipment cost by{" "}
        <strong className="text-on-background font-medium">18%</strong> by replacing
        Fareye with a direct DHL + UPS integration, saving about{" "}
        <strong className="text-on-background font-medium">£12K/month</strong> in
        logistics; built a carrier-abstraction layer with feature-flagged routing
        and fallback, plus seller cost pass-through that protected margin on
        multi-brand orders above a £200 MOV the company had previously absorbed in
        full.
      </>,
      <>
        Increased platform take-rate by{" "}
        <strong className="text-on-background font-medium">140 bps</strong>{" "}
        (6.2% → 7.6%) by redesigning UK and US seller commission (first-order vs.
        repeat-order tiers, benchmarked against Faire/Ankorstore) across 100% of
        platform GMV.
      </>,
      <>
        Shipped production features through Creoate&apos;s 3+ year platform rebuild
        (WordPress → microservices) on a marketplace serving{" "}
        <strong className="text-on-background font-medium">5,000+ merchants</strong> and{" "}
        <strong className="text-on-background font-medium">200+ retailers</strong>,
        processing{" "}
        <strong className="text-on-background font-medium">3,000+ orders/day</strong>
        using React/Next.js, Node.js/FastAPI, and AWS, across backend, growth, and
        platform teams.
      </>,
      <>
        Built a rules-based KYC/credit decisioning engine with two credit providers,
        auto-approving{" "}
        <strong className="text-on-background font-medium">78% of applications</strong>,
        flagging{" "}
        <strong className="text-on-background font-medium">40% of rejects as fraud</strong>,
        and cutting manual review time by{" "}
        <strong className="text-on-background font-medium">65%</strong>.
      </>,
      <>
        Scaled the BYF email dispatcher (AWS Glue, Athena, SES) to{" "}
        <strong className="text-on-background font-medium">40K+ retailers/month</strong>{" "}
        across 3 campaign types, holding bounce rate under{" "}
        <strong className="text-on-background font-medium">1.5%</strong> and cutting
        SES throttling incidents by{" "}
        <strong className="text-on-background font-medium">70%</strong> with
        quota-aware, idempotent batching and safe resume.
      </>,
      <>
        Migrated the data-apis FastAPI service to Kubernetes (Docker/ECR, rebuilt
        CI/CD, Prometheus/Grafana), moving deploys from weekly to{" "}
        <strong className="text-on-background font-medium">daily</strong> and cutting
        MTTR from ~90 min to{" "}
        <strong className="text-on-background font-medium">20 min</strong>; moved a
        core shipment-service codebase to TypeScript with AWS Lambda Powertools.
      </>,
      <>
        Rebuilt the referral system on Elastic Email with domain verification,
        lifting delivery from{" "}
        <strong className="text-on-background font-medium">82% to 97%</strong> and
        signups from referral links by{" "}
        <strong className="text-on-background font-medium">25%</strong>.
      </>,
      <>
        Ran the platform&apos;s first standing PostHog A/B tests on For-You-Page
        personalisation, driving a{" "}
        <strong className="text-on-background font-medium">9% conversion lift</strong>{" "}
        and{" "}
        <strong className="text-on-background font-medium">$28K incremental monthly GMV</strong>.
      </>,
      <>
        Migrated Python/OpenSearch search to Algolia, cutting search latency by{" "}
        <strong className="text-on-background font-medium">60%</strong> (420ms →
        168ms) for autocomplete and faceted filters, and hitting Google&apos;s{" "}
        <strong className="text-on-background font-medium">&quot;Good&quot; Core Web Vitals</strong>{" "}
        platform-wide (sub-200ms INP, sub-0.1 CLS).
      </>,
      <>
        Cut undetected transactional email failures by{" "}
        <strong className="text-on-background font-medium">~90%</strong> with real-time
        SES/SQS delivery tracking; integrated Stripe and OAuth 2.0 with RBAC, built
        a HubSpot CRM sync layer, and started passwordless magic-link login.
      </>,
      <>
        Reviewed code and mentored 2–3 junior engineers through pair programming,
        raising PR quality across the team.
      </>,
    ],
  },
  {
    date: "Sep 2025 – Mar 2026",
    title: "Full Stack Engineer",
    company: "Tellbyte",
    meta: "SaaS Platform · Contract · Remote US",
    align: "left",
    bullets: [
      <>
        Joined as a founding engineer, led frontend development, and took part in
        hiring engineers and designers as the company scaled into a small
        cross-functional team.
      </>,
      <>
        Delivered{" "}
        <strong className="text-on-background font-medium">5–6 production applications</strong>{" "}
        across SaaS and client-facing domains, converting complex Figma designs into
        pixel-perfect, fully responsive full-stack apps (React/Next.js, MySQL-backed
        Node.js APIs).
      </>,
      <>
        Built RESTful APIs (Node.js/Express, MySQL) integrated with Strapi/Sanity CMS
        and Elastic Email.
      </>,
      <>
        Built animation-heavy interfaces with Framer Motion, achieving{" "}
        <strong className="text-on-background font-medium">80–90+ Lighthouse scores</strong>{" "}
        via bundle optimisation and CLS reduction.
      </>,
    ],
  },
];
