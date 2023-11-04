import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import s from './SidebarItem.module.scss';
import { SidebarItemType } from '../../model/items';
import { cn } from '@/shared/lib/cn';

interface SidebarItemProps {
  item: SidebarItemType
  collapsed: boolean
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            className={cn(s.item, {
                [s.collapsed]: collapsed,
            }, [])}
            to={item.path}
        >
            <item.icon className={s.icon} />
            <span className={s.span}>{t(item.text)}</span>
        </AppLink>
    );
});
