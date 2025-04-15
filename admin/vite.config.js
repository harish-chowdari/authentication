import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: 'var(--color-bg-primary)',
          secondary: 'var(--color-bg-secondary)',
        },
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
        },
        accent: 'var(--color-accent)',
        hover: 'var(--color-hover)',
        border: 'var(--color-border)',
        link: 'var(--color-link)',
        linkHover: 'var(--color-link-hover)',
        button: 'var(--color-button)',
        buttonHover: 'var(--color-button-hover)',
      },
    },
  },
  plugins: [
    tailwindcss(),
  ],
})