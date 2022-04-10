import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import Main from '.'

export default {
  title: 'Main',
  component: Main
} as ComponentMeta<typeof Main>

const Template: ComponentStory<typeof Main> = (args) => <Main {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: 'React Avançado',
  description: 'TypeScript, NextJS, ReactJS e Styled Components'
}
