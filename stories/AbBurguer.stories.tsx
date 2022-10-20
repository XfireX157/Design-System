import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AbBurguer } from "../src";
import { IBurguer } from "../src/Components/AbBurguer/Types/IBurguerButton";

export default {
    title: 'Components/AbBurguer',
    component: AbBurguer
} as ComponentMeta <typeof AbBurguer>

const Template: ComponentStory<typeof AbBurguer> = (args: IBurguer) => <AbBurguer {...args} />

export const Default = Template.bind({})

Default.args = {
    backgroundColor: "#000"
} as IBurguer
