import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider, useTheme } from 'next-themes'
import { SessionProvider } from 'next-auth/react'
import { I18nextProvider } from 'react-i18next'

import i18next from '@/config/i18n'

import Header from './index'

const meta = {
  title: 'Layouts/Header/Header',
  component: Header,
  decorators: [
    (Story) => (
      <SessionProvider refetchInterval={60}>
        <I18nextProvider i18n={i18next}>
          <ThemeProvider>
            <Story />
          </ThemeProvider>
        </I18nextProvider>
      </SessionProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const DarkTheme: Story = () => {
  const { setTheme } = useTheme()
  setTheme('dark')
  return <Header />
}
DarkTheme.args = {
  // your args here
}

export const LightTheme: Story = () => {
  const { setTheme } = useTheme()
  setTheme('light')
  return <Header />
}
LightTheme.args = {
  // your args here
}
