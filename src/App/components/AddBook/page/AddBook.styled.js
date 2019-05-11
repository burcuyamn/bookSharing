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
    flex-direction: row;
    justify-content:flex-start;
    align-items: flex-start;

    width:100%;    

    .header{
        width:100%;   
    }
`;

export const FormWrapper = styled.form`
    display: flex;

    flex-direction: row;
    justify-content: center;
    align-items: center;

    padding:150px 10px 10px 10px;
    height: 100%;
    width: 100%;
`;