import { useContext, useEffect } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface useThemeResult {
  toggleTheme: () => void
  theme: Theme
}

export const useTheme = ():useThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Theme.DEFAULT ? Theme.DARK : Theme.DEFAULT;
        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    useEffect(() => {
        document.body.classList.add(theme as string);
        return () => {
            document.body.classList.remove(theme as string);
        };
    }, [theme]);

    return {
        theme: theme || Theme.DEFAULT,
        toggleTheme,
    };
};
