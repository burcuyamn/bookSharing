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
export const MenuContainer = styled.div`
    display: flex;

    flex-direction: column;
    justify-content:flex-end;
    align-items: flex-end;

    width:100%;
`;

export const ItemContainer = styled.div`
    display: flex;

    flex-direction: column;
    justify-content:flex-start;
    align-items:flex-start;

    width:100%;

    .ui.items{    
       .item{
           padding:0px;
           .middle.aligned.content{
                display:flex;
                flex-direction:column;
           }
       }
    }
   
`;
