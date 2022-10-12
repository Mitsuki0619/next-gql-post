import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { PostItem } from '../components/PostList/PostItem/PostItem'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Common/PostItem',
    component: PostItem,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof PostItem>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PostItem> = (args) => (
    <PostItem {...args} />
)

export const Normal = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Normal.args = {}
