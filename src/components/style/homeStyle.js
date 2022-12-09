import styled from "styled-components";
import { color, device } from "./utils/styleConstants";
import { ButtonSecondaryStyle } from "../style/generalStyle"

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
    padding-left: 420px;
    color: ${color.primaryWhite};
    text-transform: uppercase;
    left:100px;
    width: 100%;
    height: 30vh;
    font-size: 2.5em;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: left;
    text-shadow: 1px 1px 2px black, 0 0 1em black, 0 0 0.2em black;
`

export const H4StyleHero = styled.h4`
    margin: -150px auto 0;
    padding-left: 420px;
    width: 100%;
    font-size: 1.25em;
    display: flex;
    align-items: center;
    justify-content: left;
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




