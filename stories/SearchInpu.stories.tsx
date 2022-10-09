import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { SearchInput } from '../components/SearchInput/SearchInput'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Common/SearchInput',
    component: SearchInput,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof SearchInput>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SearchInput> = (args) => (
    <SearchInput {...args} />
)

export const Normal = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Normal.args = {
    value: 'a',
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
    },
}
