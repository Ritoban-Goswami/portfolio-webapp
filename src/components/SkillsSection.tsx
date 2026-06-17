import FadeUpSection from "@/components/FadeUpSection";

const skills = [
  {
    label: "01 // Languages",
    items: ["TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    label: "02 // Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Shadcn UI", "Framer Motion", "Radix UI", "WebSockets", "Core Web Vitals"],
  },
  {
    label: "03 // Backend",
    items: ["Node.js", "Express.js", "REST APIs", "Microservices", "DynamoDB", "MySQL", "Redis"],
  },
  {
    label: "04 // Infra & Cloud",
    items: ["AWS Lambda", "API Gateway", "SQS", "SES", "Docker", "CI/CD", "Terraform", "Git"],
  },
  {
    label: "05 // Testing",
    items: ["Jest", "Cypress"],
  },
  {
    label: "06 // Integrations",
    items: ["Stripe", "OAuth 2.0", "Algolia", "Twilio", "Elastic Email", "Strapi", "Sanity", "OpenAI API"],
  },
];

export default function SkillsSection() {
  return (
    <FadeUpSection className="py-20 md:py-40 mt-12 md:mt-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-0" id="skills">
      <h2 className="font-headline-lg text-4xl md:text-5xl text-on-background mb-16 md:mb-32 text-center tracking-tight font-extrabold">
        Technical <span className="text-on-background/40 font-cormorant italic text-[3.5rem] tracking-wide font-semibold ml-[0.4rem]">Arsenal</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {skills.map(({ label, items }) => (
          <div key={label} className="glass-card p-6 sm:p-12">
            <h3 className="font-headline-md text-xl text-on-background mb-10 flex items-center gap-4 font-semibold tracking-wide">
              <span className="text-on-background/20 font-mono-label text-sm uppercase">{label}</span>
            </h3>
            <div className="flex flex-wrap gap-4">
              {items.map((item) => (
                <span
                  key={item}
                  className="px-5 py-2.5 bg-transparent border border-on-background/10 text-sm font-light text-on-background/70 hover:border-on-background/40 hover:text-on-background transition-all cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </FadeUpSection>
  );
}
