# Intelligent Systems — Personal Portfolio

A deploy-ready React + Vite portfolio for an AI Engineer / Full-Stack Developer / Cybersecurity profile.

## Architecture

Inspired by Figma SDS: design tokens → reusable primitives → page compositions → routes.

- **UI:** React + TypeScript
- **Build:** Vite
- **Routing:** React Router
- **Design system:** SDS-inspired tokens and reusable cards/layout patterns
- **Code Connect:** intended component mapping surface for Figma
- **Base44:** optional analytics/backend integration via `@base44/sdk`; the site remains deployable without Base44
- **Architecture:** content is data-driven in `src/data/content.ts`; pages consume reusable components

## Routes

- `/`
- `/ai-engineering`
- `/full-stack`
- `/cybersecurity`
- `/automation`
- `/blog`
- `/blog/:slug`

## Local development

```bash
npm install
npm run dev
```

## Production

```bash
npm run build
npm run preview
```

Works on Vercel, Netlify, Cloudflare Pages, GitHub Pages (with SPA fallback configuration), Render static hosting, or any static host.

## Optional Base44

Set `VITE_BASE44_APP_ID` to enable optional analytics. Without it, the portfolio does not make Base44 requests.

## Figma / SDS

The implementation follows the concepts demonstrated by Figma's Simple Design System: reusable primitives, compositions, responsive layout and Code Connect-friendly component boundaries.

Reference: https://github.com/figma/sds
