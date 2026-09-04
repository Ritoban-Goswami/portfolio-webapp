# Ritoban Goswami Portfolio

Personal portfolio for a full-stack engineer with 4 years shipping production systems (React/Next.js, Node.js/FastAPI, AWS). Built with Next.js 16, React 19, and isolated client components for animation.

## Tech Stack

| Layer      | Technology                        |
| ---------- | --------------------------------- |
| Framework  | Next.js 16 (App Router)           |
| UI         | React 19                          |
| Styling    | Tailwind CSS v4                   |
| Animations | Framer Motion + GSAP              |
| Icons      | Lucide React                      |
| Fonts      | Inter, Geist, Cormorant Garamond  |
| Analytics  | Vercel Analytics + Speed Insights |
| Language   | TypeScript 5 (strict mode)        |
| Linting    | ESLint 9 + eslint-config-next     |
| Git Hooks  | Husky + lint-staged               |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx            # Root layout, metadata, fonts
│   ├── page.tsx              # Page orchestration (Server Component)
│   ├── globals.css           # Tailwind @theme tokens + global styles
│   ├── api/contact/route.ts  # Contact form API
│   ├── robots.ts
│   └── sitemap.ts
├── components/               # Page sections + interactive UI
├── constants/navigation.ts   # Nav and social links
├── data/
│   ├── experiences.tsx       # Work timeline copy
│   └── projects.ts           # Project showcase copy
├── hooks/
└── lib/gsap.ts
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Features

- **Responsive Design** - Mobile-first layouts
- **Interactive Animations** - Scroll animations, spotlight cursor, timeline
- **Work Timeline** - Appycodes / Creoate and Tellbyte, with expandable bullets
- **Project Showcase** - Drawer with descriptions, stack, challenges, and links
- **Contact Form** - Validated form plus direct email
- **SEO** - Metadata, Open Graph, and Twitter cards
- **Analytics** - Vercel Analytics and Speed Insights

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

- **ESLint** - auto-fixes and blocks on unfixable errors
- **TypeScript** - full type-check, blocks on type errors

Only staged files are checked (fast, via lint-staged).

## Content

**Experience:** Appycodes (Creoate, Sep 2022 – Aug 2026) and Tellbyte (contract, Sep 2025 – Mar 2026).

**Projects:**

1. **Boardly** - Real-time collaborative Kanban board with Firebase
2. **quantize-colors** - Open-source npm library for color analysis
3. **PawShots** - Pet gallery with color categorization
4. **Word(le) Finder** - Wordle helper with API integration
