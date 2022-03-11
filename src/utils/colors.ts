const primary = "bg-primary text-black dark:bg-secondary dark:text-primary";
const secondary = "bg-white text-black dark:bg-primary dark:text-white";
const accent = "bg-accent text-white dark:bg-secondary dark:text-primary";
const tertiary = "bg-secondary text-white dark:bg-secondary dark:text-primary";

export function themeColors(themeName: string): string {
  return themeName == "primary"
    ? primary
    : themeName == "secondary"
    ? secondary
    : themeName == "accent"
    ? accent
    : themeName == "tertiary"
    ? tertiary
    : "";
}
