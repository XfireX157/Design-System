import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AbGrupoOpcoes } from "../src/Components/AbGrupoOpcoes";

export default {
    title: 'Components/AbGrupoOpcoes',
    component: AbGrupoOpcoes
} as ComponentMeta <typeof AbGrupoOpcoes>

const Template: ComponentStory<typeof AbGrupoOpcoes> = () => <AbGrupoOpcoes />

export const Default = Template.bind({})

Default.args = {}
