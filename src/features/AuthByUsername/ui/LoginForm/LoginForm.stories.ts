import { Meta, StoryObj } from '@storybook/react';
import LoginForm from './LoginForm';
import { StoreDecorator } from '@/shared/config/Storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/Storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
    parameters: {
        // layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};
Default.decorators = [
    StoreDecorator({
        loginForm: {
            username: 'Lorem',
            password: 'Ipsum',
        },
    }),
];

export const DarkTheme: Story = {
    args: {},
};
DarkTheme.decorators = [
    StoreDecorator({
        loginForm: {
            username: 'Lorem',
            password: 'Ipsum',
        },
    }),
    ThemeDecorator(Theme.DARK),
];
