import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider, useTheme } from 'next-themes'

import Footer from './index'

const meta = {
  title: 'Layouts/Footer',
  component: Footer,
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
} satisfies Meta<typeof Footer>

export default meta
type Story = StoryObj<typeof meta>

export const DarkTheme: Story = () => {
  const { setTheme } = useTheme()
  setTheme('dark')
  return <Footer />
}
DarkTheme.args = {}

export const LightTheme: Story = () => {
  const { setTheme } = useTheme()
  setTheme('light')
  return <Footer />
}
LightTheme.args = {}
