import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider, useTheme } from 'next-themes'

import { Title } from './Title'

const meta = {
  title: 'Widgets/Typography/Title',
  component: Title,
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
} satisfies Meta<typeof Title>

export default meta

export const DarkTheme: StoryObj<typeof meta> = {
  render: (args) => {
    const { setTheme } = useTheme()
    setTheme('dark')
    return <Title {...args} />
  },
  args: {
    title: 'Text in Dark Mode',
  },
}

export const LightTheme: StoryObj<typeof meta> = {
  render: (args) => {
    const { setTheme } = useTheme()
    setTheme('light')
    return <Title {...args} />
  },
  args: {
    title: 'Text in Light Mode',
  },
}
