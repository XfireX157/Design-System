import React from "react";
import * as C from './style'
import { IButton } from "./Types/IButton";

export const AbBotao = ({text, onClick, model = 'primary'}: IButton) => {
    return (
        <C.Btn onClick={onClick} model={model}>
            {text}
        </C.Btn>
    )
}