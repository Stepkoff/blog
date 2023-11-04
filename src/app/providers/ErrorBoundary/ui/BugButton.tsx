import { useEffect, useState } from 'react';
import { cn } from '@/shared/lib/cn';
import { Button } from '@/shared/ui/Button';

interface BugButtonProps {
    className?: string
}

// test component
export const BugButton = ({ className }:BugButtonProps) => {
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        if (isError) throw new Error('Test Error');
    }, [isError]);

    const handleClick = () => {
        setIsError((prev) => !prev);
    };
    return (
        <Button
            onClick={handleClick}
            className={cn('', {}, [className])}
        >
            {/* eslint-disable-next-line i18next/no-literal-string */}
            {/* eslint-disable-next-line i18next/no-literal-string */}
            Throw Error
        </Button>
    );
};
