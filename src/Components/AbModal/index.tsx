
import React from "react"
import * as C from './style'
import { IModal } from "./Types/IModal"


export const AbModal = ({ children, title, CloseModal}: IModal) => {

    return (
        <div>
            <C.FundoModal onClick={CloseModal} />
            <C.Modal>
                <C.HeaderModal>
                    <C.TitleModal>{title}</C.TitleModal>
                    <C.CloseModal onClick={CloseModal}>X</C.CloseModal>
                </C.HeaderModal>
                {children}
            </C.Modal>
        </div>
    )
}