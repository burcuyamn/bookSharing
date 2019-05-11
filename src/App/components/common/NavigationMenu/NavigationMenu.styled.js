import styled from "styled-components"

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.center ? "center" : "flex-end"};
    align-items: center;

    width:100%;
`;