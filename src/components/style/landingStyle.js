import styled, { keyframes } from "styled-components";
import { color, device } from "./utils/styleConstants";
import { Footer, ImgLogoM, ImgLogoS } from "./generalStyle";

export const DivLanding = styled.div`
    display: grid;
    height: 100vh;
    grid-template: 1fr 1fr 8fr 40px / 1fr;
    text-align: center;
    position: relative;
    z-index: 1;
    padding-top: 30px;
    &::before{
        content: "";
        position: absolute;
        top: 0; 
        left: 0;
        width: 100%; 
        height: 100%;  
        opacity: .2; 
        z-index: -1;
        background: url(src/assets/img/gifs_background/BgBubblesMobile.gif);
        background-size: cover;
        background-repeat: no-repeat;
    }
    @media ${device.desktop}{ 
        &::before{
            position: absolute;
            top: 0; 
            left: 0;
            width: 100%; 
            height: 100%;  
            opacity: .2; 
            z-index: -1;
            background: url(src/assets/img/gifs_background/BgBubbglesDesktop.gif);
            background-size: cover;
            background-repeat: no-repeat;
        }
    }
`

export const ImgLogoLanding = styled(ImgLogoM)`
    margin: 80px auto 30px;
    @media ${device.desktop}{
        transform: scale(2);
    }
`

export const ImgLogoClick = styled(ImgLogoM)`
    cursor: pointer;
    transition: 300ms;
    &:hover{
        transform: scale(1.1);
    }
`
export const ImgLogoHome = styled(ImgLogoS)`
    
    cursor: pointer;
        transition: 300ms;
        &:hover{
            transform: scale(1.1);
        }
    @media ${device.desktop}{
        margin: 10px 0 0 10px;
    }
`
const upDownAnimation = keyframes`
    0% { transform: translate(0, 0); }
    50% { transform: translate(0, -30px); }
    100% { transform: translate(0, 0); }
`
export const ButtonLogin = styled.button`
    background: none;
    border: none;
    grid-row: 3;
    padding-bottom: 40px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    color: ${color.primaryYellow};
    font-size: 30px;
    text-shadow: 0 0 7px black;
    transition: 500ms;
    animation-name: ${upDownAnimation};
    animation-duration: 2s;
    animation-iteration-count: infinite;
    cursor: pointer;
`

export const DivLogin = styled.div`
    display: grid;
    height: 100vh;
    padding: 30px;
    grid-template-rows: 1fr 5fr 60px;
    text-align: center;
`
export const PSlogan = styled.p`
    font-size: 1.6rem;
    grid-row: 2;
    text-shadow: 0 0 7px black;
    font-family: BoldblasterItalic;
`
export const FooterLanding = styled(Footer)`
    grid-row: 4;
    &::before{
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: -1;
        width: 100%; 
        height: 40px;  
        opacity: .85; 
        background-color: ${color.primaryBlack}
    }
    @media ${device.desktop}{
        padding-top: 10px;
        &::before{
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            z-index: -1;
            width: 100%; 
            height: 40px;  
            opacity: .85; 
            background-color: ${color.primaryBlack}
        }
    }
`

