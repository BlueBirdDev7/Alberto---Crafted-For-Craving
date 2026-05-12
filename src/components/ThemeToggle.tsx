import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";
  return (
    <button
      onClick={toggle}
      aria-label="Toggle color theme"
      className={`group relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-accent transition-all hover:bg-accent hover:text-accent-foreground ${className}`}
    >
      <Sun className={`h-4 w-4 transition-all ${isDark ? "scale-0 -rotate-90" : "scale-100 rotate-0"} absolute`} />
      <Moon className={`h-4 w-4 transition-all ${isDark ? "scale-100 rotate-0" : "scale-0 rotate-90"} absolute`} />
    </button>
  );
}
