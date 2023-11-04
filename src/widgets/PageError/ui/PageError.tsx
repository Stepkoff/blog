import { useTranslation } from 'react-i18next';
import { cn } from '@/shared/lib/cn';
import { Button } from '@/shared/ui/Button';
import s from './PageError.module.scss';

interface PageErrorProps {
  className?: string
}

export const PageError = ({ className }:PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={cn(s.PageError, {}, [className])}>
            <p className={s.message}>
                {t('Something went wrong')}
            </p>
            <Button onClick={reloadPage}>{t('Refresh Page')}</Button>
        </div>
    );
};
