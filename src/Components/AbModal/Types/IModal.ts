import { ReactNode } from "react";

export interface IModal {
    Open?: boolean
    children: ReactNode
    title: string,    
    CloseModal: () => void
 
}