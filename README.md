<div align="center">

# 🐼 Varun Pandey — Portfolio

**`@GlitchPanda`** · Builder · Gen AI Developer · Product Thinker

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-varunpandey.dev-6c63ff?style=for-the-badge)](https://varunpandey.dev)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000?style=for-the-badge&logo=vercel)](https://vercel.com)

*Building at the intersection of tech and management.*

</div>

---

## ✨ What's This?

This is my personal portfolio — not a template, but a handcrafted space that represents who I am as a developer, builder, and thinker. It showcases my projects, experiences, skills, and the journey from competitive programming to building real-world AI products.

## 🎮 Features

- **🐼 Dual Persona Mode** — Light theme shows `@Gen AI Developer`, dark theme reveals `@GlitchPanda` with a pixel-dissolve animation
- **🧩 Pixel Image Transitions** — Profile avatar loads with a grid-based pixel reassembly effect that transitions from grayscale to color
- **🌗 Theme-Aware Design** — Separate avatars, gamer tags, and color palettes for light and dark modes
- **📝 Blog / Case Studies** — MDX-powered blog with syntax highlighting, GFM support, and rich typography
- **📱 Fully Responsive** — Clean layout from mobile to ultrawide, with a sticky sidebar navigation on desktop
- **⚡ Performance First** — Built on Next.js 16 with React 19, optimized for Vercel edge deployment
- **🎨 Custom UI Components** — PixelImage, PixelText, PandaMascot, and more — no generic component library UI

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript 5 |
| **Styling** | TailwindCSS v4 + custom CSS |
| **UI Components** | shadcn/ui + Magic UI + custom |
| **Animation** | Framer Motion (`motion`) |
| **Content** | MDX via Content Collections |
| **Icons** | Lucide React, Radix Icons, Tech Stack Icons |
| **Theming** | next-themes |
| **Deployment** | Vercel |

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/               # Next.js App Router pages & API routes
│   │   ├── page.tsx        # Main portfolio page
│   │   ├── blog/           # Case studies / blog section
│   │   ├── api/            # Server routes (contact form, etc.)
│   │   └── globals.css     # Design tokens & base styles
│   ├── components/
│   │   ├── sidebar.tsx     # Profile sidebar with pixel animations
│   │   ├── navbar.tsx      # Top navigation bar
│   │   ├── panda-mascot.tsx # 🐼 The GlitchPanda mascot
│   │   ├── ui/             # Reusable UI primitives
│   │   │   ├── pixel-image.tsx  # Grid-based image reveal animation
│   │   │   └── pixel-text.tsx   # Grid-based text reveal animation
│   │   └── section/        # Page section components
│   ├── data/
│   │   └── resume.tsx      # ← All personal data lives here
│   └── lib/
│       └── utils.ts        # Utility functions
├── content/                # MDX blog posts
├── public/images/          # Static assets
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.0.0
- **npm** or **pnpm**

### Setup

```bash
# 1. Clone the repo
git clone https://github.com/GlitchPanda-varun/portfolio.git

# 2. Navigate into the project
cd portfolio

# 3. Install dependencies
npm install
# or
pnpm install

# 4. Start the dev server
npm run dev
# or
pnpm dev
```

The site will be live at **http://localhost:3000**.

### Configuration

All personal data is controlled from a single file:

**[`src/data/resume.tsx`](./src/data/resume.tsx)**

This includes: name, bio, gamer tags (light & dark), skills, projects, education, work experience, hackathons, social links, and more. Update this file to make the portfolio your own.

## 🐼 The GlitchPanda Identity

The portfolio has a dual-identity system:

| Theme | Gamer Tag | Avatar | Vibe |
|-------|-----------|--------|------|
| ☀️ Light | `@Gen AI Developer` | `me2.png` | Professional, clean |
| 🌙 Dark | `@GlitchPanda` | `me.png` | Gamer, creative, hacker |

When you toggle the theme, the `@` tag dissolves into pixels and reassembles with the new identity — a custom `PixelText` component that mirrors the `PixelImage` avatar animation.

## 📬 Contact

- **Email**: varun.pandey.bly@gmail.com
- **GitHub**: [@GlitchPanda-varun](https://github.com/GlitchPanda-varun)
- **LinkedIn**: [varun-pandey2004](https://linkedin.com/in/varun-pandey2004)
- **X (Twitter)**: [@Varun__Pandey_](https://x.com/Varun__Pandey_)
- **Instagram**: [@varun_pandey_27](https://www.instagram.com/varun_pandey_27/)

## 📜 License

Licensed under the [MIT License](./LICENSE).

---

<div align="center">

**Built with ☕ and late-night grind by Varun Pandey**

*"Not just how to build, but what to build and why."*

</div>
