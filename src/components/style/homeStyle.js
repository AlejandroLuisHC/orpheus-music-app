import styled from "styled-components";
import { color, device } from "./utils/styleConstants";
import { ButtonSecondaryStyle } from "../style/generalStyle"
import { Link } from "react-router-dom";

/* DESKTOP DIV HERO */
export const DivHero = styled.div`
    display: none;
    @media ${device.desktop}{
        display: block; 
    } 
`
/* MOBILE DIV WELCOME NAV BUTTONS  */
export const DivMobileButtons = styled.div`
    margin: 30px 0;
    @media ${device.desktop}{
        display: none; 
    } 
`
export const DivHomeStyle = styled.div`
    padding: 20px 20px 0 20px;
    width: 100%;
    @media ${device.desktop}{
        padding: 0;
    } 
`
export const H1Welcome = styled.h1`
    margin-top: 30px;
    font-size:20px;
    display:flex;
    justify-content: space-between;
    align-items:center;
    @media ${device.desktop}{
        font-size:40px;
    } 
`
/* DIV CARDS */

export const DivFavAndPlaylist = styled.div`
    display: flex;
    @media ${device.desktop}{
        display:none; 
    } 
`
export const DivBoxStyle = styled.div`
    display: flex;
    gap: 15px;
    margin-bottom:25px;
`

/* CARDMUSIC */
export const DivStyle = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row;
`
export const DivElementTitles = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 20px;
    margin-bottom: 10px;
`
export const LinkHome = styled(Link)`
    color: ${color.primaryWhite};
    text-decoration: none;
    font-size: 14px;
    &:hover{
        color: ${color.primaryYellow}
    }
`
export const DivSlider = styled.div`
    display: flex;
    width: calc(100vw - 40px );
    height: 190px;
    overflow: auto;
    @media ${device.desktop}{
        width: calc(100vw - 200px);
        height: 285px;  
        &::-webkit-scrollbar {
            width: 6px;
            height: 6px;
            cursor: pointer;
        }
        &::-webkit-scrollbar-track {
            border-radius: 10px;
            background: #3D3D3D77;
        }
        &::-webkit-scrollbar-thumb{
            border-radius: 10px;
            background: #353535;
        }
        &::-webkit-scrollbar-thumb:hover{
            background: ${color.secondaryBlack};
        }
        &::-webkit-scrollbar-thumb:active{
            background: #484848;
        }
    }
`

export const DivCard = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 140px;
    height: 190px;
    margin-right: 20px;
    background: hsla(0, 0%, 100%, 0.02);
    border-radius: 20px;
    cursor: pointer;
    transition: 300ms;
    &:hover{
        background: rgba(255, 255, 255, .2);
    }
    @media ${device.desktop}{
        min-width: 220px;
        height: 270px;
    } 
`
export const DivPicLists = styled.div`
    display: flex;
    padding: 15px 15px 0 15px;
    justify-content: center;
    align-items: center;
`
export const DivInfoLists = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: 15px 15px 15px 15px;
    justify-content: center;
    gap: 7px;
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
    font-size:0.80rem;
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

export const DivHomeCarousels =styled.div`
    display:flex;
    flex-direction:column;
    gap:30px;
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


/* IMAGE  */
export const ImgCards = styled.img`
    width: 90px;
    height: 90px;
    display: flex;
    border-radius: 10px;
    transition: 300ms;
    &:hover{
        border-radius: 50%;
        /* transform: rotate(360deg); */
    }
    @media ${device.desktop}{
        width: 180px;
        height: 180px;
        border-radius: 15px;
    } 
`
export const ImgAvatarProfile = styled.img`
    width: 50px;
    height: 50px;
    border-radius:50px;
    @media ${device.desktop}{
        display:none;
    } 
`







