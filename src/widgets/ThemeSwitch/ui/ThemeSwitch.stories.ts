import { Meta, StoryObj } from '@storybook/react';
import { ThemeSwitch } from './ThemeSwitch';
import { ThemeDecorator } from '@/shared/config/Storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

const meta = {
    title: 'widgets/ThemeSwitch',
    component: ThemeSwitch,
    parameters: {
        // layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} satisfies Meta<typeof ThemeSwitch>;

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
