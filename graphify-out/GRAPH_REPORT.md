# Graph Report - .  (2026-05-26)

## Corpus Check
- Corpus is ~16,363 words - fits in a single context window. You may not need a graph.

## Summary
- 176 nodes · 204 edges · 20 communities (13 shown, 7 thin omitted)
- Extraction: 90% EXTRACTED · 10% INFERRED · 0% AMBIGUOUS · INFERRED: 21 edges (avg confidence: 0.88)
- Token cost: 0 input · 134,709 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Resizable Navbar Primitives|Resizable Navbar Primitives]]
- [[_COMMUNITY_Landing Page Sections|Landing Page Sections]]
- [[_COMMUNITY_Runtime Dependencies|Runtime Dependencies]]
- [[_COMMUNITY_TypeScript Compiler Config|TypeScript Compiler Config]]
- [[_COMMUNITY_Build Config and Agents Notice|Build Config and Agents Notice]]
- [[_COMMUNITY_Page Component Library|Page Component Library]]
- [[_COMMUNITY_Brand Logo Design|Brand Logo Design]]
- [[_COMMUNITY_Contact Form Pipeline|Contact Form Pipeline]]
- [[_COMMUNITY_Favicon Brand Mark|Favicon Brand Mark]]
- [[_COMMUNITY_Root Layout and Fonts|Root Layout and Fonts]]
- [[_COMMUNITY_Contact API Internals|Contact API Internals]]
- [[_COMMUNITY_Claude Permissions Allowlist|Claude Permissions Allowlist]]
- [[_COMMUNITY_Typography and SEO Rationale|Typography and SEO Rationale]]
- [[_COMMUNITY_ESLint Configuration|ESLint Configuration]]
- [[_COMMUNITY_Next.js Configuration|Next.js Configuration]]
- [[_COMMUNITY_PostCSS Configuration|PostCSS Configuration]]
- [[_COMMUNITY_Next.js Config Rationale|Next.js Config Rationale]]
- [[_COMMUNITY_Claude Permissions Rationale|Claude Permissions Rationale]]
- [[_COMMUNITY_Default Create Next App README|Default Create Next App README]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `cn()` - 15 edges
3. `Home page (app/page.tsx)` - 9 edges
4. `SteamNavbar (app navbar wrapper)` - 7 edges
5. `STEM and Petals Logo` - 7 edges
6. `Classes page with Sawyer embed` - 6 edges
7. `scripts` - 5 edges
8. `POST /api/contact route handler` - 5 edges
9. `Gift Cards page with Sawyer embed` - 5 edges
10. `Resizable Navbar primitives (Aceternity)` - 5 edges

## Surprising Connections (you probably didn't know these)
- `cn()` --calls--> `clsx`  [INFERRED]
  app/lib/utils.ts → package.json
- `Concept: Next.js 16 has breaking changes vs training data` --references--> `stem-petals package.json`  [INFERRED]
  AGENTS.md → package.json
- `TypeScript @/* path alias` --references--> `cn()`  [INFERRED]
  tsconfig.json → app/lib/utils.ts
- `ESLint config extending Next presets` --references--> `stem-petals package.json`  [INFERRED]
  eslint.config.mjs → package.json
- `PostCSS config with @tailwindcss/postcss` --references--> `stem-petals package.json`  [INFERRED]
  postcss.config.mjs → package.json

## Hyperedges (group relationships)
- **End-to-end contact form submission pipeline** — component_contactform, api_contact_route, api_contact_ratelimit, api_contact_sanitize, api_contact_email_regex [EXTRACTED 0.95]
- **Sawyer third-party widget embedding pattern** — classes_page, giftcards_page, sawyer_embed_widget [EXTRACTED 1.00]
- **Scroll-aware UX chrome (progress + back-to-top + sticky navbar)** — component_scrollprogress, component_scrolltotop, ui_navbar_navbody [INFERRED 0.85]

## Communities (20 total, 7 thin omitted)

### Community 0 - "Resizable Navbar Primitives"
Cohesion: 0.11
Nodes (25): SteamNavbar (app navbar wrapper), navItems, cn(), navItems link data, SteamLogo internal component, TypeScript @/* path alias, MobileNav / MobileNavMenu / Toggle, NavbarButton primitive (+17 more)

### Community 1 - "Landing Page Sections"
Cohesion: 0.10
Nodes (8): fadeUp, sections, fadeUp, FormState, fadeUp, fadeUp, placeholderClasses, tagColors

### Community 2 - "Runtime Dependencies"
Cohesion: 0.10
Nodes (19): dependencies, class-variance-authority, clsx, lucide-react, motion, next, @radix-ui/react-slot, react (+11 more)

### Community 3 - "TypeScript Compiler Config"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 4 - "Build Config and Agents Notice"
Cohesion: 0.13
Nodes (15): Concept: Next.js 16 has breaking changes vs training data, AGENTS.md (Next.js breaking changes notice), CLAUDE.md (project pointer to AGENTS.md), ESLint config extending Next presets, stem-petals package.json, PostCSS config with @tailwindcss/postcss, devDependencies, eslint (+7 more)

### Community 5 - "Page Component Library"
Cohesion: 0.23
Nodes (14): Classes page with Sawyer embed, About section component, Footer component, Hero section component, ScrollProgress bar component, ScrollToTop button component, UpcomingClasses section component, Skip to main content link (+6 more)

### Community 6 - "Brand Logo Design"
Cohesion: 0.31
Nodes (9): Brand Name: STEM and Petals, Yellow Orange Green Color Palette, Floral and Educational Brand Concept, Playful Hand Drawn Illustration Style, Yellow Flower Motif, Green Leaf and Stem, Small Heart Accent in Ampersand, STEM and Petals Logo (+1 more)

### Community 8 - "Contact Form Pipeline"
Cohesion: 0.38
Nodes (7): Email regex validator, In-memory per-IP rate limiter, POST /api/contact route handler, sanitize() HTML-strip helper, ContactForm component, Spam protection: honeypot + rate limit + sanitize, Honeypot 'website' field

### Community 9 - "Favicon Brand Mark"
Cohesion: 0.40
Nodes (6): Brand Identity Mark, Cartoon Illustration Style, Favicon/App Icon Purpose, STEM & Petals Flower Icon, Green Stem and Leaf Element, Yellow Flower Petals Element

### Community 10 - "Root Layout and Fonts"
Cohesion: 0.40
Nodes (3): inter, metadata, playfairDisplay

### Community 11 - "Contact API Internals"
Cohesion: 0.60
Nodes (4): isRateLimited(), POST(), rateLimitMap, sanitize()

### Community 13 - "Typography and SEO Rationale"
Cohesion: 0.67
Nodes (3): Playfair Display + Inter font pairing, Site metadata + SEO (RootLayout), RootLayout (app/layout.tsx)

## Knowledge Gaps
- **80 isolated node(s):** `eslintConfig`, `nextConfig`, `name`, `version`, `private` (+75 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `Resizable Navbar Primitives` to `Runtime Dependencies`?**
  _High betweenness centrality (0.285) - this node is a cross-community bridge._
- **Why does `clsx` connect `Runtime Dependencies` to `Resizable Navbar Primitives`?**
  _High betweenness centrality (0.181) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `cn()` (e.g. with `clsx` and `TypeScript @/* path alias`) actually correct?**
  _`cn()` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `eslintConfig`, `nextConfig`, `name` to the rest of the system?**
  _84 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Resizable Navbar Primitives` be split into smaller, more focused modules?**
  _Cohesion score 0.10752688172043011 - nodes in this community are weakly interconnected._
- **Should `Landing Page Sections` be split into smaller, more focused modules?**
  _Cohesion score 0.09523809523809523 - nodes in this community are weakly interconnected._
- **Should `Runtime Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._