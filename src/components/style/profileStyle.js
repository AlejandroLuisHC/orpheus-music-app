import styled from "styled-components";
import { color } from "./utils/styleConstants";
import { ButtonSecondaryStyle } from "./generalStyle";
import { device } from "./utils/styleConstants";

export const DivProfile = styled.div`
    display: grid;
    padding-bottom: 40px;
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
        background: url("https://res.cloudinary.com/drghk9p6q/image/upload/v1671240029/Final-Project-MERN/BannersHero/Banner_yndjpp.webp");
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
padding: 10px;
`

export const DivUserData = styled.div`
    display: flex;
    width: 350px;
    justify-content: space-between;
    @media ${device.desktop} {
        width: 650px;
    }
`

export const DivEditUserData = styled.div`
    height: 40px;
    width: 350px;
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
    cursor: pointer;
    @media ${device.desktop}{
        width: 100px;
    }
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
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 0.8em;
    cursor: pointer;
    font-size: 16px;
    @media ${device.desktop}{
        font-size: 20px;
    }
`

export const DivModalWork = styled.div`
    background-color: ${color.primaryBlack};
    padding: 20px;
    border-radius: 25px;
    justify-content: center;
    text-align: center;
    width:100%;
    @media ${device.desktop}{
        width: 500px;
        height: auto;
    }
`

export const DivModalOptions = styled.div`
    margin-top: 40px;
    display:flex;
    gap:20px;
    @media ${device.desktop}{
        justify-content: space-around;
    }
`

export const DivModalClose = styled.div`
    display:flex;
    justify-content: space-between;
    align-items:center;
    color: ${color.primaryWhite};
    bottom: 5px;
    right: 5px;
    cursor: pointer;
    h1{
        font-size: 20px;
        cursor: default;
    }
    &:hover  {
        color: ${color.primaryYellow};
        h1 {
            color: ${color.primaryWhite};
        }
    }
`
export const DivModalCloseTracks = styled.div`
    color: ${color.primaryWhite};
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 20px;
    cursor: pointer;
    &:hover {
        color: ${color.primaryYellow};
    }
`

export const DivModalTrack = styled.div`
    background-color: ${color.primaryBlack};
    padding: 20px;
    border-radius: 25px;
    justify-content: center;
    text-align: center;
    @media ${device.desktop}{
        width: 800px;
    }
`

export const DivModalAlbum = styled.div`
    background-color: ${color.primaryBlack};
    padding: 20px;
    border-radius: 25px;
    justify-content: center;
    text-align: center;
    @media ${device.desktop}{
        width: 500px;
        height: 800px;
    }
`

export const FormTracks = styled.form`
/*     display: flex;
    justify-content: center;
    margin-top: 30px; */
    padding: 20px;
    border-radius: 25px;
    justify-content: center;
    text-align: center;
    @media ${device.desktop}{
        width: 800px;
        height: auto;
    }
`

export const InputDescriptionStyle = styled.input`
    background-color: ${color.primaryWhite};
    height: 100px;
    width: 280px;
    border: none;
    font-size: 18px;
    border-radius: calc(40px * .5);
    margin: 10px auto;
    text-align: center;
    display: column;
`

export const DivTrackBody = styled.div`
    text-align: center;
    display:flex;
    justify-content: center;
    flex-direction: column;
    height: auto;
    @media ${device.desktop}{
        text-align: center;
        display:flex;
        justify-content: center;
        flex-direction: column;
        height: auto;
    }
`
export const DivColumns = styled.div`
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items: center;
    @media ${device.desktop}{
        display:flex;
        flex-direction: row;
        gap: 40px;
    }
    `
export const DivBlockForm = styled.div`
    margin-bottom:10px;
    display: flex;
    justify-content:center;
    align-items:center;
    @media ${device.desktop}{
        margin-bottom:40px;   
    }
    figcaption{
        font-size:10px;
        display:none;
        @media ${device.desktop}{
            display:block;
            
        }
    }
`
export const DivTrackImg = styled.div`
    text-align: center;
`
export const ImgTrack = styled.img`
    display:none;
    @media ${device.desktop}{
        width: 200px;
        height: 200px;
        border-radius: 25px;
        display:block;
    }
`
export const FormUpdateImg = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    @media ${device.desktop}{
        font-size: 50px;
    }
`
export const InputImg = styled.input`
    position: absolute;
    visibility: hidden;
`

export const LabelUpdateImg = styled.label`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const DivDangerZone = styled.div`
    text-align: center;
    border-radius: 25px;
    padding: 15px;
    background-color: rgb(252, 56, 43, .3 );

`
export const DivEmptyProfile = styled.div`
    text-align: center;
    padding-top: 20px;
`