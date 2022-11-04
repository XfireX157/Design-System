import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AbButtonQtd } from '../src/Components/AbButtonQtd'
import { IButtonQtds } from "../src/Components/AbButtonQtd/Types/IButtonsQtd";

export default {
    title: 'Components/AbButtonQtd',
    component: AbButtonQtd
} as ComponentMeta <typeof AbButtonQtd>

const Template: ComponentStory<typeof AbButtonQtd> = (args: IButtonQtds) => <AbButtonQtd {...args} />

export const Primary = Template.bind({})

Primary.args = {
    BtnLarger: "+",
    BtnSmaller: "-",
} as IButtonQtds
