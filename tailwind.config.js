module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}",
  ],
  // plugins: [require("@themesberg/flowbite/plugin")],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#4E44AF", // medium purple
        secondary: "#1A1640", // dark purple
        accent: "#ADA5FF", // light purple
      },
    },
  },
};
