/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1C1C1C',
        'secondary': '#FF6000',
        'bggrey':'#EEEEEE',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        titillium: ['Titillium Web','sans-serif']
      }
    },
  },
  plugins: [],
};
