import styled from "styled-components";

export const FundoModal = styled.div`
    position: fixed;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    background: rgba(101, 101, 101, 0.85);
`

export const Modal = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 64px;
    background: #FFFFFF;
    box-shadow: 4px 4px 24px -4px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
`

export const HeaderModal = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: sans-serif;
    align-items: center;
`

export const TitleModal = styled.div`
     font-weight: 700;
    font-size: 32px;
    line-height: 48px;
    color: #EB9B00;
    margin: 0;
`

export const CloseModal = styled.div`
    background: transparent;
    border: none;
    cursor: pointer;
    color: #002F52;
`