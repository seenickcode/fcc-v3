module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primaryLight: "#ADA5FF", // light purple
        primaryMedium: "#4E44AF", // medium purple
        primaryDark: "#1A1640", // dark purple
      },
      fontFamily: {
        // ZenDots: ["Zen Dots"],
        sans: ["Helvetica", "Arial", "sans-serif"],
        serif: ["ui-serif", "Georgia"],
        mono: ["Courier New"],
      },
    },
  },
};
