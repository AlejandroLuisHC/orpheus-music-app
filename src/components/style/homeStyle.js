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
export const DivHomeStyle = styled.div`
    padding: 0 20px;
`

/* HERO TITLES */
export const DivHeroTitles = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 15vw;
    height: 100%;
    justify-content: center;
`
export const H2StyleHero = styled.h2`
    margin: 0 auto;
    color: ${color.primaryWhite};
    text-transform: uppercase;
    left:100px;
    width: 100%;
    font-size: 2.5em;
    text-shadow: 1px 1px 2px black, 0 0 20px black, 0 0 4px black;
    transition: 300ms;
    @media (max-height: ${'700px'}) {
        font-size: 2em;
    }
`

export const H4StyleHero = styled.h4`
    width: 100%;
    font-size: 1.25em;
    text-shadow: 1px 1px 2px black, 0 0 20px black, 0 0 4px black;
    @media (max-height: ${'700px'}) {
        display: none;
    }
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

export const ButtonLogoutStyle = styled(ButtonSecondaryStyle)`
    margin-left: 20px;
    width: 130px;
`




