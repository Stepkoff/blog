import { createContext } from 'react';

export enum Theme {
  DEFAULT = 'default_theme',
  DARK = 'dark_theme',
}
export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void
 }

export const ThemeContext = createContext<ThemeContextProps>({ theme: Theme.DEFAULT });

export const LOCAL_STORAGE_THEME_KEY = 'theme';
