/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0b0b0b",
        foreground: "#e5e5e5",
        muted: "#9ca3af",
        border: "#262626",
      },
    },
  },
  plugins: [],
}
