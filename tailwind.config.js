module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}",
  ],
  plugins: [require("@themesberg/flowbite/plugin")],
  darkMode: "class",
};
