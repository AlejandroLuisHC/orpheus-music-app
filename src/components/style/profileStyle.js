import styled from "styled-components";
import DefaultBanner from '../../assets/img/profile/Banner.png'
import { color } from "./utils/styleConstants";
import { ButtonSecondaryStyle } from "./generalStyle";


export const DivProfile = styled.div`
    display: grid;
    height: 100%;
    grid-template-rows: 1fr 5fr 40px;
`
export const DivProfileBanner = styled.div`
    z-index: 1;
    position: relative;
    padding: 0 30px;
    width: 100%;
    height: 40vh;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap: 40px;
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
        background-size: cover;
    }
`
export const DivUserAvatar = styled.div`
    margin: auto 0 auto 20px;
`
export const DivUserGeneralData = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: auto 0;
`
export const DivUsernameWorks = styled.div`
    display: flex;
    gap: 2vw;
`
export const DivProfileUserInfoContainer = styled.div`
    width: 100%;
    text-shadow: 0 0 20px black;
    display: flex;
    gap: 20px;
`
export const H1Username = styled.h1`
    font-size: 40px;
    grid-column: 1 / span 2;
    grid-row: 1;
    text-shadow: 0 0 20px black;
    transition: 300ms;
    @media (max-width: ${'1050px'}) {
        font-size: 28px;
    }
`
export const H2UserWorks = styled.h2`
    font-size: 40px;
    text-shadow: 0 0 20px black;
    grid-column: 2;
    grid-row: 1;
    transition: 300ms;
    @media (max-width: ${'1050px'}) {
        font-size: 28px;
    }
`
export const PProfileUserInfo = styled.p`
    font-size: 20px;
    color: ${color.primaryYellow};
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 300ms;
    @media (max-width: ${'1050px'}) {
        font-size: 16px;
    }
`
export const SpanProfileUserNumbers = styled.span`
    font-size: 30px;
    color: ${color.primaryWhite};
    transition: 300ms;
    @media (max-width: ${'1050px'}) {
        font-size: 20px;
    }
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
    @media (max-width: ${'1050px'}) {
        width: 130px;
        height: 52.5px;
        font-size: 15px;
    }
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