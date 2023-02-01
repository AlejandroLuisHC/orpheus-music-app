import styled from "styled-components";
import { HrStyle } from "./generalStyle";
import { MainStyle } from "./homeStyle";
import { color, device } from "./utils/styleConstants";

export const MainDiv = styled(MainStyle)`
padding: 20px 20px 40px 20px;
    width: 100%;
    @media ${device.desktop}{
        padding: 0 0 40px 0;
    } 
`

export const BackgroundDiv = styled.div`
    padding: 0;
    width: 100%;
    height: 333px;
    background-position: center;
    background: ${props => `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1) ), url('${props.img}')`};
    background-position:center;
    background-repeat: no-repeat;
    background-size: cover;
    @media ${device.desktop}{
        width: 100%;
        height: 320px;
    }
`

export const AllBackground = styled(BackgroundDiv)`
    height:100vh;
        @media ${device.desktop}{
        width: 100%;

    }
`

export const DivImgContain = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: nowrap;
    padding-top:30px;
    
    @media ${device.desktop}{
        flex-direction: row;
        justify-content: start;
        gap: 20px;
    }
    img{
        border-radius: calc(50px * 0.5);
        width:200px;
        height:200px;
        object-fit:cover;
        box-shadow: 0 0 20px ${color.primaryYellow};
        border: 5px solid ${color.primaryYellow};
        
        @media ${device.desktop}{
            border-radius: calc(50px * 0.5);
            width:250px;
            height:250px;
            border:10px solid ${color.primaryYellow};
        }
    }
`

export const DivimgPadding = styled.div`
    @media ${device.desktop}{
        padding: 0 50px;
        }
`

export const H1Style = styled.h1`
    color: ${color.primaryYellow};
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    cursor:pointer;
    text-transform: uppercase;
    padding-top:20px;
    transition: 300ms;

    @media ${device.desktop}{
        font-size: 42px;
        text-align: start;
    }
    @media (min-width: 1250px) {
        font-size: 48px;
    }
`

export const H2Style = styled.h2`
    color: ${color.primaryYellow};
    font-weight: bold;
    text-transform: uppercase;
    font-size: 20px;
    display:none;

    @media (min-width: 1250px) {
        display:block;
        font-size: 20px;
    }
    span{
        font-size: 15px;
    }
`

export const PStyleOwnership = styled(H2Style)`
    font-size:15px;
    display:block;
    margin: 10px 0;

@media (min-width: 1250px) {
    
    font-size: 20px;
}
`

export const PStyleBlack = styled.p`
    color: ${color.primaryBlack};
    font-size: 20px;
    font-weight: bold;
    display:none;
    text-transform: uppercase;

    @media (min-width: 1250px){
        display:block;
    }
`
export const Pstyle = styled.p`
    color: ${color.primaryWhite};
    font-weight: bold;
    font-size: 12px;
    cursor:pointer;
    text-shadow: 0 0 20px #000;
    display:none;

    @media (min-width: 1250px){
        display:block;
    }
`

export const DivPlayListen = styled.button`
    border-radius: 50%;
    color: ${color.primaryBlack};
    background: ${color.primaryYellow};
    min-height: 50px;
    min-width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border:none;
    transition: 300ms;
    cursor:pointer;
    &:hover{
        box-shadow: 0 0 20px ${color.primaryYellow};
        border: 5px solid ${color.primaryYellow};
        background:none;
        color: ${color.primaryYellow}
    }

    @media ${device.desktop}{
        min-height: 100px;
        min-width: 100px;
        margin-left: 2vw;
        margin-right: 1vw;
        &:hover{
            box-shadow: 0 0 20px ${color.primaryYellow};
            border: 10px solid ${color.primaryYellow};
            background:none;
            color: ${color.primaryYellow}
        }
    }
`

export const ImgListPlaylist = styled.img`
    width: 40px;
    height: 40px;
    margin-left: 10px;
    height: auto;
    object-fit: cover;
    grid-column: 1;
    border-radius: 5px;
    transition: 300ms;
`

export const DivTracks = styled.div`
    font-size: 14px;
    display: grid;
    height: 60px;
    grid-template-columns: 60px repeat(3, 1fr);
    text-align: center;
    align-items: center;
 
    @media ${device.desktop}{
        grid-template-columns: 60px repeat(4, 1fr);
    }
    &:hover {
        background-color: #ffffff22;
        cursor: pointer;
    }
    &:hover ${ImgListPlaylist} {
        border-radius: 50%;
    }
`
export const DivInfoTrack = styled(DivTracks)`
    margin-top:-10px;
    background-color: #ffffff22;
    @media ${device.desktop}{
        cursor: pointer;

    }
    
`

export const DivTracksAlbum = styled(DivTracks)`
    grid-template-columns: 60px repeat(2, 2fr) 1fr;
    @media ${device.desktop}{
            grid-template-columns: 60px repeat(2, 2fr) 1fr;
}

`

export const DivTitles = styled.div`
    text-transform: uppercase;
    font-size: 18px;
    display: grid;
    height: 60px;
    grid-template-columns: 60px repeat(3, 1fr);
    text-align: center;
    align-items: center;
    justify-items:center;
    color: ${color.primaryYellow};    
    @media ${device.desktop}{
        margin: 0, 10px;
            grid-template-columns: 60px repeat(4, 1fr);
    }
`

export const DivTitlesTracks = styled(DivTitles)`
    text-transform: uppercase;
    font-size: 18px;
    display: grid;
    height: 60px;
    grid-template-columns: 60px repeat(3, 1fr);
    text-align: center;
    align-items: center;
    justify-items:center;
    color: ${color.primaryYellow};   
    margin-top:50px; 
    @media ${device.desktop}{
            grid-template-columns: 60px repeat(4, 1fr);
    }
`
export const DivTitlesAlbum = styled(DivTitles)`
    grid-template-columns: 60px repeat(2, 2fr) 1fr;
    @media ${device.desktop}{

            grid-template-columns: 60px repeat(2, 2fr) 1fr;;
    }
`

export const HrDivStyle = styled(HrStyle)`
    margin: 0;
`

export const PDataTrack1 = styled.p`
    grid-column: 2;
`
export const PDataTrack2 = styled.p`
    grid-column: 3;
`
export const PDataTrack3 = styled.p`
    display: none;
    @media ${device.desktop}{
        display: block;
        grid-column: 4;
    }
`
export const PDataTrack4 = styled.p`
    grid-column: 4;
    @media ${device.desktop}{
        grid-column: 5;
    }
`

