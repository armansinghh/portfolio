# 🌐 armansingh.me — Personal Portfolio

A modern, performant personal portfolio built with **Next.js 16**, **TypeScript**, and **Tailwind CSS v4**. Features real-time activity feeds, a blog powered by Notion, live Discord/Spotify integrations, and polished UI touches like a custom cursor and a pixel-art cat companion.

---

## ✨ Features

- **Live Activity Feed** — Real-time Spotify now-playing, Discord presence, GitHub commits, location/time, reading/watching status
- **Blog via Notion** — Posts fetched from a Notion database and rendered with `react-notion-x`
- **Projects Showcase** — Featured project with modal details, status badges, and tech tags
- **Meowl 🐱** — An interactive pixel-art cat that follows your cursor (toggleable)
- **Custom Cursor** — Gooey multi-dot cursor effect for desktop (pointer-fine devices)
- **Dark / Light Theme** — System-aware, flash-free theme switching via `next-themes`
- **Contact Form** — Discord webhook integration with honeypot spam protection and rate limiting
- **SEO Ready** — Open Graph, Twitter Card, sitemap, robots.txt, canonical URLs, JSON-LD breadcrumbs
- **GitHub Contribution Graph** — Pac-Man contribution graph rendered from GitHub Actions output
- **Responsive & Accessible** — Mobile-first layout, semantic HTML, `sr-only` labels

---

## 🛠 Tech Stack

| Category       | Tech                                                  |
|----------------|-------------------------------------------------------|
| Framework      | [Next.js 16](https://nextjs.org) (App Router)         |
| Language       | TypeScript                                            |
| Styling        | Tailwind CSS v4, shadcn/ui                            |
| Animations     | Framer Motion, tw-animate-css                         |
| Blog CMS       | Notion API + `react-notion-x`                         |
| Data Fetching  | SWR                                                   |
| Forms          | react-hook-form + Zod                                 |
| Icons          | Lucide React, React Icons                             |
| Deployment     | [Vercel](https://vercel.com)                          |

---

## 📁 Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── page.tsx          # Home
│   ├── about/
│   ├── projects/
│   ├── blog/
│   └── api/              # Route handlers (commits, discord, send-message)
├── components/
│   ├── activities/       # Spotify, Discord, GitHub, Location widgets
│   ├── blog/             # Notion renderer
│   ├── layout/           # Navbar, Footer, ThemeSwitch
│   ├── Meowl/            # Pixel-art cat component
│   ├── modals/           # NowPlaying, Discord, Commit modals
│   ├── projects/         # ProjectGrid, ProjectCard, ProjectModal
│   ├── providers/        # Theme, GlobalModal, Tooltip providers
│   ├── stats/            # TechStack grid
│   └── ui/               # shadcn/ui primitives + CustomCursor
├── data/
│   ├── activity.ts       # Static activity data (reading, watching, status)
│   ├── metadata.ts       # Site-wide SEO metadata
│   ├── projects.ts       # Projects array
│   └── techstack.tsx     # Tech stack with icons
├── lib/
│   ├── notion.ts         # Notion API helpers
│   ├── ProjectStatus.ts  # Status badge config
│   └── utils.ts          # cn() helper
└── styles/
    └── globals.css       # Global styles, CSS variables, Notion overrides
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `>= 20.9.0`
- A [Notion](https://notion.so) account with a database for blog posts
- Optional: GitHub token, Discord webhook URL

### 1. Clone the repo

```bash
git clone https://github.com/armansinghh/portfolio.git
cd portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root:

```env
# Notion
NOTION_API_KEY=your_notion_integration_token
NOTION_BLOG_DATABASE_ID=your_notion_database_id

# GitHub (optional — increases rate limit)
GITHUB_TOKEN=your_github_pat

# Discord webhook for contact form
DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/...
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📝 Notion Blog Setup

Your Notion database should have these properties:

| Property      | Type          | Notes                          |
|---------------|---------------|--------------------------------|
| `Title`       | Title         | Post title                     |
| `Slug`        | Rich Text     | URL slug (e.g. `my-first-post`)|
| `Description` | Rich Text     | Short summary                  |
| `Date`        | Date          | Publish date                   |
| `Tags`        | Multi-select  | Post tags                      |
| `Published`   | Checkbox      | Must be `true` to show         |
| `Author`      | People        | Author name                    |

---

## 🔧 Customization

- **Update your info** → `src/data/activity.ts`, `src/data/metadata.ts`
- **Add/edit projects** → `src/data/projects.ts`
- **Change tech stack** → `src/data/techstack.tsx`
- **Disable Meowl** → toggle via the Activity Feed card or set `meowl-enabled` to `false` in localStorage
- **Theme colors** → CSS variables in `src/styles/globals.css`

---

## 🤝 Contributing

Feel free to open issues or PRs for bugs and improvements. This is a personal portfolio, so large feature PRs may not be merged, but fixes and suggestions are always welcome.

---

## 🌟 Inspiration & Credits
 
This portfolio's overall design and aesthetic was inspired by the work of [Manpreet Singh](https://github.com/MannuVilasara) — thank you for putting your work out there for the community. 

---

## 📄 License

This project is open source under the [MIT License](LICENSE). Feel free to use it as inspiration for your own portfolio — just please don't deploy it as-is with my personal info. 😄

---

<p align="center">Built with ❤️ by <a href="https://armansingh.me">Arman Singh</a></p>