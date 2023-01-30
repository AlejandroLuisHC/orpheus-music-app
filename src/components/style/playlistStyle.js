import styled from "styled-components";
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
    margin-bottom:10px;
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

    }
    img{
        border-radius: calc(50px * 0.5);
        width:200px;
        height:200px;
        object-fit:cover;
        box-shadow: 0 0 20px ${color.primaryYellow};
        border:5px solid ${color.primaryYellow};
        
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
export const H2StyleBlack = styled.p`
   color: #000;
    font-size: 24px;
    font-weight: bold;
    display:none;

    text-transform: uppercase;
    @media ${device.desktop}{
        font-size: 20px;
        display:block;
    }
     &:hover{
        color: ${color.primaryYellow}
    }
`

export const DivPlayListen = styled.button`
    padding:5px 5px;
    border-radius:50px;
    color: #000;
    background: ${color.primaryYellow};
    display:flex;
    flex-direction:row;
    align-items:center;
    border:none;
    cursor:pointer;
     @media ${device.desktop}{
        padding:5px 20px;
        font-size: 12px;
        margin-left:200px;
        justify-content:center;
    }
    &:hover{
        border: 2px solid ${color.primaryYellow};
        background:none;
        color: ${color.primaryYellow}
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
    height: 30px;
    grid-template: 1fr / 30px, repeat(3, 1fr);
    text-align: center;
    align-items: center;
    @media ${device.desktop}{
        grid-template: 1fr / 30px, repeat(4, 1fr);
    }
`
export const DivTitles = styled.div`
        text-transform: uppercase;
        font-size: 18px;
        display: grid;
        grid-template: 30px 1fr, repeat(3, 1fr);
        text-align: center;
        color: ${color.primaryYellow};
        padding-top:20px;
        
        @media ${device.desktop}{
            margin: 0, 10px;
            grid-template: 1fr / 30px, repeat(4, 1fr);
        }
    `

export const ImgListPlaylist = styled.img`
    width: 30px;
    height: auto;
    object-fit: cover;
    grid-column: 1;
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

