import { createContext, useState, useEffect } from 'react';
import {
  ThemeContextInterface,
  ThemeProviderProps,
} from '../../@types/themeTypes';
const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('color-theme');
    if (typeof storedPrefs === 'string') {
      return storedPrefs;
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
    if (userMedia.matches) {
      return 'dark';
    }
  }

  // If you want to use dark theme as the default, return 'dark' instead
  return 'light';
};

export const ThemeContext = createContext<ThemeContextInterface | null>(null);

export const ThemeProvider = ({
  initialTheme,
  children,
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState(getInitialTheme);

  const rawSetTheme = (rawTheme: string) => {
    const root = window.document.documentElement;
    const isDark = rawTheme === 'dark';
    //TODO add getting the theme from localStorage if it exists else it's dark! and set it when it change
    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(rawTheme);

    localStorage.setItem('color-theme', rawTheme);
  };

  if (initialTheme) {
    rawSetTheme(initialTheme);
  }

  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  const themeValueContext: ThemeContextInterface = {
    theme,
    setTheme,
  };
  return (
    <ThemeContext.Provider value={themeValueContext}>
      {children}
    </ThemeContext.Provider>
  );
};
