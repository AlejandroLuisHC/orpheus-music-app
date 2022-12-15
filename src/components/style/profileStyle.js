import styled from "styled-components";
import DefaultBanner from '../../assets/img/profile/Banner.png'
import { color } from "./utils/styleConstants";
import { ButtonSecondaryStyle } from "./generalStyle";
import { device } from "./utils/styleConstants"; 
import { Link } from "react-router-dom";

export const DivProfile = styled.div`
    display: grid;
    @media ${device.desktop}{
        height: 100%;
        grid-template-rows: 1fr 5fr 40px;
    }
`
export const DivProfileBanner = styled.div`
    z-index: 1;
    position: relative;
    width: 100%;
    @media ${device.desktop}{
        padding: 0 30px;
        height: 350px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        gap: 50px;
    }
    &::before { 
        
        content: "";
        position: absolute;
        top: 0; 
        left: 0;
        width: 100%; 
        height: 240px;
        opacity: .25; 
        z-index: -1;
        background: url(${DefaultBanner});
        background-position: 50% 100%;
        background-size: cover;
        @media ${device.desktop}{
            height: 350px;
        }
    }
`
export const DivProfileMainContent = styled.div`
    margin-top: 30px;
`
export const DivMobileUserAvatar = styled.div`
   display: flex;
   justify-content: center;
   margin-top: 30px;
`
export const DivUserGeneralData = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
`
export const DivUsernameWorks = styled.div`
    display: flex;
    gap: 80px;
    justify-content: center;
    @media ${device.desktop}{
        justify-content: space-around;
        margin-bottom: 30px;
    }
`
export const DivProfileUserInfoContainer = styled.div`
    width: 100%;
    text-shadow: 0 0 20px black;
    display: flex;
    justify-content: center;
    gap: 50px;
    margin:  20px 0 50px 0;
    @media ${device.desktop}{
        margin: 0;
        justify-content: space-around;
        gap: 20px;

    }
`
export const H1Username = styled.h1`
    font-size: 50px;
    grid-column: 2;
    grid-row: 1 / span 2;
    text-shadow: 0 0 20px black;
    transition: 300ms;
    @media (max-width: ${'1050px'}) {
        font-size: 28px;
    }
`
export const H2UserWorks = styled.h2`
    font-size: 50px;
    text-shadow: 0 0 20px black;
    grid-column: 2;
    grid-row: 1 / span 2;
    transition: 300ms;
    @media (max-width: ${'1050px'}) {
        font-size: 28px;
    }
`
export const PProfileUserInfo = styled.p`
    font-size: 30px;
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
    width: 100%;
    
    display: flex;
    justify-content: center;
    /* margin-top: 20px; */
    gap: 50px;
` 

export const SectionProfileMain = styled.section`

`
export const ButtonEditUser = styled.div` 
    width: fit-content;
    position: absolute;
    right: 8px;
    top: 8px;
    font-size: 20px;
    transition: 300ms;
    cursor: pointer;
    &:hover{
        color: ${color.primaryYellow};
        transform: scale(1.1);
    }
    @media ${device.desktop}{
        font-size: 25px;
        right: 15px;
        top: 15px;    
    }
    
`

// edit view

export const SectionEditUser = styled.section`
    margin-top: 10px;
`
export const DivEditUserContainer = styled.div`
margin-top: 20px;
`
export const DivUserData = styled.div`
    display: flex;
    width: 300px;
    justify-content: space-between;
    @media ${device.desktop} {
        width: 650px;
    }
`

export const DivEditUserData = styled.div`
    height: 40px;
    width: 280px;
    background-color: ${color.primaryWhite};
    border: none;
    font-size: 22px;
    border-radius: calc(40px * .5);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    @media ${device.desktop}{
        justify-content: space-between;
        width: 650px;
    }
`
export const InputEditStyle = styled.input`
    background-color: ${color.primaryWhite};
    border: none;
    font-size: 18px;
    margin-left: 10px;
    text-align: center;
    @media ${device.desktop}{
        width: 600px;
        justify-content: start;
    }
`
export const PTextEdit = styled.p`
    font-size: 24px;
    justify-content: start;
    @media ${device.desktop}{
        font-size: 30px;
    }
`
export const SpanIconClick = styled.span`
    justify-content: end;
    cursor: pointer;
    display: flex;
    font-size: 24px;
    align-items: center;
    &:hover{
        color: ${color.primaryYellow};
    }
    @media ${device.desktop}{
        font-size: 28px;
    }
`
export const ButtonSubmitEdit = styled.button`
    all: unset;
    display: flex;
    align-items: center;
    cursor: pointer;
    color: ${color.primaryBlack};
    &:hover{
        color: ${color.primaryYellow};
    }
    @media ${device.desktop}{
        font-size: 28px;
        margin-right: 5px;
    }
`
export const HrEditProfile = styled.hr`
margin-top: 8px;
width: 100%;
opacity: .5;
`



export const DropdownHeader = styled.div`
    
    font-weight: 500;
    font-size: 2rem;
    color: ${color.primaryWhite};

`

export const DropdownContainer = styled.div`
    position: absolute;
    right: 10px ;
    top: 10px; 
    width: 75px;
    @media ${device.desktop}{
        width: 100px;
    }
`

export const DropdownListContainer = styled.div`

`

export const DropDownList = styled.ul`
    padding: 0;
    margin: 0;
    padding-left: 1em;
    background: #ffffff;
    border: 2px solid #e5e5e5;
    box-sizing: border-box;
    color: #3faffa;
    font-weight: 500;
    &:first-child {
        padding-top: 0.8em;
    }
`

export const ListItem = styled.li`
    list-style: none;
    margin-bottom: 0.8em;
    cursor: pointer;
    font-size: 16px;
    @media ${device.desktop}{
        font-size: 20px;
    }
`