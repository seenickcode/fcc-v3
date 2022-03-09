const primary = "bg-primary text-black dark:bg-secondary dark:text-primary";
const secondary = "bg-white text-black dark:bg-secondary dark:text-primary";
const accent = "bg-accent text-white dark:bg-white dark:text-black";

export function themeColors(themeName: string): string {
  return themeName == "primary"
    ? primary
    : themeName == "secondary"
    ? secondary
    : themeName == "accent"
    ? accent
    : "";
}
