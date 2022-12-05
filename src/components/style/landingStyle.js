import styled, { keyframes } from "styled-components";
import { color } from "./utils/styleConstants";
import { ImgLogoM } from "./generalStyle";

export const DivLanding = styled.div`
    display: grid;
    height: 100%;
    padding: 30px;
    grid-template-rows: 1fr 3fr 60px;
    text-align: center;
    `
export const ImgLogoLanding = styled(ImgLogoM)`
    margin: 0 auto 30px;
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

