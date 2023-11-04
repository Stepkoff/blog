import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { cn } from '@/shared/lib/cn';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import s from './LanguageSwitch.module.scss';

interface LanguageSwitchProps {
    className?: string,
    short?: boolean,
}

export const LanguageSwitch = memo(({ className, short }:LanguageSwitchProps) => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = async () => {
        await i18n.changeLanguage(i18n.language === 'en' ? 'ua' : 'en');
    };

    return (
        <Button
            className={cn(s.LanguageSwitch, {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={toggleLanguage}
        >
            {short ? t('lang') : t('Language')}
        </Button>
    );
});
