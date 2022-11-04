
import React, {useState} from "react"
import * as C from './style'
import {IButtonQtds} from './Types/IButtonsQtd'

export const AbButtonQtd = ({
    BtnSmaller, 
    BtnLarger, 
    BackgroundColorSmaller, 
    BackgroundColorLarger,
    BorderColorLarger, 
    BorderColorSmaller, 
    ColorLarger, ColorSmaller}: IButtonQtds) => {
        
    const [contador, setContador] = useState(0)

    const AddClick = () => {
        setContador(contador + 1)
    }

    const RemoveClick = () => {
        setContador(contador - 1)
    }

    return (
        <>
            <C.BtnSmaller 
                borderColorSmaller={BorderColorSmaller}
                backgroundColorSmaller={BackgroundColorSmaller} 
                colorSmaller={ColorSmaller}
                onClick={RemoveClick}>{BtnSmaller}
            </C.BtnSmaller>

            <span>{contador}</span>

            <C.BtnLarger 
                borderColorLarger={BorderColorLarger}
                backgroundColorLarger={BackgroundColorLarger}
                colorLarger={ColorLarger}
                onClick={AddClick}>{BtnLarger}
            </C.BtnLarger>
        </>
    )
}