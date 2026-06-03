# CV Website

Personal CV / portfolio site for **Vladyslav Atamanyuk**, built as a learning
project for Vue 3.

## Stack

- **Vue 3** with the Composition API and `<script setup>`
- **TypeScript**
- **Vite** for dev server and builds
- **Tailwind CSS v3** for styling (Inter font via Google Fonts)
- **@lucide/vue** for icons, with inline SVG for brand marks
- Single shared `IntersectionObserver` via a custom `v-reveal` directive
  for scroll-triggered fade-ins (respects `prefers-reduced-motion`)
- Deployed to **GitHub Pages** via the official Pages Actions

No router, no state library, no UI framework — kept deliberately small.

## Project layout

```
src/
├── App.vue                     # Composes the nav, sections, and footer
├── main.ts                     # Boots the Vue app and registers v-reveal
├── style.css                   # Tailwind imports + reveal animation styles
├── data/cv.ts                  # ALL content (edit only this file)
├── types/cv.ts                 # CV / Job / SkillGroup / Education interfaces
├── components/
│   ├── TheNav.vue              # Sticky top nav
│   ├── HeroSection.vue
│   ├── AboutSection.vue
│   ├── ExperienceSection.vue   # Vertical timeline
│   ├── ExperienceItem.vue
│   ├── SkillsSection.vue
│   ├── EducationSection.vue
│   ├── ContactSection.vue
│   ├── TheFooter.vue
│   └── icons/                  # Inline brand-icon SVGs (Lucide dropped these)
│       ├── IconGithub.vue
│       └── IconLinkedin.vue
└── composables/
    └── vReveal.ts              # IntersectionObserver directive
```

## Local development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production bundle to dist/
npm run preview  # serve the production build locally
```

To update content (job history, skills, links, etc.), edit
[`src/data/cv.ts`](src/data/cv.ts). Types live in
[`src/types/cv.ts`](src/types/cv.ts).

## Deployment (GitHub Pages)

The workflow at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
runs on every push to `main` and deploys via the official
`actions/upload-pages-artifact` + `actions/deploy-pages` actions — no tokens or
third-party actions required.

One-time setup, on GitHub:

1. **Settings → Pages → Build and deployment → Source**: select **GitHub Actions**.
2. Push to `main`. The workflow will build the site and publish it at
   `https://<user>.github.io/<repo-name>/`.

The Vite `base` is set in [`vite.config.ts`](vite.config.ts) for production builds
(`/CV-Website/`). If you rename the repo or add a custom domain, change the
build-time base accordingly (custom domain → `'/'`).
