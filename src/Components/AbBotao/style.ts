import styled, {css} from "styled-components";
import { IButton } from "./Types/IButton";

export const Btn = styled.button<IButton>`
    background-color: ${(props: IButton) => props.model === 'primary' ? '#EB9B00' : '#FFF'};
    padding: 16px 32px;
    border: 2px solid #EB9B00;
    color: ${(props: IButton) => props.model === 'primary' ? '#FFF' : '#EB9B00'};
    font-size: 20px;
    cursor: pointer;

    ${(props: IButton) => props.model === 'primary'
        ? css`
            &:hover{
                background-color: #B87900;
                border: 2px solid #BB7900;
                color: #FFF;
                transition: all 0.2s ease-in-out;
            }   
        ` : css`
            &:hover {
                background-color: #FFF;
                border: 2px solid #B87900;
                color: #B87900; 
                transition: all 0.2s ease-in-out;
        }
        `
    }

    
`