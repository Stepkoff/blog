import React, {
    InputHTMLAttributes, useEffect, useRef, useState, memo,
} from 'react';
import { cn } from '@/shared/lib/cn';
import s from './input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string,
    value?: string,
    onChange?: (value:string) => void
    autofocus?: boolean
}

export const Input = memo((props:InputProps) => {
    const {
        value,
        onChange,
        className,
        type = 'text',
        placeholder,
        autofocus,
        ...rest
    } = props;

    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            inputRef?.current?.focus();
        }
    }, [autofocus]);

    const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onSelect = (e: any) => {
        setCaretPosition(e?.target?.selectionStart || 0);
    };

    return (
        <div
            className={cn(s.inputWrapper, {}, [className])}
        >
            {placeholder && (
                <div className={s.placeholder}>
                    {`${placeholder}>`}
                </div>
            )}
            <div className={s.caretWrapper}>
                <input
                    ref={inputRef}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    className={s.input}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    onSelect={onSelect}
                    {...rest}
                />
                {isFocused && (
                    <span style={{ left: `${caretPosition * 8.8}px` }} className={s.caret} />
                )}
            </div>
        </div>
    );
});
