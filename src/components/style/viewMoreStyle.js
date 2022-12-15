import styled from "styled-components";
import { ButtonPrimaryStyle, H2Style } from "./generalStyle";
import { color, device } from "./utils/styleConstants";

export const DivViewMore = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 20px 40px;
    width: 100vw;
    @media ${device.desktop}{
        width: calc(100vw - 206px);
    }
`
export const H2StyleViewMore = styled(H2Style)`
    font-size: 28px;
`
export const ButtonFilter = styled(ButtonPrimaryStyle)`
    background-color: ${prop=>prop.active ? color.primaryYellow : color.secondaryBlack};
    transform: ${prop=>prop.active && 'scale(1.15)'};
    min-width: 90px;
    max-width: 90px;
    font-size: 14px;
`
export const DivFilterContainer = styled.div`
    display: flex;
    padding: 10px 20px;
    { /* width: 100vw; */}
    gap: 15px;
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
    margin-left: -20px;
    margin-top: 20px;
    width: 100vw;
    gap: 10px;
    
    flex-wrap: wrap;
    justify-content: center;
    @media ${device.desktop}{
        width: calc(100vw - 200px);
    }
`