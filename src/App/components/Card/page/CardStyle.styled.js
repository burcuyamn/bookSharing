import styled from "styled-components"

export const Container = styled.div`
    display: flex;

    flex-direction: column;
    justify-content:flex-start;
    align-items: flex-start;

    padding:30px 10px 10px 15px;
    width:100%; 

`;
export const Content = styled.div`
    display: flex;

    flex-direction: column;
    justify-content:space-between;
    align-items: flex-start;

    width:100%;    

    .header{
        width:100%;   
    }
`;
export const CardWrapper = styled.div`
    display: flex;

    margin: 0;
    padding: 0;
    
    background-color: black;
`;