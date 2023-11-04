import React from 'react';
import { useTranslation } from 'react-i18next';
import s from './ProfileCard.module.scss';
import { cn } from '@/shared/lib/cn';
import { Text, TextTheme } from '@/shared/ui/Text';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Profile } from '../../model/types/profile';
import { Loader } from '@/shared/ui/Loader';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
}

export const ProfileCard = ({
    className, data, error, isLoading,
}: ProfileCardProps) => {
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div className={cn(s.profileCard, {}, [className, s.loading])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={cn(s.profileCard, {}, [className, s.error])}>
                <Text
                    title={t('Authentication failed! Try again.')}
                    theme={TextTheme.ERROR}
                    text={t('Try to refresh the page.')}
                />
            </div>
        );
    }

    return (
        <div className={cn(s.profileCard, {}, [className])}>
            <div className={s.header}>
                <Text title={t('Profile')} />
                <Button className={s.editBtn} theme={ButtonTheme.OUTLINE}>{t('Edit')}</Button>
            </div>
            <div className={s.data}>
                <Input
                    value={data?.firstName}
                    placeholder={t('First name')}
                    className={s.input}
                />
                <Input
                    value={data?.lastName}
                    placeholder={t('Last name')}
                    className={s.input}
                />
            </div>
        </div>
    );
};
