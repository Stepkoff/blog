import { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/Storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import AboutPage from './AboutPage';

const meta = {
    title: 'pages/AboutPage',
    component: AboutPage,
    parameters: {
        // layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} satisfies Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};

export const PrimaryDark: Story = {
    args: {},
};
PrimaryDark.decorators = [
    ThemeDecorator(Theme.DARK),
];
