# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Lucas González built with Astro 5, TypeScript, and Tailwind CSS. Static, bilingual (es/en) site with animation-rich UX (GSAP ScrollTrigger/SplitText, Three.js hero, Typed.js).

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
- **Routing:** File-based via `src/pages/`. Spanish at root (index.astro, proyectos.astro, 404.astro), English under `src/pages/en/` (index.astro, projects.astro)
- **i18n:** Astro native i18n (`defaultLocale: 'es'`, no prefix for Spanish). UI strings in `src/i18n/ui.ts`, helpers (`getLangFromUrl`, `useTranslations`, `localizePath`, `getAlternatePath`) in `src/i18n/utils.ts`. Layout emits hreflang alternates; sitemap is i18n-aware
- **Layout:** `src/layouts/Layout.astro` wraps all pages with SEO meta (per-language JSON-LD Person/WebSite, OG, hreflang), header, footer and the global scroll-animation script
- **Content data:** Bilingual experience and project data live in `src/data/experience.ts` and `src/data/projects.ts` (each text field is `{ es, en }`)

**Path Aliases (tsconfig.json):**
- `shared/*` → `./src/shared/*`
- `components/*` → `./src/components/*`

**Key Directories:**
- `src/components/sections/` - Page sections (Hero, About, FeaturedProjects, ExperienceSection, TechSection, CertsSection, Contact, ProjectCard, ProjectsPageContent). All receive a `lang` prop
- `src/components/` - Feature components (Hero3D, ScrollAnimations, AnimatedCounter, TypedText, ThemeToggle, etc.)
- `src/shared/` - Layout parts and icons (Header, Footer, technology icons, social media icons)
- `public/img/` - Static images for projects and avatar
- `public/cv.pdf` - Downloadable CV targeted by all "Descargar CV / Download CV" buttons (not in repo; owner uploads it)

## Animation System

- **Three.js** (`Hero3D.astro`) - Hero particle sphere + wireframe icosahedron. Lazy-loaded via `requestIdleCallback`, skipped under `prefers-reduced-motion`, reduced scene on mobile, theme-aware colors via MutationObserver on `html.dark`
- **GSAP** (`ScrollAnimations.astro`) - Global scroll reveals driven by data attributes: `data-animate` (fade/slide, values `left`/`right`), `data-animate-group` (stagger children), `data-animate-hero` (load-time entrance), `#hero-title` (SplitText), `#exp-progress` (scrubbed timeline line). Use `gsap.fromTo`, not `gsap.from`, with ScrollTrigger (from-tweens stall after refresh)
- **Typed.js** (TypedText.astro) / **CountUp.js** (AnimatedCounter.astro)
- `html { overflow-x: clip }` and `body { grid-template-columns: minmax(0,1fr) }` in Layout guard against mobile overflow from pre-animation x-offsets and the tech slider's intrinsic width — keep them

## Component Patterns

- Astro components use frontmatter for props/imports and `<script>` tags for client-side TypeScript
- Dark mode via Tailwind class strategy with localStorage persistence (ThemeToggle component)
- Icon components in `src/shared/icons/` for consistent SVG usage
- Dynamic Tailwind color classes (e.g. `from-${exp.color}-400` in ExperienceSection) rely on the safelist in `tailwind.config.js`

## Docker

```bash
docker build -t lucke-cl .
docker run -p 4321:4321 lucke-cl
```
