import React from 'react';
import { RoutePath } from '@/shared/config/routeConfig';
import HomeIcon from '@/shared/assets/icons/home.svg';
import AboutIcon from '@/shared/assets/icons/list.svg';
import ProfileIcon from '@/shared/assets/icons/profile20.svg';

export interface SidebarItemType {
  path: string;
  text: string;
  icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        icon: HomeIcon,
        text: 'Home',
    },
    {
        path: RoutePath.about,
        icon: AboutIcon,
        text: 'About Us',
    },
    {
        path: RoutePath.profile,
        icon: ProfileIcon,
        text: 'Profile',
    },
];
