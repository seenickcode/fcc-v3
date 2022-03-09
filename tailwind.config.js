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
        primary: "#ADA5FF", // light purple
        secondary: "#1A1640", // dark purple
        accent: "#4E44AF", // medium purple
      },
    },
  },
};
