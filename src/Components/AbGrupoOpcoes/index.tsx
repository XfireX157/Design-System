import React, { useState } from "react"
import * as C from './style'
import { IOpcoes, IOpcoesProps } from "./Types/IOpcoes"

export const AbGrupoOpcoes = ({opcoes} : IOpcoesProps) => {
    
    const [select, setSelect] = useState<IOpcoes | null>(null)
    
    const SelectFilter = (index: IOpcoes): void => {
        setSelect(index)
    }

    return (
        <>
            {opcoes?.map((opcao: IOpcoes) => 
                <C.Box onClick={() => SelectFilter(opcao)} key={opcao.id} active={select?.id == opcao.id}>
                    <header>
                        {opcao.title}
                    </header>
                    <div>
                        <strong>
                            R${opcao.price}
                        </strong>
                    </div>
                    <footer>
                        {opcao.footer}
                    </footer>
                </C.Box>
            )}
        </>
    )
}