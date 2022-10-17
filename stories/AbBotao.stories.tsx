import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AbBotao } from "../src";
import { IButton } from "../src/Components/AbBotao/Types/IButton";

export default {
    title: 'Components/AbBotao',
    component: AbBotao
} as ComponentMeta <typeof AbBotao>

const Template: ComponentStory<typeof AbBotao> = (args: IButton) => <AbBotao {...args} />

export const Primario = Template.bind({})

Primario.args = {
    text: 'Botão',
    model: "primary"
} as IButton

export const Secundario = Template.bind({})

Secundario.args = {
    text: 'Botão',
    model: "secudary"
} as IButton
