# Ritoban Goswami — Portfolio

Personal portfolio website built with Next.js 16, React 19, and modern animation libraries. Fully componentized, server-first architecture with isolated client components for interactive elements.

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
│   ├── HeroImage.tsx         # Floating hero image (client)
│   ├── AboutOrbs.tsx         # Spinning rings (client)
│   └── GlowOrb.tsx           # Pulsing background glow (client)
├── hooks/
│   └── (custom hooks)        # Reusable logic
└── data/
    └── projects.ts       # Project data with TypeScript interfaces
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Features

- **Responsive Design** - Mobile-first approach with optimized layouts for all devices
- **Interactive Animations** - Smooth scroll animations, custom spotlight cursor, and floating elements
- **Project Showcase** - Modal-based project viewer with detailed descriptions and links
- **Contact Form** - Functional contact form with validation
- **Performance Optimized** - Server components, optimized images, and minimal bundle size
- **SEO Ready** - Complete metadata, Open Graph, and Twitter Card support
- **Analytics** - Integrated Vercel Analytics and Speed Insights

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

## Projects Featured

The portfolio showcases 4 key projects:

1. **Boardly** - Real-time collaborative Kanban board with Firebase
2. **quantize-colors** - Open-source npm library for color analysis
3. **Word(le) Finder** - Wordle helper tool with API integration
4. **PawShots** - Pet gallery with AI-powered color categorization

Each project includes detailed descriptions, tech stacks, challenges faced, and solutions implemented.
