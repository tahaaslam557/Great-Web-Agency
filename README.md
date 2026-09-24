# Great Web Agency — website

Next.js 16 (App Router) · TypeScript · Tailwind CSS 4 · Motion for React · Lucide icons.

```bash
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the build
```

## Where to edit things

| What | File |
| --- | --- |
| Brand colours, radius, type scale, backgrounds | `src/app/globals.css` (`:root` tokens + `@theme`) |
| SEO title/description, email, socials, nav, **stats** | `src/lib/site.ts` |
| Services (home list, /services page, footer) | `src/data/services.ts` |
| Portfolio / case studies | `src/data/projects.ts` |
| Testimonials | `src/data/testimonials.ts` |
| Technology constellation | `src/data/technologies.ts` |
| Process steps, FAQ, values, marquee | `src/data/content.ts` |
| Logo (SVG, traced from the supplied artwork) | `src/components/brand/logo.tsx` |

## Placeholders to replace before launch

- **Projects** are sample case studies. To use real screenshots, put images in `public/projects/` and set `image: "/projects/your-file.webp"`. Missing or broken images fall back to the built-in artwork automatically.
- **Testimonials** are sample copy (they show a small "Sample" tag). Replace them and set `isPlaceholder: false`.
- **Stats** (50+, 20+, 5+, 24/7) live in `src/lib/site.ts`.
- **Contact form** validates on the client but does not send anything yet. Wire it up in `submitInquiry()` in `src/components/sections/contact-form.tsx`.
- **Privacy / Terms** pages contain placeholder text.
- Set `NEXT_PUBLIC_SITE_URL` to the production domain so the canonical URLs, sitemap and OG tags are correct.

## Structure

```
src/app/              routes: /, /services, /work, /work/[slug], /about, /contact, 404, sitemap, robots, OG image
src/components/layout navbar, mobile menu, footer, intro loader, providers
src/components/sections page sections
src/components/ui     reusable primitives: Reveal, TextReveal, MagneticButton, SpotlightCard, Marquee, Cursor…
src/components/visuals CSS/SVG artwork (hero system, service + project visuals)
```

Motion respects `prefers-reduced-motion`. The custom cursor and pointer effects turn on only for fine pointers.
