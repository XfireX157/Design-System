import styled from "styled-components"

interface BoxButtonProps {
    isActive?: boolean
    backgroundColor?: string
}

export const BoxButton = styled.button<BoxButtonProps>`
    position: relative;
    width: 85px;
    height: 85px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: transparent;
    border: none;
    align-items: center;
    cursor: pointer;
    z-index: 70;


        span{
            position: absolute;
            width: 40px;
            height: 3px;
            border-radius: 40px;
            background-color: ${(props: BoxButtonProps) => props.backgroundColor ? props.backgroundColor : '#012f52'};
            transition: 0.25s;
            
            

        ${({isActive}) => isActive ? `
            &:nth-child(1){
                position: fixed;
                transform: translateY(0);
                transform: rotate(-45deg);
            }

            &:nth-child(2){
                position: fixed;
                transform: rotate(45deg);
            }

            &:nth-child(3){
                opacity: 0;
            }
        `: `
            &:nth-child(1){
                transform: translateY(-13px);
            }

            &:nth-child(3){
                transform: translateY(13px);
            }
        `}
    }
`