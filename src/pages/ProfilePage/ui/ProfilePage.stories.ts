import { Meta, StoryObj } from '@storybook/react';
import ProfilePage from './ProfilePage';
import { StoreDecorator } from '@/shared/config/Storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/Storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

const meta = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    parameters: {
        // layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};
Default.decorators = [
    StoreDecorator({}),
];

export const DarkTheme: Story = {
    args: {},
};
DarkTheme.decorators = [
    StoreDecorator({}),
    ThemeDecorator(Theme.DARK),
];
