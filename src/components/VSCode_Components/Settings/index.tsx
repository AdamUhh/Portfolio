"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { themeList } from "utils/lists/themeList";
import ThemeOption from "./ThemeInfo";

export default function Settings() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  function handleThemeChange(_theme: string) {
    setTheme(_theme);
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="p-5 font-jetBrains">
      <h2 className="mb-5 border-b border-b-main-FOREGROUND/30 text-2xl">
        Manage Themes
      </h2>
      <div className="mx-4 flex flex-wrap items-center gap-10">
        {themeList.map((_theme, index) => (
          <ThemeOption
            key={index}
            isActive={_theme.name === theme}
            theme={_theme}
            onClick={() => handleThemeChange(_theme.name)}
          />
        ))}
      </div>
    </div>
  );
}
