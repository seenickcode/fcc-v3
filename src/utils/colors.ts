const primaryLight =
  "bg-primaryLight text-primaryMedium dark:bg-primaryDark dark:text-primaryLight";
const primaryDark =
  "bg-white text-primaryDark dark:bg-primaryLight dark:text-primaryMedium";
const primaryMedium =
  "bg-primaryMedium text-white dark:bg-primaryDark dark:text-primaryLight";
const tertiary =
  "bg-primaryDark text-primaryMedium dark:bg-primaryDark dark:text-primaryLight";

const base =
  "bg-white text-primaryDark dark:bg-primaryDark dark:text-primaryLight";

export function themeColors(themeName: string): string {
  return themeName == "base"
    ? base
    : themeName == "primaryLight"
    ? primaryLight
    : themeName == "primaryDark"
    ? primaryDark
    : themeName == "primaryMedium"
    ? primaryMedium
    : themeName == "tertiary"
    ? tertiary
    : "";
}
