# Stephen Moy - Personal Website

Personal website showcasing technical projects, skills, and professional journey.

## Tech Stack

- **Astro** - Static site generator with React islands
- **React** - Interactive components
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **TypeScript** - Type safety

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
  components/
    animations/     # Animation components (FadeIn, ScrollReveal, etc.)
    layout/         # Header, Footer, Navigation
    sections/       # Page sections (Hero, Timeline, etc.)
    ui/             # Base UI components (Card, Button, Tag, etc.)
  data/             # JSON data files (projects, skills, timeline)
  layouts/          # Astro layouts
  pages/            # Astro pages (file-based routing)
  styles/           # Global styles and tokens
```

## Features

- **Home** - Hero section, stats, and tech stack preview
- **About** - Professional timeline and story
- **Skills** - Filterable capability matrix
- **Projects** - Project showcase with detail pages
  - VidCutAI
  - Pro Transcribe
  - Behavior Data Tracker
  - Homelab Infrastructure
- **Process** - Problem-solving methodology
- **Lab** - Experiments and ongoing work
- **Personal** - Non-work interests
- **Contact** - Contact form and direct links

## Design System

The site uses a dark theme with accent colors by domain:
- **AI/Media Tools**: Electric blue
- **Infrastructure**: Cyan/Teal
- **UX/Product**: Purple
- **Legacy/Education**: Amber
- **Personal**: Soft green

## Content Management

Content is managed through JSON files in `src/data/`:
- `projects.json` - Project information
- `skills.json` - Skills and capabilities
- `timeline.json` - Professional timeline
- `stack.json` - Tech stack items

## Development

The site uses Astro's file-based routing. Pages are in `src/pages/` and automatically generate routes.

React components are used for interactive elements and are marked with `client:load` in Astro files.

## Deployment

Build the site:

```bash
npm run build
```

The `dist/` directory contains the static site ready for deployment to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

## License

Private project - All rights reserved

