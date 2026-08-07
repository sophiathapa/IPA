# Unlimited Release IPA — Landing Page

A scroll-driven, animated product landing page for a craft beer brand, built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **Framer Motion** (`motion/react`). Inspired by the visual storytelling style of brand sites like Lagunitas IPA.

## Features

- 🎞️ **Scroll-synced hero animation** — a beer bottle image tracks scroll position across the hero, Details, Taste, and Options sections using `useScroll` + `useTransform`.
- 🛒 **Buy Now modal** — clicking "Buy Now" opens a centered, blurred-backdrop modal showing all product formats (tap, bottles, cans) in a horizontally scrollable row, with per-item quantity controls and a live-calculated total.
- 📱 **Responsive layout** — mobile-first Tailwind breakpoints throughout, with a collapsible sidebar and adaptive image sizing.
- 🎨 **Custom typography** — mixes a display font (Anton-style) for headlines/stats with a script font (Caveat-style) for accent text.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | [Framer Motion](https://motion.dev/) (`motion/react`) |
| UI Primitives | shadcn/ui (`Button`, and optionally `Dialog`) |
| Icons | lucide-react |


## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

```bash
git clone <https://github.com/sophiathapa/IPA.git>
cd <project-folder>
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```
