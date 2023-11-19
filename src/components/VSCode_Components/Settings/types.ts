import { I_Theme } from "utils/lists/themeList";

interface ThemeOptionProps {
  isActive: boolean;
  theme: I_Theme;
  onClick: () => void;
}

export type { ThemeOptionProps };
