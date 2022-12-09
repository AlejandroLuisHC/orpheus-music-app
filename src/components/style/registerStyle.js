import styled from 'styled-components';
import { DivImgCircleM } from './generalStyle';
import { color, device } from './utils/styleConstants';

export const DivFlexGenres = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 90vw;
    justify-content: center;
    @media ${device.desktop}{
        width: 33vw;
    }
`;

export const DivGenreCircle = styled(DivImgCircleM)`
    background: lightblue;
    width: 85px;
    height: 85px;
    margin: .7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 300ms;
    &:hover{
        transform: scale(1.2)
    }
    p {
        color: white;
        text-shadow: 2px 2px 4px #000000;
    }
    @media ${device.desktop}{
        width: ${props => props.size || "85px"};
        height: ${props => props.size || "85px"};
    }
`;

export const DivSelectedGenreCircle = styled(DivGenreCircle)`
    border: 5px solid ${color.primaryYellow};
`;
