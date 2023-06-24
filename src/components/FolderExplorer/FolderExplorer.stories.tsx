import { Meta, StoryObj } from '@storybook/react'

import { FolderExplorer } from '.'


export default {
    title: "components/FolderExplorer",
    component: FolderExplorer,
    decorators: [
        Story => (
            <div style={{ maxWidth: '350px' }}>
                {Story()}
            </div>
        )
    ]
} as Meta


export const Default: StoryObj = {

}