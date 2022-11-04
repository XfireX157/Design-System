import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AbModal } from "../src/Components/AbModal";
import { IModal } from "../src/Components/AbModal/Types/IModal";


export default {
    title: 'Components/AbModal',
    component: AbModal
} as ComponentMeta <typeof AbModal>

const Template: ComponentStory<typeof AbModal> = (args: IModal) => <AbModal {...args} />

export const Default = Template.bind({})

Default.args = {
    title: 'Cadastrar'    
} as IModal
