import styled from "styled-components";
import { ButtonPrimaryStyle, LinkPrimaryStyle } from "./generalStyle";
import { color, device } from "./utils/styleConstants";

export const DivErrorContainer = styled.div`
    display: grid;
    height: 100%;
    grid-template: 1fr 2fr 10fr / 1fr 18fr 1fr;
    @media ${device.desktop}{
        grid-template-columns: 1fr 6fr 1fr;
    };
`
export const H1ErrorTitle = styled.h1`
    text-align: center;
    grid-row: 2;
    grid-column: 2;
    font-size: 40px;
    color: ${color.primaryYellow};
    @media ${device.desktop}{
        font-size: 46px; 
    };
`
export const DivErrorMsg = styled.div`
    text-align: center;
    grid-row: 3;
    grid-column: 2;
    font-size: 20px;
`
export const ImgError = styled.img`
    text-align: center;
    grid-row: 3;
    grid-column: 2;
    filter: invert(.9415);
    border-radius: 100px;
    width: 75%;
    @media ${device.desktop}{
        width: auto;
    };
`