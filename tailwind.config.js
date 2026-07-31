/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: "#080808",
        "background-secondary": "#121212",
        "text-primary": "#f4f4f4",
        "text-secondary": "#707070",
      },
      fontFamily: {
        sans: ["SpaceGrotesk_400Regular", "Space Grotesk", "system-ui", "sans-serif"],
        "sans-medium": ["SpaceGrotesk_500Medium", "Space Grotesk", "system-ui", "sans-serif"],
        "sans-semibold": ["SpaceGrotesk_600SemiBold", "Space Grotesk", "system-ui", "sans-serif"],
        "sans-bold": ["SpaceGrotesk_700Bold", "Space Grotesk", "system-ui", "sans-serif"],
        serif: ["PlayfairDisplay_400Regular", "Playfair Display", "Georgia", "serif"],
        "serif-bold": ["PlayfairDisplay_700Bold", "Playfair Display", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
