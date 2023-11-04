import { Meta, StoryObj } from '@storybook/react';
import { Navbar } from '@/widgets/Navbar';
import { ThemeDecorator } from '@/shared/config/Storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/Storybook/StoreDecorator';

const meta = {
    title: 'widget/Navbar',
    component: Navbar,
    parameters: {
        // layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
};
Light.decorators = [
    ThemeDecorator(Theme.DEFAULT),
    StoreDecorator({}),
];

export const Dark: Story = {
    args: {},
};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({}),
];
