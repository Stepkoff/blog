import { cn } from '@/shared/lib/cn';
import { Loader } from '@/shared/ui/Loader';
import s from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string
}

export const PageLoader = ({ className }:PageLoaderProps) => (
    <div className={cn(s.PageLoader, {}, [className])}>
        <Loader />
    </div>
);
