import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AbGrupoOpcoes } from "../src/Components/AbGrupoOpcoes";
import { IOpcoesProps } from "../src/Components/AbGrupoOpcoes/Types/IOpcoes";

export default {
    title: 'Components/AbGrupoOpcoes',
    component: AbGrupoOpcoes
} as ComponentMeta <typeof AbGrupoOpcoes>

const Template: ComponentStory<typeof AbGrupoOpcoes> = (args: IOpcoesProps) => <AbGrupoOpcoes {...args} />

export const Default = Template.bind({})

Default.args = {    
    opcoes: [
        {
            id: 1,
            title: 'E-book',
            price: "00,00",
            footer: ".pdf .epub .mob"
        },
        {
            id: 2,
            title: 'Impresso',
            price: "00,00",
            footer: ".pdf .epub .mob"
        },
        {
            id: 3,
            title: 'Impresso',
            price: "00,00",
            footer: ".pdf .epub .mob"
        }
    ]
} as IOpcoesProps
