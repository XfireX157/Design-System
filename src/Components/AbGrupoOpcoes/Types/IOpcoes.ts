export interface IOpcoes {
    active?: boolean
    id?: number,
    title?: string,
    price?: string,
    footer?: string
}

export interface IOpcoesProps {
    opcoes?: IOpcoes[]
}