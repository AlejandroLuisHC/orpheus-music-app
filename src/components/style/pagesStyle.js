import styled from "styled-components";
import { HrStyle } from "./generalStyle";
import { MainStyle } from "./homeStyle";
import { color, device } from "./utils/styleConstants";


export const DivHeroTitle = styled.div`
padding: 0;
    width: 100%;
    height: 200px;
    background: linear-gradient( rgba(18, 18, 18, 0.5), rgba(18, 18, 18, 1) ), url("https://res.cloudinary.com/drghk9p6q/image/upload/v1675265547/Final-Project-MERN/BannersHero/tomorrowland-wallpaper-preview_sfsxk5.jpg");
    background-position: center;
    background-position:center;
    background-repeat: no-repeat;
    background-size: cover;
    display:flex;
    justify-content: center;
    align-items:center;
    @media ${device.desktop}{
        width: 100%;
        height: 250px;
    }
    
    h1{
        font-size: 50px;
        text-shadow: 20px #000;
        @media ${device.desktop}{
            font-size: 100px;
        }
    }
`

export const DivTitlesList = styled.div`
    text-transform: uppercase;
    font-size: 14px;
    display: grid;
    height: 60px;
    color: ${color.primaryYellow};
    text-transform: uppercase;
    grid-template-columns: 60px repeat(3, 1fr);
    text-align: center;
    align-items: center;

 
    @media ${device.desktop}{
        font-size:16px;

    }
    

`
export const DivDataList = styled(DivTitlesList)`
    font-size: 12px;
    color: ${color.primaryWhite};
    grid-template-columns: 60px repeat(3, 1fr);
    @media ${device.desktop}{
        font-size: 14px;
    }
&:hover {
        background-color: #ffffff22;
        cursor: pointer;
    }
`

export const PTitleList0 = styled.p`
    grid-column: 1;
`
export const PTitleList1 = styled.p`
    grid-column: 2;
    span{
        font-size:10px;
    }
`
export const PTitleList2 = styled.p`
    grid-column: 3;
    span{
        font-size:10px;
    }
`
export const PTitleList3 = styled.p`
    grid-column: 4;
    span{
        font-size:10px;
    }
`
export const PTitleList4 = styled.p`
    grid-column: 5;
`
export const ImgDataList1 = styled.img`
    width: 40px;
    height: 40px;
    margin-left: 10px;
    height: auto;
    object-fit: cover;
    grid-column: 1;
    border-radius: 5px;
    transition: 300ms;  
    grid-column: 1;
` 
export const PDataList2 = styled.p`
    grid-column: 2;
    span{
        color: ${color.primaryYellow};
        font-size:10px;
        @media ${device.desktop}{
            font-size: 12px;
        }
        
    }
` 
export const PDataList3 = styled.p`
    grid-column: 3;
` 
export const PDataList4 = styled.p`
    grid-column: 4;
` 
export const PDataList5 = styled.p`
    grid-column: 5;
` 
