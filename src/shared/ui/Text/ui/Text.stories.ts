import { Meta, StoryObj } from '@storybook/react';
import { Text, TextTheme } from './Text';
import { ThemeDecorator } from '@/shared/config/Storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

const meta = {
    title: 'shared/Text',
    component: Text,
    parameters: {
        // layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Title Example',
        text: 'lorem ipsum dolor sit amet',
    },
};

export const DefaultDarkTheme: Story = {
    args: {
        title: 'Title Example',
        text: 'lorem ipsum dolor sit amet',
    },
};

export const OnlyTitle: Story = {
    args: {
        title: 'Title Example',
    },
};

export const OnlyText: Story = {
    args: {
        text: 'text Example',
    },
};

DefaultDarkTheme.decorators = [
    ThemeDecorator(Theme.DARK),
];

export const Error: Story = {
    args: {
        text: 'text Example',
        title: 'title',
        theme: TextTheme.ERROR,
    },
};

export const ErrorDarkTheme: Story = {
    args: {
        text: 'text Example',
        title: 'title',
        theme: TextTheme.ERROR,
    },
};
ErrorDarkTheme.decorators = [
    ThemeDecorator(Theme.DARK),
];
