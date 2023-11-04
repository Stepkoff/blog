import React, { ButtonHTMLAttributes, memo } from 'react';
import { cn } from '@/shared/lib/cn';
import s from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    children: React.ReactNode
    theme?: ButtonTheme
    square?: boolean
    size?: ButtonSize
    disabled?: boolean
}

export const Button = memo(({
    children, className, theme = ButtonTheme.OUTLINE, square, size = ButtonSize.M, disabled, ...rest
}:ButtonProps) => (
    <button
        disabled={disabled}
        type="button"
        className={cn(s.Button, {
            [s.square]: square,
            [s.disabled]: disabled,
        }, [className, s[theme], s[size]])}
        {...rest}
    >
        {children}
    </button>
));
