import styled from "styled-components";

interface IProps{
    backgroundColorSmaller?: string | null
    backgroundColorLarger?: string | null
    borderColorSmaller?: string | null
    borderColorLarger?: string | null
    colorSmaller?: string | null
    colorLarger?: string | null
}

export const BtnSmaller = styled.button<IProps>`
    width: 32px;
    height: 32px;
    background-color: ${(props: IProps) => props.backgroundColorSmaller ? props.backgroundColorSmaller : '#012f52'};
    color: ${(props: IProps) => props.colorSmaller ? props.colorSmaller : '#FFF'};
    border-radius: 50%;
    outline: none;
    border: 2px solid ${(props: IProps) => props.borderColorSmaller ? props.borderColorSmaller : '#012f52'};
    margin: 0 14px 0 14px;
    cursor: pointer;
`

export const BtnLarger = styled.button `
    width: 32px;
    height: 32px;
    background-color: ${(props: IProps) => props.backgroundColorLarger ? props.backgroundColorLarger : '#012f52'};
    color: ${(props: IProps) => props.colorLarger ? props.colorLarger : '#FFF'};
    border-radius: 50%;
    outline: none;
    border: 2px solid ${(props: IProps) => props.borderColorLarger ? props.borderColorLarger : '#012f52'};
    margin: 0 14px 0 14px;
    cursor: pointer;
`