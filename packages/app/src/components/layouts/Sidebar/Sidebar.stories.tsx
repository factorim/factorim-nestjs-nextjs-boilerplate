import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider, useTheme } from 'next-themes'

import Sidebar from './index'

const meta = {
  title: 'Layouts/Sidebar',
  component: Sidebar,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

export const DarkTheme: Story = () => {
  const { setTheme } = useTheme()
  setTheme('dark')
  return <Sidebar />
}
DarkTheme.args = {}

export const LightTheme: Story = () => {
  const { setTheme } = useTheme()
  setTheme('light')
  return <Sidebar />
}
LightTheme.args = {}
