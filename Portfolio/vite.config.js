import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcss({
          content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
          theme: {
            extend: {},
          },
          darkMode: "class", // Enables dark mode support
        }),
        require('autoprefixer'),
      ],
    },
  },
});
