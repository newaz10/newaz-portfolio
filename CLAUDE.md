## Architecture

Portfolio site built with **Next.js 16** (App Router), **React 19**, **Tailwind CSS v4**, **Framer Motion**, and **TypeScript**. Contains a homepage (all sections) and a markdown-powered blog with SSG.

### Source structure

- `src/app/` — App Router pages. `layout.tsx` loads fonts (Inter, JetBrains Mono, Playfair Display, Lora), metadata, and shared chrome (StarField, Navbar, Footer). `page.tsx` is the homepage composing all sections.
- `src/app/blog/` — Blog routes. `page.tsx` (list), `[slug]/page.tsx` (SSG post).
- `src/components/sections/` — Homepage sections rendered in order: Hero → About → Projects → TechStack → Experience → Blog → Testimonials → ResumeCTA → Contact
- `src/components/ui/` — Reusable UI components (Navbar, Footer, Button, AnimatedSection, BlogCard, cards, badges)
- `src/components/blog/` — Blog-specific components (BlogHeader, TableOfContents, ReadingProgress, BlogThemeProvider, BlogThemeToggle)
- `src/components/effects/` — Visual effects (StarField, CursorFollower, GradientOrb, DotGrid, GlowEffect)
- `src/data/` — Portfolio content as typed TypeScript constants (personal info, projects, skills, experience, testimonials, navigation, site-config). Blog data comes from `content/blog/` markdown, not `src/data/`.
- `src/types/data.ts` — Shared TypeScript interfaces for all data structures (including `BlogPostMeta`, `BlogPostFull`)
- `src/lib/profile.ts` — Build-time reader for profile images in `public/profile/`
- `src/lib/cn.ts` — `cn()` utility combining clsx + tailwind-merge
- `src/lib/motion.ts` — Reusable Framer Motion variants (fadeInUp, fadeIn, scaleIn, slideInLeft/Right, staggerContainer, staggerItem)
- `scripts/convert-images.mjs` — HEIC → WebP conversion script (runs via predev/prebuild hooks)
