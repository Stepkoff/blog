import { memo } from 'react';
import { cn } from '@/shared/lib/cn';
import { Theme, useTheme } from '@/app/providers/ThemeProvider';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import s from './ThemeSwitch.module.scss';

interface ThemeSwitchProps {
  className?: string
}

export const ThemeSwitch = memo(({ className }:ThemeSwitchProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={toggleTheme}
            className={cn(s.ThemeSwitch, {}, [className])}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
});
