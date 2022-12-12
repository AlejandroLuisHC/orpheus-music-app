import styled from "styled-components";
import { color, device } from "./utils/styleConstants";

export const MainFlexContainer = styled.main`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

export const DivSearchResults = styled.div`
    flex-grow: 1;
    overflow-y: auto;
`;

export const DivCarrousel = styled.div`
    /* background: darkblue; */
    height: 14rem;
    margin: .5rem;
    align-items: space-around;
`

export const DivCarrouselTitle = styled.div`
    /* background: darkgreen; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5rem;
    /* padding-right: 20px;
    margin-bottom: 10px; */
`

export const DivSlider = styled.div`
    display: flex;
    /* width: calc(100vw - 40px); */
    width: 100%;
    max-height: 100%;
    /* overflow: auto; */
    @media ${device.desktop}{
        width: calc(100vw - 200px);
        height: 285px;
        &::-webkit-scrollbar {
            cursor: pointer;
            width: 6px;
            height: 6px;
        }
        &::-webkit-scrollbar-track {
            border-radius: 10px;
            background: #3D3D3D77;
        }
        &::-webkit-scrollbar-thumb{
            border-radius: 10px;
            background: #353535;
        }
        &::-webkit-scrollbar-thumb:hover{
            background: ${color.secondaryBlack};
        }
        &::-webkit-scrollbar-thumb:active{
            background: #484848;
        }
    }
`

export const DivResultCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 9rem;
    height: 11rem;
    padding: .5rem;
    background: hsla(0, 0%, 100%, 0.02);
    border-radius: 20px;

    @media ${device.desktop}{
        min-width: 220px;
        height: 270px;
    }

    img {
        background: ${color.primaryWhite};
        /* height: 100%; */
        object-fit: cover;
        border-radius: 20px;
    }
`;


// export const DivSearchRestultsCarrousel = styled.div`
//     background: darkblue;
//     display: flex;
//     flex-direction: column;
//     gap: 3rem;
// `;