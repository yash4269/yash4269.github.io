# Portfolio

Personal portfolio website built with Next.js, shadcn/ui, and Magic UI.

## About

Hi, I'm **Saurabh Gupta** — Co-Founder @Heisenbug building agentic compliance solutions. I'm obsessed with systems that work in the real world. At IIT Bombay I have worked on UAVs, cryptography, robots, and now a startup.

## Features

- **Zero-config deployment** — Works on GitHub Pages, Vercel, Netlify, or any static host
- **Single data file** — All personal content in `src/data/resume.ts`
- **TypeScript** — Fully typed data structure
- **Responsive** — Optimized for desktop and mobile
- **Blog support** — MDX-based blog with content collections
- **OG images** — Auto-generated Open Graph images at build time
- **Dark mode** — System-aware theme switching

## Quick Start

```bash
# Clone the repository
git clone https://github.com/saurabh4269/saurabh4269.github.io
cd saurabh4269.github.io

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

## Configuration

### 1. Edit Your Data

Update `src/data/resume.ts` with your personal information:

```typescript
export const resume: ResumeData = {
  personal: {
    name: "Your Name",
    initials: "YN",
    description: "Your tagline",
    summary: "Your bio (supports markdown links)",
    avatar: "/me.png",
    location: "Your Location",
    locationUrl: "https://...",
  },
  // ... work, education, projects, skills, etc.
};
```

### 2. Environment Variables (Optional)

For deployment-specific settings, create a `.env` file:

```bash
# Site URL (used for SEO metadata and OG images)
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# Base path for GitHub Pages deployment (empty for root)
NEXT_PUBLIC_BASE_PATH=/repo-name
```

Copy `.env.example` as a template:

```bash
cp .env.example .env
```

### 3. Add Your Assets

Place your images in the `public/` folder:
- `public/me.png` — Profile photo
- `public/*.svg` or `public/*.png` — Company/organization logos

## Deployment

### GitHub Pages

1. Set in your repository settings:
   - **Pages > Source**: GitHub Actions

2. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v2
        with:
          version: 9
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: pnpm
      - run: pnpm install
      - run: pnpm build
        env:
          NEXT_PUBLIC_SITE_URL: https://saurabh4269.github.io
          NEXT_PUBLIC_BASE_PATH: /portfolio
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

### Vercel

1. Import your repository to Vercel
2. Add environment variables:
   - `NEXT_PUBLIC_SITE_URL` = your deployment URL
   - `NEXT_PUBLIC_BASE_PATH` = (leave empty for production)

### Netlify

1. Connect your repository to Netlify
2. Build settings:
   - **Build command**: `pnpm build`
   - **Publish directory**: `out`
3. Add environment variables in site settings

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── blog/[slug]/       # Blog posts
│   └── layout.tsx         # Root layout with fonts/SEO
├── components/
│   ├── navbar.tsx         # Bottom navigation dock
│   ├── project-card.tsx   # Project display card
│   └── section/           # Page sections
│       ├── work-section.tsx
│       ├── projects-section.tsx
│       ├── contact-section.tsx
│       └── ...
├── data/
│   └── resume.ts          # All personal content
└── lib/
    ├── icons-map.tsx     # Icon name → component mapping
    ├── og.tsx             # OG image component
    └── basePath.ts        # Base path utility
```

## Tech Stack

- **Next.js 16** with App Router and static export
- **TypeScript** for type safety
- **Tailwind CSS** + **shadcn/ui** for styling
- **Magic UI** for animations
- **content-collections** for MDX blog
- **satori** + **sharp** for OG image generation

## Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

## License

MIT License — feel free to use and modify for your own portfolio.
