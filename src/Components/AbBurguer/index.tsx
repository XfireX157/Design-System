import React, { useState } from "react";
import * as C from './style'
import { IBurguer } from "./Types/IBurguerButton";

export const AbBurguer = ({backgroundColor}: IBurguer) => {

    const [isActive, setActive] = useState(false)

    return(
        <C.BoxButton 
        isActive={isActive} 
        onClick={() => setActive(!isActive)}
        backgroundColor={backgroundColor}>
            <span></span>
            <span></span>
            <span></span>
        </C.BoxButton>
    )
}