import React from "react"
import * as C from './style'
import { IOpcoes } from "./Types/IOpcoes"

export const AbGrupoOpcoes = () => {
    return (
        <>
        <C.Box active={false}>
            <header>
                E-book
            </header>
            <div>
                <strong>
                    R$ 00,00
                </strong>
            </div>
            <footer>
                .pdf, .epub, .mob
            </footer>
        </C.Box>
        <C.Box active={true}>
            <header>
                E-book
            </header>
            <div>
                <strong>
                    R$ 00,00
                </strong>
            </div>
            <footer>
                .pdf, .epub, .mob
            </footer>
        </C.Box>
        <C.Box active={false}>
            <header>
                E-book
            </header>
            <div>
                <strong>
                    R$ 00,00
                </strong>
            </div>
            <footer>
                .pdf, .epub, .mob
            </footer>
        </C.Box>
        </>
    )
}