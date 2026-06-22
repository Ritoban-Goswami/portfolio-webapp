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
    date: "Sep 2022 – Present",
    title: "Software Engineer",
    company: "Appycodes",
    meta: "B2B Wholesale Marketplace · Remote UK",
    align: "right",
    bullets: [
      <>Owned end-to-end delivery of <strong className="text-on-background font-medium">200+ production features</strong> for hundreds of thousands of active merchants across product discovery, listing management, and checkout workflows.</>,
      <>Led Next.js App Router migration, improving page load performance by <strong className="text-on-background font-medium">32%</strong>, lifting Core Web Vitals scores platform-wide, and directly reducing bounce rate.</>,
      <>Architected scalable microservice APIs within a <strong className="text-on-background font-medium">200+ repository AWS serverless ecosystem</strong> (Lambda, API Gateway, DynamoDB, MySQL) with zero-downtime CI/CD pipelines.</>,
      <>Implemented real-time email status tracking via AWS SES and SQS, reducing <strong className="text-on-background font-medium">undetected delivery failures by ~90%</strong>.</>,
      <>Integrated Stripe payments and OAuth 2.0 with role-based access control and security-hardened session management, supporting secure transactions across the full marketplace.</>,
      <>Built Algolia-powered product discovery with dynamic faceted filters, cutting <strong className="text-on-background font-medium">average search latency by over 60%</strong>.</>,
      <>Designed a reusable component library (Tailwind CSS + Shadcn UI), cutting <strong className="text-on-background font-medium">feature delivery time by 40%</strong>, and mentored 2–3 junior engineers through code reviews and pair programming, raising overall PR quality team-wide.</>,
    ],
  },
  {
    date: "Sep 2025 – Present",
    title: "Full Stack Engineer",
    company: "Tellbyte",
    meta: "SaaS Platform · Contract · Remote US",
    align: "left",
    bullets: [
      <>Joined as a founding engineer, led frontend development, and participated in hiring engineers and designers as the company scaled.</>,
      <>Delivered <strong className="text-on-background font-medium">5–6 production applications</strong> across SaaS and client-facing domains, converting complex Figma designs into pixel-perfect, fully responsive full-stack applications.</>,
      <>Built complex animation-heavy interfaces using Framer Motion, achieving <strong className="text-on-background font-medium">80–90+ Lighthouse scores</strong> through bundle optimisation, lazy loading, and CLS reduction.</>,
      <>Integrated Elastic Email for transactional workflows and implemented GTM analytics pipelines covering event tracking, conversion funnels, and third-party tag management.</>,
    ],
  },
];
