import React, {
    MutableRefObject,
    ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { cn } from '@/shared/lib/cn';
import s from './Modal.module.scss';
import { Portal } from '@/shared/ui/Portal';

type Props = {
    children?: ReactNode
    className?: string
    isOpen: boolean
    onClose?: () => void
    lazy?: boolean
};

const ANIMATION_DELAY = 300;

export const Modal = (props: Props) => {
    const {
        onClose, isOpen, children, className, lazy,
    } = props;
    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;
    const [isMounted, setIsMounted] = useState(false);

    const handleClose = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);
    const handleContentClick = (e:React.MouseEvent) => {
        e.stopPropagation();
    };

    const handleKeyDown = useCallback((e:KeyboardEvent) => {
        if (e.key === 'Escape') {
            handleClose();
        }
    }, [handleClose]);

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
        }
        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, handleKeyDown]);

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div
                className={cn(s.Modal, {
                    [s.opened]: isOpen,
                    [s.isClosing]: isClosing,
                }, [className])}
            >
                <div className={s.overlay} onClick={handleClose}>
                    <div className={s.content} onClick={handleContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
