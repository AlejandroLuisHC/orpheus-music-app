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
    margin: .5rem;
    align-items: space-around;
`

export const DivCarrouselTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5rem;
`

export const DivSlider = styled.div`
    display: flex;
    width: calc(100vw - 40px);
    height: 13rem;
    overflow: auto;
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
    height: 100%;
    padding: .5rem;
    border-radius: 20px;
    text-decoration: none;
    color: ${color.primaryWhite};

    @media ${device.desktop}{
        min-width: 220px;
        height: 270px;
    }

    img {
        background: ${color.primaryWhite};
        height: 8rem;
        width: 8rem;
        object-fit: cover;
        border-radius: 20px;
        margin-bottom: .3rem
    }

    p {
        font-size: .8em;

    }
`;


// export const DivSearchRestultsCarrousel = styled.div`
//     background: darkblue;
//     display: flex;
//     flex-direction: column;
//     gap: 3rem;
// `;