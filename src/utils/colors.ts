const primary = "bg-primary text-accent dark:bg-secondary dark:text-primary";
const secondary = "bg-white text-secondary dark:bg-primary dark:text-accent";
const accent = "bg-accent text-white dark:bg-secondary dark:text-primary";
const tertiary = "bg-secondary text-accent dark:bg-secondary dark:text-primary";

const base = "bg-white text-secondary dark:bg-secondary dark:text-primary";

export function themeColors(themeName: string): string {
  return themeName == "base"
    ? base
    : themeName == "primary"
    ? primary
    : themeName == "secondary"
    ? secondary
    : themeName == "accent"
    ? accent
    : themeName == "tertiary"
    ? tertiary
    : "";
}
