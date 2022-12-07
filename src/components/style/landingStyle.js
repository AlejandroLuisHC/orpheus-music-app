import styled, { keyframes } from "styled-components";
import { color, device } from "./utils/styleConstants";
import { ImgLogoM } from "./generalStyle";

export const DivLanding = styled.div`
    display: grid;
    height: 100vh;
    padding: 30px;
    grid-template-rows: 1fr 3fr 60px;
    text-align: center;
    position: relative;
    z-index: 1;
    &::before{
        content: "";
        position: absolute;
        top: 0; 
        left: 0;
        width: 100%; 
        height: 100%;  
        opacity: .2; 
        z-index: -1;
        background: url(src/assets/gifs_background/BgBubblesMobile.gif);
        background-size: cover;
        background-repeat: no-repeat;
    }
    @media ${device.desktop}{
        width: 100%;
        height: 100vh;
        grid-column: 5;
        grid-row: 2;
        &::before{
            position: absolute;
            top: 0; 
            left: 0;
            width: 100%; 
            height: 100%;  
            opacity: .2; 
            z-index: -1;
            background: url(src/assets/gifs_background/BgBubbglesDesktop.gif);
            background-size: cover;
            background-repeat: no-repeat;
        }
    }
`

export const ImgLogoLanding = styled(ImgLogoM)`
    margin: 0 auto 30px;
`

export const ImgLogoClick = styled(ImgLogoM)`
    cursor: pointer;
    transition: 300ms;
    &:hover{
        transform: scale(1.1);
    }
`

const upDownAnimation = keyframes`
    0% { transform: translate(0, 0); }
    50% { transform: translate(0, 30px); }
    100% { transform: translate(0, 0); }
`
export const ButtonLogin = styled.button`
    background: none;
    border: none;
    color: ${color.primaryYellow};
    font-size: 30px;
    transition: 500ms;
    animation-name: ${upDownAnimation};
    animation-duration: 2s;
    animation-iteration-count: infinite;
`

export const DivLogin = styled.div`
    display: grid;
    height: 100vh;
    padding: 30px;
    grid-template-rows: 1fr 5fr 60px;
    text-align: center;
`

