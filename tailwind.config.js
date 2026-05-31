/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0a0f1e',
        'cyan-400': '#00ffe7',
        'cyan-500': '#00e5d1',
      },
      fontFamily: {
        space: ['"Space Grotesk"', 'sans-serif'],
        fira: ['"Fira Code"', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      }
    },
  },
  plugins: [],
}
