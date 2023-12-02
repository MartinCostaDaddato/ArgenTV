/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}