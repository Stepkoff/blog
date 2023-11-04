import React, { memo } from 'react';
import { cn } from '@/shared/lib/cn';
import s from './text.module.scss';

export enum TextTheme {
    DEFAULT= 'default',
    ERROR = 'error',
}

interface TextProps {
    className?: string
    title?: string
    text?: string
    theme?: TextTheme
}

export const Text = memo(({
    className,
    text,
    title,
    theme = TextTheme.DEFAULT,
}:TextProps) => (
    <div className={cn(s.textWrap, {}, [className, s[theme]])}>
        {title && <h6 className={s.title}>{title}</h6>}
        {text && <p className={s.text}>{text}</p>}
    </div>
));
