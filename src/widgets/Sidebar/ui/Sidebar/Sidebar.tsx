import React, { useState, memo } from 'react';
import { cn } from '@/shared/lib/cn';
import { ThemeSwitch } from '@/widgets/ThemeSwitch';
import { LanguageSwitch } from '@/widgets/LanguageSwitch';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import s from './Sidebar.module.scss';
import { ButtonSize } from '@/shared/ui/Button/Button';
import { SidebarItemsList } from '../../model/items';
import { SidebarItem } from '@/widgets/Sidebar/ui/SidebarItem';

interface SidebarProps {
    className?: string
}

export const Sidebar = memo(({ className = '' }:SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={cn(s.Sidebar, { [s.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                type="button"
                onClick={onToggle}
                className={s.collapsedBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={s.items}>
                {SidebarItemsList.map((item) => (
                    <SidebarItem
                        key={item.path}
                        item={item}
                        collapsed={collapsed}
                    />
                ))}
            </div>
            <div className={s.switchers}>
                <ThemeSwitch />
                <LanguageSwitch short={collapsed} />
            </div>
        </div>
    );
});
