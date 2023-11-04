import { memo, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { cn } from '@/shared/lib/cn';
import s from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red'
}

interface AppLinkProps extends LinkProps{
  className?: string
  children: ReactNode
  theme?: AppLinkTheme
}

export const AppLink = memo(({
    children, to, className, theme = AppLinkTheme.PRIMARY, ...restProps
}:AppLinkProps) => (
    <Link
        to={to}
        className={cn(s.AppLink, {}, [className, s[theme]])}
        {...restProps}
    >
        {children}
    </Link>
));
