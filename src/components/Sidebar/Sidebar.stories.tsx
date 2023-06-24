import { Meta, StoryObj } from '@storybook/react'

import { Sidebar } from '.'


export default {
    title: "components/Sidebar",
    component: Sidebar,
    decorators: [
        Story => (
            <div style={{ maxWidth: '70px' }}>
                {Story()}
            </div>
        )
    ]
} as Meta

export const Default: StoryObj = {

}