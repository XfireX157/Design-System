import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AbInput } from '../src/Components/AbInput'
import { Inputs } from "../src/Components/AbInput/Types/Inputs";

export default {
    title: 'Components/AbInput',
    component: AbInput
} as ComponentMeta <typeof AbInput>

const Template: ComponentStory<typeof AbInput> = (args: Inputs) => <AbInput {...args} />

export const Default = Template.bind({})

Default.args = {
    text: 'E-mail',
    placeholder: 'Digite seu E-mail...',
    type: "email",
} as Inputs

export const Secudary = Template.bind({})

Secudary.args = {
    text: 'E-mail',
    placeholder: 'Digite sua Senha...',
    type: "password",
}as Inputs