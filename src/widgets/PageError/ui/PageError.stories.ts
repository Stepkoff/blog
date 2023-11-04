import { Meta, StoryObj } from '@storybook/react';
import { PageError } from '@/widgets/PageError';
import { ThemeDecorator } from '@/shared/config/Storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

const meta = {
    title: 'widgets/PageError',
    component: PageError,
    parameters: {
        // layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} satisfies Meta<typeof PageError>;

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
