import { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/Storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { NotFoundPage } from './NotFoundPage';

const meta = {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    parameters: {
        // layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} satisfies Meta<typeof NotFoundPage>;

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
