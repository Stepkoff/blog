import { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './Sidebar';
import { ThemeDecorator } from '@/shared/config/Storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

const meta = {
    title: 'widget/Sidebar',
    component: Sidebar,
    parameters: {
        // layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
};
Light.decorators = [
    ThemeDecorator(Theme.DEFAULT),
];

export const Dark: Story = {
    args: {},
};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
];
