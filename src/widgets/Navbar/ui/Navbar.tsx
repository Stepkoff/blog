import React, { useCallback, useState, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { cn } from '@/shared/lib/cn';
import s from './navbar.module.scss';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { LoginModal } from '@/features/AuthByUsername';
import { getUserAuthData, userActions } from '@/entities/User';

interface NavbarProps {
  className?: string
}

export const Navbar = memo(({ className }:NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false);
    const dispatch = useDispatch();
    const authData = useSelector(getUserAuthData);
    const { t } = useTranslation();

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onSignOut = useCallback(() => {
        dispatch(userActions.signOut());
    }, [dispatch]);

    if (authData) {
        return (
            <div className={cn(s.navbar, {}, [className])}>

                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    className=""
                    onClick={onSignOut}
                >
                    {t('Sign Out')}
                </Button>

            </div>
        );
    }

    return (
        <div className={cn(s.navbar, {}, [className])}>

            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className=""
                onClick={onShowModal}
            >
                {t('Sign In')}
            </Button>
            {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}

        </div>
    );
});
