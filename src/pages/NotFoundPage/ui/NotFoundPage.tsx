import { useTranslation } from 'react-i18next';
import { cn } from '@/shared/lib/cn';
import s from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string
}

export const NotFoundPage = ({ className }:NotFoundPageProps) => {
    const { t } = useTranslation();
    return (
        <div className={cn(s.NotFoundPage, {}, [className])}>
            {t('Page not found')}
        </div>
    );
};
