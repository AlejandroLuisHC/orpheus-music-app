import styled from "styled-components";
import { InputStyle } from "./generalStyle";
import { color, device } from "./utils/styleConstants";

export const MainFlexContainer = styled.main`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

export const FormSearchStyle = styled.form`
    display: flex;
    justify-content: center;

    @media ${device.desktop}{      
        justify-content: flex-start;
    }
`

export const InputSearchStyle = styled(InputStyle)`
    width: 92%;
    margin: 1rem;
    padding: 1rem;
    max-width: 360px;
    font-size: 14px;
    text-align: left;
`

export const DivSliders = styled.div`
    flex-grow: 1;
    overflow-y: auto;
`;

export const DivContainerSlider = styled.div`
    /* margin: .5rem; */
    align-items: space-around;
`

export const DivSilderHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5rem;
`

export const DivSliderBody = styled.div`
    display: flex;
    width: calc(100vw - 40px);
    /* height: 13rem; */
    overflow: auto;
    @media ${device.desktop}{
        /* width: calc(100vw - 200px); */

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
`;

export const DivCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 9rem;
    height: 100%;
    padding: .5rem;
    border-radius: 20px;
    text-decoration: none;
    color: ${color.primaryWhite};

    width: ${props => props.resultType === 'events' && '14rem'};

    @media ${device.desktop}{      
        min-width: ${props => props.resultType === 'events' ? '420px' : '220px'};
        height: ${props => props.resultType === 'events' ? '300px' : '270px'};
        margin: .5rem;
        background: ${props => props.resultType !== 'events' && 'hsla(0, 0%, 100%, 0.02)'};
        border-radius: 20px;
        cursor: pointer;
        transition: 300ms;
        &:hover{
            background: ${props => props.resultType !== 'events' && 'rgba(255, 255, 255, .2)'};
        }
    }
`;

export const ImgCard = styled.img`
    background: ${color.primaryWhite};
    min-height: ${props => props.resultType === 'events' ? '190px' : '200px'};
    min-width: ${props => props.resultType === 'events' ? '280px' : '200px'};
    object-fit: cover;
    border-radius: 20px;
    border-radius: ${props => props.resultType === 'users' && "50%"};
    width: ${props => props.resultType === 'events' && '100%'};
    margin-bottom: .3rem;
    transition: 300ms;
    &:hover{
        border-radius: ${props => props.resultType !== 'events' && '50%'};
    }

    @media ${device.desktop}{      
        width: ${props => props.resultType === 'events' ? '420px' : '200px'};
        height: ${props => props.resultType === 'events' ? '250px' : '200px'};
    }
`;