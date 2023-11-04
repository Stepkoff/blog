import React, { Suspense } from 'react';
import { cn } from '@/shared/lib/cn';
import { Modal } from '@/shared/ui/Modal';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import { Loader } from '@/shared/ui/Loader';

interface LoginModalProps {
    className?: string
    isOpen: boolean
    onClose: () => void
}

export const LoginModal = ({ className, isOpen, onClose }:LoginModalProps) => (
    <Modal
        lazy
        isOpen={isOpen}
        className={cn('', {}, [className])}
        onClose={onClose}
    >
        <Suspense fallback={<Loader />}>
            <LoginFormAsync onSuccess={onClose} />
        </Suspense>
    </Modal>
);
