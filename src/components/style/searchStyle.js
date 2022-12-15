import styled from "styled-components";
import { InputStyle } from "./generalStyle";
import { device } from "./utils/styleConstants";

export const DivSearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 40px;
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