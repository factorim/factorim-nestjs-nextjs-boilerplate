import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider, useTheme } from 'next-themes'

import { Loading } from './Loading'

const meta = {
  title: 'Widgets/UI/Loading',
  component: Loading,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Loading>

export default meta
type Story = StoryObj<typeof meta>

export const DarkTheme: Story = () => {
  const { setTheme } = useTheme()
  setTheme('dark')
  return <Loading />
}
DarkTheme.args = {}

export const LightTheme: Story = () => {
  const { setTheme } = useTheme()
  setTheme('light')
  return <Loading />
}
LightTheme.args = {}
