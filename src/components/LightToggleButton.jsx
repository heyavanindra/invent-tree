"use client";

import * as React from "react";
import { useTheme } from "next-themes";

export function ModeToggle({ className }) {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";
  const handleToggle = () => {
      console.log(theme)
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <div>
      <label className="inline-flex cursor-pointer items-center">
        <input
          type="checkbox"
          className="peer sr-only"
          checked={isDark}
          onChange={handleToggle}
        />
        <div className="peer relative h-6 w-11 rounded-full bg-[#e995b7] peer-checked:bg-persian-green-600 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:bg-white after:transition-all peer-checked:after:translate-x-full"></div>
        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          {theme === "dark" ? "Dark Mode" : "Light Mode"}
        </span>
      </label>
    </div>
  );
}
