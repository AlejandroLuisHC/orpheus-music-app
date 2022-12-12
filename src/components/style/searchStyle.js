import styled from "styled-components";
import { color } from "./utils/styleConstants";

export const MainFlexContainer = styled.main`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

export const DivSearchResults = styled.div`
    flex-grow: 1;
    overflow-y: auto;
`;

export const SearchResultItem = styled.div`
    width: 100%;
    height: 3.5rem;
    margin: 1rem ;
    display: flex;
    img {
        background: ${color.primaryWhite};
        max-width: 100%;
        max-height: 100%;
        border-radius: .3rem;
    }
    div {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding-left: 1rem;
    }
`;