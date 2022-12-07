import styled from 'styled-components';
import { DivImgCircleM } from './generalStyle';

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
