import type { StorybookConfig } from '@storybook/nextjs'
import path, { resolve } from 'path'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  env: (config) => ({
    ...config,
    API_GRAPHQL_URL: 'http://localhost:4000/graphql',
  }),
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.modules = [
        ...(config.resolve.modules || []),
        path.resolve(__dirname, '../src'),
        path.resolve(__dirname, '../public'),
      ]
      config.resolve.alias = {
        ...config.resolve.alias,
        '@/images': path.resolve(__dirname, '../public/images'),
        '@/locales': path.resolve(__dirname, '../public/locales'),
        '@': path.resolve(__dirname, '../src'),
      }
    }
    return config
  },
}
export default config
