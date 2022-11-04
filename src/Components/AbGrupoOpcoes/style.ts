import styled from "styled-components";
import { IOpcoes } from "./Types/IOpcoes";


export const Box = styled.section<IOpcoes>`
    width: 194px;
    height: 88px;
    background: ${(props) => props.active ? 'linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%)' : '#FFFFFF'};
    border: 1px solid ${(props) => props.active ? '#002F52' : '#EB9B00'};
    border-radius: 8PX;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly; 
    align-items: center;
    margin: 10px;
    font-family: sans-serif;
    cursor: pointer;

    header{
        color: ${(props) => props.active ? '#FFFFFF' : '#EB9B00'};
        font-size: 12px;
        font-weight: 400;
    }

    strong{
        color: ${(props) => props.active ? '#FFFFFF' : '#EB9B00'};
        font-weight: 700;
        font-size: 16px;
    }

    footer{
        color: ${(props) => props.active ? '#FFFFFF' : 'rgba(0, 0, 0, 0.54)'};
        font-weight: 400;
        font-size: 12px;
    }
`