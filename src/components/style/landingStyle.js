import { Link } from "react-router-dom";
import styled from "styled-components";
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

export const LinkToLogin = styled(Link)`
    color: ${color.primaryYellow};
    font-size: 30px;
`