import { cn } from '@/shared/lib/cn';
import s from './Loader.module.scss';

interface LoaderProps {
  className?: string
}

export const Loader = ({ className }:LoaderProps) => (
    <div className={cn(s.loader, {}, [className])}>
        <div className={s.dot} />
        <div className={s.dot} />
        <div className={s.dot} />
        <div className={s.dot} />
        <div className={s.dot} />
        <div className={s.dot} />
        <div className={s.dot} />
        <div className={s.dot} />
    </div>
);
