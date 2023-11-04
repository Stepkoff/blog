import type { Preview } from '@storybook/react';
import '@/app/styles/index.scss';
import { Theme } from '../../src/app/providers/ThemeProvider';
import { StyleDecorator } from '../../src/shared/config/Storybook/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/Storybook/ThemeDecorator';
import { RouteDecorator } from '../../src/shared/config/Storybook/RouteDecorator';
import { StoreDecorator } from '../../src/shared/config/Storybook/StoreDecorator';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [
        RouteDecorator,
        StyleDecorator,
        ThemeDecorator(Theme.DEFAULT),
    ],
};

export default preview;
