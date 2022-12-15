import styled from "styled-components";
import { ButtonPrimaryStyle, H2Style } from "./generalStyle";
import { color, device } from "./utils/styleConstants";

export const DivViewMore = styled.div`
    padding: 20px 20px 40px;
    width: 100vw;
`
export const H2StyleViewMore = styled(H2Style)`
    text-align: center;
    font-size: 24px;
`
export const ButtonFilter = styled(ButtonPrimaryStyle)`
    background-color: ${prop=>prop.active ? color.primaryYellow : color.secondaryBlack};
    transform: ${prop=>prop.active && 'scale(1.15)'};
    min-width: 200px;
`
export const DivFilterContainer = styled.div`
    display: flex;
    padding: 10px 20px;
    { /* width: 100vw; */}
    gap: 40px;
    overflow: auto;
    &::-webkit-scrollbar {
        width: 6px;
        height: 6px;
        cursor: pointer;
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
    @media ${device.desktop}{
        width: calc(100vw - 200px);
        &::-webkit-scrollbar {
            width: 6px;
            height: 6px;
            cursor: pointer;
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
export const DivElementsViewMore = styled.div`
    display: flex;
    margin-top: 20px;
    width: 100vw;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
    @media ${device.desktop}{
        width: calc(100vw - 200px);
    }
`