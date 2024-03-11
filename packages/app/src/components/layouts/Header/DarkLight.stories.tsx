import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider, useTheme } from 'next-themes'

import DarkLight from './DarkLight'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Layouts/Header/DarkLight',
  component: DarkLight,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof DarkLight>

export default meta
type Story = StoryObj<typeof meta>

export const DarkTheme: Story = () => {
  const { setTheme } = useTheme()
  setTheme('dark')
  return <DarkLight />
}
DarkTheme.args = {
  // your args here
}

export const LightTheme: Story = () => {
  const { setTheme } = useTheme()
  setTheme('light')
  return <DarkLight />
}
LightTheme.args = {
  // your args here
}
