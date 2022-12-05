import { Link } from "react-router-dom";
import styled from "styled-components";
import { color } from "./utils/styleConstants";
import { ImgLogoM, InputStyle, ButtonPrimaryStyle } from "./generalStyle";



export const DivLogin = styled.div`
    display: grid;
    height: 100vh;
    padding: 30px;
    grid-template-rows: 1fr 3fr 60px;
    text-align: center;
`
export const ImgLogoLanding = styled(ImgLogoM)`
    margin: 0 auto 30px;
`

export const InputsStyleLogin = styled(InputStyle)`
    margin: 10px auto;
 `

 export const ButtonStyleLogin = styled(ButtonPrimaryStyle)`
     margin: 10px auto;
 `