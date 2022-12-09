import styled from "styled-components";
import DefaultBanner from '../../assets/img/profile/Banner.png'
import { color } from "./utils/styleConstants";
import { ButtonSecondaryStyle } from "./generalStyle";


export const DivProfile = styled.div`
    display: grid;
    height: 100%;
    grid-template-rows: 1fr 5fr 50px;
`
export const DivProfileBanner = styled.div`
    z-index: 1;
    position: relative;
    padding: 0 30px;
    width: 100%;
    height: 40vh;
    display: flex;
    gap: 40px;
    justify-content: space-evenly;
    &::before { 
        content: "";
        position: absolute;
        top: 0; 
        left: 0;
        width: 100%; 
        height: 350px;
        opacity: .25; 
        z-index: -1;
        background: url(${DefaultBanner});
        background-position: 50% 100%;
    }
`
export const DivUserAvatar = styled.div`
    margin: auto 0 auto 20px;
`
export const DivUserGeneralData = styled.div`
    display: grid;
    grid-template: 100px 100px / 300px 300px;
    margin: auto 0;
`
export const H1Username = styled.h1`
    font-size: 40px;
    grid-column: 1 / span 2;
    grid-row: 1;
    text-shadow: 0 0 20px black;
`
export const H2UserWorks = styled.h2`
    font-size: 40px;
    text-shadow: 0 0 20px black;
    grid-column: 2;
    grid-row: 1;
`
export const DivProfileUserInfoContainer = styled.div`
    grid-row: 2;
    grid-column: 1 /span 2;
    width: 100%;
    text-shadow: 0 0 20px black;
    display: flex;
    gap: 30px;
`
export const PProfileUserInfo = styled.p`
    font-size: 20px;
    color: ${color.primaryYellow};
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const SpanProfileUserNumbers = styled.span`
    font-size: 30px;
    color: ${color.primaryWhite};
`
export const ButtonProfileStyle = styled(ButtonSecondaryStyle)`
    font-size: 20px;
    border: 3px solid ${color.secondaryYellow};
    background-color: #12121299;
    color: ${color.primaryWhite};
    border-radius: calc(70px * .5);
    width: 180px;
    height: 70px;
    transition: 300ms;
    &:hover {
        background-color: #121212;
    }
`
export const DivProfileActionsStyle = styled.div`
    margin: auto 0;
    display: flex;
    flex-direction: column;
    gap: 50px;
`

export const SectionProfileMain = styled.section`
    grid-row: 2;
`