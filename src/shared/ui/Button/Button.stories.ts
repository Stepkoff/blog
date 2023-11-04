import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/Storybook/ThemeDecorator';

const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        // layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Submit',
    },
};

export const Clear: Story = {
    args: {
        children: 'Submit',
        theme: ButtonTheme.CLEAR,
    },
};

export const ClearInverted: Story = {
    args: {
        children: 'Submit',
        theme: ButtonTheme.CLEAR_INVERTED,
    },
};

export const Outlined: Story = {
    args: {
        children: 'Submit',
        theme: ButtonTheme.OUTLINE,
    },
};

export const OutlinedDark: Story = {
    args: {
        children: 'Submit',
        theme: ButtonTheme.OUTLINE,
    },
};

OutlinedDark.decorators = [
    ThemeDecorator(Theme.DARK),
];

export const Background: Story = {
    args: {
        children: 'Submit',
        theme: ButtonTheme.BACKGROUND,
    },
};

export const BackgroundInverted: Story = {
    args: {
        children: 'Submit',
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};

export const SquareM: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.M,
    },
};

export const SquareL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.L,
    },
};

export const SquareXl: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.XL,
    },
};
