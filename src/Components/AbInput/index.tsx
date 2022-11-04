import React from "react";
import * as C from './style'
import { Inputs } from "./Types/Inputs";

export const AbInput = ({onChange, placeholder, label, type = "text", value, name}: Inputs) => {
    
    return (
        <C.Box>
            <C.Label htmlFor="input">{label}</C.Label>
            <C.Input name={name} onChange={onChange} value={value} type={type} placeholder={placeholder} id="input" />
        </C.Box>
    )
}