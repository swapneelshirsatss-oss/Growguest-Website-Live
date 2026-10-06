# Growguest Workspace Guidelines & Business Context

## Business & Entity Overview
- **Brand & Legal Entity Name**: GrowGuest Digital Growth for Hospitality
- **Type**: Boutique digital marketing consultancy specializing exclusively in hospitality (hotels, resorts, homestays, restaurants).
- **Director & Founder**: Swapneel Shirsat (18+ years digital marketing experience, 10+ years exclusively inside hospitality).
- **Core Value Proposition**: Solves the OTA commission bleed (MakeMyTrip, Agoda, Booking.com) for small & mid-sized property owners by building an end-to-end direct booking pipeline (Free Direct Booking Audit → Google Business Profile Optimization → Website Conversion Fixes → Technical & Local SEO → WhatsApp Automation).
- **Headquarters & Physical Address**: 60, Swami samarth Nagari, Besa-Pipla Rd, Nagpur, Maharashtra 440034, India.
- **Google Maps CID Profile**: https://www.google.com/maps/place/?cid=13593835757779847259
- **Exact Coordinates**: 21.0857691, 79.0977950
- **Primary Contact / WhatsApp**: +91 89569 07343 | hello@growguest.com

## Target Audience & Geographic Focus
- **Primary Market**: Nagpur city and surrounding areas (Wardha Road, Dharampeth, Civil Lines, Sadar, Besa-Pipla Rd). Focus on local in-person audits, relationships, and WhatsApp-native communication.
- **Secondary Market**: Uttarakhand hill-station relationships (Mukteshwar, Ramgarh, Nainital) — proving the direct-booking playbook works beyond Nagpur.
- **Target Customers**: Independent Nagpur hotel owners, homestay owners, restaurant owners wanting local search visibility, family-run properties, and boutique resorts.

## Target SEO Keywords & Topics
- `direct booking vs OTA commission`
- `Google Business Profile for hotels`
- `local SEO for homestays Nagpur`
- `hotel website booking conversion`
- `restaurant local SEO Nagpur`
- `reduce OTA dependence`
- `GBP audit for hospitality`
- `small hotel digital marketing India`
- `Nagpur hospitality marketing consultant`
- `Swapneel Shirsat GrowGuest`

## Permanent Technical & Architecture Rules
1. **Trailing Slashes**: Every internal link across templates, navigation, breadcrumbs, footers, and in-article content must end with a trailing slash (`/`) to eliminate 301 redirects and crawl waste.
2. **Schema.org Standards**:
   - `Organization` & `LocalBusiness` schemas must include `hasMap`, `geo` coordinates, `address` (440034), `sameAs` (with CID), `director` (Swapneel Shirsat), and `founder` (Swapneel Shirsat).
   - Blog posts must credit `Swapneel Shirsat` as author (`jobTitle: "Director & Founder — Hospitality Digital Marketing Consultant"`).
3. **AI Knowledge Base Sync**: Keep `public/llms.txt` and `public/llms-full.txt` aligned with the exact business name, address, Google Maps CID listing, and director profile for AI search crawlers (Perplexity, ChatGPT, Claude, Gemini).
4. **Menu Stability**: Do not add new links or alter top-level header navigation (`Header.tsx`) unless explicitly instructed by the user.
5. **Dev Server Multi-Interface Binding**: Always configure Astro/Vite dev server with `host: true` (or CLI flag `--host`) instead of hardcoding `127.0.0.1`. This ensures dual-stack listening on IPv4 (`127.0.0.1`), IPv6 (`::1`), and LAN, preventing Windows `localhost` DNS resolution failures (`ERR_CONNECTION_REFUSED`).
6. **CSS Reset & Spacing Utility Hygiene**: Never apply universal `*, *::before, *::after { margin: 0; padding: 0; }` resets or unmanaged global stylesheets that override Tailwind v4's `:where()` utility classes (`space-y-*`, `gap-*`, `pt-*`, `pb-*`). Use element-specific resets only (`body, h1, h2, h3, h4, h5, h6, p, ul, ol, figure { margin: 0; }`).
7. **Pre-Flight Static Lint & JSX Validation**: Always run `npm run lint` (`tsc --noEmit`) to verify zero JSX or TypeScript errors before declaring pages/dev server healthy or committing code.
8. **Dark Container Contrast & Heading Invariant**:
   - Never declare bare tag-level heading color overrides (`h1, h2, h3, h4 { color: ...; }`) outside of `@layer` or without `:where()`, as unlayered rules override Tailwind v4 utility classes (`.text-white`).
   - In any dark-background section, card, or calculator (`#071510`, `#0c2018`, `#102920`, `bg-slate-900`), all headings (`h1`–`h6`) and key metric labels must maintain WCAG AAA compliance (minimum 7:1 contrast ratio, targeting `#ffffff` or gold `#dfad3c`).
   - Defensively declare explicit `text-white` and inline `style={{ color: '#ffffff' }}` on headings and `text-slate-200` on labels inside dark containers to ensure 100% cascade immunity regardless of stylesheet import order.


