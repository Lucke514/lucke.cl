# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Lucas González built with Astro 5, TypeScript, and Tailwind CSS. Static site generation with animation-rich UX (GSAP, Typed.js, tsParticles).

**Site URL:** https://lucke.cl

## Development Commands

```bash
npm run dev         # Start dev server at localhost:4321
npm run build       # Type-check and build (astro check && astro build)
npm run preview     # Preview production build locally
```

**Node version:** 20.18.0 (see `.nvmrc`)

## Architecture

- **Output:** Static HTML (no server runtime)
- **Routing:** File-based via `src/pages/` (index.astro, proyectos.astro, 404.astro)
- **Layout:** `src/layouts/Layout.astro` wraps all pages with SEO meta, header, footer

**Path Aliases (tsconfig.json):**
- `shared/*` → `./src/shared/*`
- `components/*` → `./src/components/*`

**Key Directories:**
- `src/components/` - Feature components (AnimatedCounter, TypedText, ParticlesBackground, ThemeToggle, etc.)
- `src/shared/` - Layout parts and icons (Header, Footer, technology icons, social media icons)
- `public/img/` - Static images for projects and avatar

## Animation Libraries

- **GSAP** - Complex animations and scroll effects
- **Typed.js** - Typewriter text effect (TypedText.astro)
- **CountUp.js** - Animated number counters (AnimatedCounter.astro)
- **tsParticles** - Particle background effects (ParticlesBackground.astro)

## Component Patterns

- Astro components use frontmatter for props/imports and `<script>` tags for client-side TypeScript
- Dark mode via Tailwind class strategy with localStorage persistence (ThemeToggle component)
- Icon components in `src/shared/icons/` for consistent SVG usage

## Docker

```bash
docker build -t lucke-cl .
docker run -p 4321:4321 lucke-cl
```
