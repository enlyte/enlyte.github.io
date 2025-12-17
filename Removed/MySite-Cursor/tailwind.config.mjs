/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Base colors
        bg: {
          primary: '#0a0a0a',
          secondary: '#111111',
          surface: '#1a1a1a',
          'surface-light': '#252525',
        },
        text: {
          primary: '#f5f5f5',
          secondary: '#888888',
          muted: '#555555',
        },
        // Accent colors by domain
        accent: {
          'ai-media': '#3b82f6', // Electric blue
          'ai-media-light': '#60a5fa',
          infrastructure: '#06b6d4', // Cyan/Teal
          'infrastructure-light': '#22d3ee',
          'ux-product': '#8b5cf6', // Purple
          'ux-product-light': '#a78bfa',
          legacy: '#f59e0b', // Amber
          'legacy-light': '#fbbf24',
          personal: '#10b981', // Soft green
          'personal-light': '#34d399',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        'hero': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'section': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'subheading': ['1.5rem', { lineHeight: '1.3' }],
      },
      spacing: {
        'section': '80px',
        'section-lg': '120px',
      },
      borderRadius: {
        'card': '8px',
        'card-lg': '12px',
      },
      maxWidth: {
        'container': '1280px',
        'content': '768px',
        'wide': '1536px',
      },
    },
  },
  plugins: [],
};

