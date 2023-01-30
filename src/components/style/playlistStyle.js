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

export const DivImgContain = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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

    @media ${device.desktop}{
        font-size: 48px;
        text-align: start;
    }
`

export const H2Style = styled.h2`
    color: ${color.primaryYellow};
    font-size: 24px;
    font-weight: bold;
    cursor:pointer;
    text-transform: uppercase;
    display:none;

    @media ${device.desktop}{
        font-size: 20px;
        display:block;
    }
`

export const PStyleBlack = styled.p`
   color: #000;
    font-size: 24px;
    font-weight: bold;
    display:none;

    text-transform: uppercase;
    @media ${device.desktop}{
        font-size: 20px;
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
        margin-left: .2vw;
        &:hover{
            box-shadow: 0 0 20px ${color.primaryYellow};
            border: 10px solid ${color.primaryYellow};
            background:none;
            color: ${color.primaryYellow}
        }
    }
`

export const Pstyle = styled.p`
    color: ${color.primaryWhite};
    font-size: 24px;
    font-weight: bold;
    cursor:pointer;
    text-shadow: 0 0 20px #000;
    display:none;

    @media ${device.desktop}{
        font-size: 12px;
        display:block;
    }
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
    &:hover{
        background-color: #ffffff22;
        cursor: pointer;
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

export const HrDivStyle = styled(HrStyle)`
    margin: 0;
`

export const ImgListPlaylist = styled.img`
    width: 40px;
    height: auto;
    object-fit: cover;
    grid-column: 1;
    border-radius: 50%;
    @media ${device.desktop}{
        width:40px;
    }
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

