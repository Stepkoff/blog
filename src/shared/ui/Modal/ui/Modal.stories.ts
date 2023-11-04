import { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/Storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Modal } from './Modal';

const meta = {
    title: 'shared/Modal',
    component: Modal,
    parameters: {
        // layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Open: Story = {
    args: {
        children: 'lorem ipsum dolor sit amet',
        isOpen: true,
        onClose: () => null,
    },
};

export const OpenDarkTheme: Story = {
    args: {
        children: 'lorem ipsum dolor sit amet',
        isOpen: true,
        onClose: () => null,
    },
};

OpenDarkTheme.decorators = [
    ThemeDecorator(Theme.DARK),
];

export const Closed: Story = {
    args: {
        children: 'lorem ipsum dolor sit amet',
        isOpen: false,
        onClose: () => null,
    },
};
