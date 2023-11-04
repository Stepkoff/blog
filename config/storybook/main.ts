import type { StorybookConfig } from '@storybook/react-webpack5';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import sass from 'sass';
import webpack from 'webpack';

const config: StorybookConfig = {
    stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-onboarding',
        '@storybook/addon-interactions',
        {
            name: '@storybook/addon-styling',
            options: {
                sass: {
                    // Require your Sass preprocessor here
                    implementation: sass,
                },
            },
        },
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },

    docs: {
        autodocs: 'tag',
    },
    webpackFinal: async (config) => {
        config?.plugins?.push(new webpack.DefinePlugin({
            __IS_DEV__: true,
            __API__: JSON.stringify(''),
        }));

        // eslint-disable-next-line no-param-reassign
        config!.resolve!.plugins = [
            ...(config!.resolve!.plugins || []),
            new TsconfigPathsPlugin({
                extensions: config!.resolve!.extensions,
            }),
        ];

        // eslint-disable-next-line no-param-reassign
        config!.module!.rules = [
            ...config!.module!.rules!.map((rule) => {
                // @ts-ignore
                if (/svg/.test(rule?.test as string)) {
                    // Silence the Storybook loaders for SVG files
                    // @ts-ignore
                    return { ...rule, exclude: /\.svg$/i };
                }

                return rule;
            }),
            // Add your custom SVG loader
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                use: ['@svgr/webpack'],
            },
        ];

        return config;
    },
};

export default config;
