This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.


## Deployment (Static / GitHub Pages)

This project is configured for static export, making it suitable for hosting on GitHub Pages or any static host.

To build the static version:

1. Run the build command:
```bash
npm run build
```

This will generate an `out` directory containing the static HTML/CSS/JS files.
**Note:** The build script automatically creates a `.nojekyll` file in the `out` directory. This is required for GitHub Pages to correctly serve files starting with `_` (like Next.js's `_next` folder).

2. To deploy to GitHub Pages:
   - Ensure the `out` directory contents are what gets served.
   - If using a manual workflow, you can push the contents of `out` to a `gh-pages` branch.
   - Or, simply configure GitHub Pages in your repository settings to serve from the root (or docs) if you commit the build artifacts (not recommended for main branch, but common for quick static sites).
   
   **Alternatively**, you can use the automated script:
   ```bash
   ./scripts/deploy-gh-pages.sh
   ```
   This script handles building, committing to a temporary branch, and force pushing to `gh-pages` for you.

