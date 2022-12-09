import styled from "styled-components";
import { color, device } from "./utils/styleConstants";
import {ButtonSecondaryStyle} from "../style/generalStyle"

/* DESKTOP DIV HERO */
export const DivHero = styled.div`
    display:none;
    @media ${device.desktop}{
        display:block; 
    } 
`
/* MOBILE DIV WELCOME NAD BUTTONS  */
export const DivUsernameButtons = styled.div`
    display:block;
    margin:30px 0;
    @media ${device.desktop}{
        display:none; 
    } 
`

/* HERO TITLES */
export const H2StyleHero = styled.h2`
    margin: 0 auto;
    color: ${color.primaryWhite};
    text-transform: uppercase;
    left:100px;
    width: 100%;
    height: 60vh;
    text-align: center;
    font-size: 2.5em;
    display:flex;
    align-items:center;
    justify-content:center;
    text-shadow: 1px 1px 2px black, 0 0 1em black, 0 0 0.2em black;
`

export const H4StyleHero = styled.h4`
    margin: -150px auto 0;

    width: 100%;
    text-align: center;
    font-size: 1.25em;
    align-items:center;
    justify-content:center;
    text-shadow: 1px 1px 2px black, 0 0 1em black, 0 0 0.2em black;
`

/* BUTTONS  */
export const DivButtonsAction = styled.div`
    display: flex;
    justify-content: space-between;
  
`

export const BtnAction = styled(ButtonSecondaryStyle)`
    width:50%;
    
    margin: 10px 10px;

`




