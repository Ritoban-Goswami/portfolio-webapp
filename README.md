# Ritoban Goswami — Portfolio

Personal portfolio website built with Next.js 16, React 19, and Framer Motion. Fully componentized, server-first architecture with isolated client components for interactive elements.

## Tech Stack

| Layer      | Technology                          |
| ---------- | ----------------------------------- |
| Framework  | Next.js 16 (App Router)             |
| UI         | React 19                            |
| Styling    | Tailwind CSS v4                     |
| Animations | Framer Motion                       |
| Icons      | Lucide React                        |
| Fonts      | Geist Sans & Geist Mono (next/font) |
| Language   | TypeScript 5 (strict mode)          |
| Linting    | ESLint 9 + eslint-config-next       |
| Git Hooks  | Husky + lint-staged                 |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout, metadata, font loading
│   ├── page.tsx          # Page orchestration (Server Component)
│   └── globals.css       # Tailwind @theme tokens + global styles
├── components/
│   ├── Navbar.tsx         # Floating pill navbar
│   ├── HeroSection.tsx    # Hero layout
│   ├── AboutSection.tsx   # About text + animated orbs
│   ├── ExperienceSection.tsx # Timeline
│   ├── ProjectsSection.tsx   # Project cards + modal (client)
│   ├── SkillsSection.tsx     # Skills grid
│   ├── ContactSection.tsx    # Contact heading + form
│   ├── Footer.tsx            # Footer with socials
│   ├── ContactForm.tsx       # Controlled form (client)
│   ├── SpotlightCursor.tsx   # Custom cursor (client)
│   ├── BackToTopButton.tsx   # Scroll-aware button (client)
│   ├── FadeUpSection.tsx     # whileInView fade wrapper (client)
│   ├── HeroImage.tsx         # Floating hero image (client)
│   ├── AboutOrbs.tsx         # Spinning rings (client)
│   └── GlowOrb.tsx           # Pulsing background glow (client)
└── data/
    └── projects.ts       # Project data
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev        # Start development server
npm run build      # Production build
npm run start      # Start production server
npm run lint       # Run ESLint
npm run typecheck  # Run TypeScript type check
```

## Code Quality

Pre-commit hook via Husky runs on every `git commit`:

- **ESLint** — auto-fixes and blocks on unfixable errors
- **TypeScript** — full type-check, blocks on type errors

Only staged files are checked (fast, via lint-staged).
