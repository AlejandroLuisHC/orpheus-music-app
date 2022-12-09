import styled from "styled-components";
import DefaultBanner from '../../assets/img/profile/Banner.png'
import { color } from "./utils/styleConstants";
import { ButtonSecondaryStyle } from "./generalStyle";



export const DivProfileBanner = styled.div`
    z-index: 1;
    position: relative;
    width: 100%;
    height: 40vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    /* background-image: url(${DefaultBanner});
    background-position: 50% 10%; */
    &::before { 
        content: "";
        position: absolute;
        top: 0; 
        left: 0;
        width: 100%; 
        height: 350px;
        opacity: .2; 
        z-index: -1;
        background: url(${DefaultBanner});
        background-position: 50% 100%;
        background-repeat: repeat-z;
    }
`

export const DivUserAvatar = styled.div`
    position: relative;
    margin: auto 50px;
`
export const DivUserGeneralData = styled.div`
    position: relative;

    display: grid;
    grid-template: 100px 100px / 300px 300px 300px;
    margin: auto 0;
`
export const H1Username = styled.h1`
    font-size: 60px;
    grid-column: 1 / span 2;
    grid-row: 1;

`
export const H2UserWorks = styled.h2`
    font-size: 60px;
    grid-column: 3;
    grid-row: 1;
`
export const DivProfileUserInfoConteiner = styled.div`
    grid-row: 2;
    grid-column: 2;
    display: flex;
    flex-direction: row;
    gap: 30px;
    justify-content: center;
`
export const PProfileUserInfo = styled.p`
    font-size: 40px;
    color: ${color.primaryYellow};
    text-align: center;
    display: flex;
    flex-direction: column;
`
export const SpanProfileUserNumbers = styled.span`
    font-size: 40px;
    text-shadow: 0 0 10px black;
    color: ${color.primaryWhite};
`
export const ButtonProfileStyle = styled(ButtonSecondaryStyle)`
    font-size: 30px;
    color: ${color.primaryWhite};
    width: 200px;
    height: 100px;

`
export const DivProfileActionsStyle = styled.div`
    position: relative;

    margin: auto 50px;
    display: flex;
    flex-direction: column;
    gap: 50px;
`

export const SectionProfileMain = styled.section`


`