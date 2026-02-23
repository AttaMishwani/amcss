# Al Mansoor School Website

Modern multi-page school website built with React + Vite, featuring admissions, events, careers, contact flow, theme toggle, and responsive UI.

## Live Demo

- GitHub Pages: `https://attamishwani.github.io/amcss/`

## Website Preview

### Full Homepage Screenshot
![Al Mansoor School Homepage](public/readme/website-home-preview.png)

### About / Home Style
![About Page Header](src/assets/headers/about-header.jfif)

### Admissions
![Admissions Page Header](src/assets/headers/admissions-header.jfif)

### Events
![Events Page Header](src/assets/headers/events-header.jfif)

### Careers
![Careers Page Header](src/assets/headers/careers-header.jfif)

### Contact
![Contact Page Header](src/assets/headers/contact-header.jfif)

## Features

- Responsive pages: Home, About, Admissions, Events, Event Detail, Careers, Contact
- Light/Dark mode toggle
- Animated sections (GSAP + ScrollTrigger)
- Reusable UI components (cards, buttons, badges, timeline, accordion, modal, toast)
- School-focused media content with local and remote fallbacks
- GitHub Pages-ready deployment setup

## Tech Stack

- React 19
- Vite 7
- React Router 7
- Tailwind CSS 3
- GSAP
- ESLint

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview
```

## Deploy To GitHub Pages

This project is configured with:

- `HashRouter` for static hosting route support
- Vite `base: './'`
- Deploy scripts:
  - `predeploy`: `npm run build`
  - `deploy`: `gh-pages -d dist`

Run:

```bash
npm run deploy
```

## Important First-Time Setup

You must run deploy from a git repository that has an `origin` remote.

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-github-username>/<your-repo-name>.git
git push -u origin main
npm run deploy
```

Then in GitHub:

1. Open repository `Settings`
2. Open `Pages`
3. Source: `Deploy from a branch`
4. Branch: `gh-pages` / root

## Scripts

- `npm run dev` - Start dev server
- `npm run build` - Production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Lint codebase
- `npm run deploy` - Build and publish `dist` to `gh-pages`
