import styled from 'styled-components';
import { DivImgCircleM } from './generalStyle';
import { device } from "./utils/styleConstants"
export const DivFlexGenres = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const DivGenreCircle = styled(DivImgCircleM)`
    background: lightblue;
    width: 85px;
    height: 85px;
    margin: .7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
        color: white;
        text-shadow: 2px 2px 4px #000000;
    }
`;
export const CircleImgL = styled.img`
    width:110px;
    height:110px;
    border-radius: 50%;
    @media ${device.desktop}{
        width: 200px;
        height: 200px;
        border-radius: 50%;
    } 
`
export const CircleImgM = styled.img`
    width:70px;
    height:70px;
    border-radius: 50%;
    @media ${device.desktop}{
        width: 130px;
        height: 130px;
        border-radius: 50%;
    }
`

export const CircleImgS= styled.img`
    width:30px;
    height:30px;
    border-radius: 50%;
    @media ${device.desktop}{
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }    
`