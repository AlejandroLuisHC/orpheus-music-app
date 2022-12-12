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
/* MOBILE DIV WELCOME NAV BUTTONS  */
export const DivMobileButtons = styled.div`
    display:block;
    margin:30px 0;
    @media ${device.desktop}{
        display:none; 
    } 
`
export const DivHomeStyle = styled.div`
    padding: 30px 20px;
`

/* DIV CARDS */

export const DivRow = styled.div`
    max-height:240px;
    width: 90vw;
    margin-right: 10px;
    display:flex;
    overflow-x:scroll;
    margin-top: 10px;
    ::-webkit-scrollbar{
      width:0;
    }
    @media ${device.desktop}{
        width: 100vw;
    }
`

export const LiListStyle = styled.li`
    height: auto;
    width: 130px;
    background-color: hsla(0, 100%, 100%,0.02);
    border-radius:15px;
    cursor:pointer;
    padding:15px;
    justify-content:center;
    list-style:none;
    margin: 0 5px;
    @media ${device.desktop}{
        height: 215px;
        width: 150px;
        background-color: hsla(0, 100%, 100%,0.02);
        cursor:pointer;
        padding:15px;
        justify-content:center;
        list-style:none;
        margin: 0 10px;
        
    }

`
export const ImgCards = styled.img`
    border: 1px solid black;
    width:120px;
    height:120px;
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
export const H6StyleHero = styled.h6`
    font-size:0.87rem;
    font-weight:700;
    @media ${device.desktop}{
        font-size:1rem;
    }
`
export const PStyleHero = styled.p`
    font-size:0.60rem;
    @media ${device.desktop}{
        font-size:0.87rem;
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




