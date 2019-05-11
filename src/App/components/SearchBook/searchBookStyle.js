import styled from "styled-components"

export const Container = styled.div`
    display: flex;

    flex-direction: column;
    justify-content:flex-start;
    align-items: flex-start;

    padding:30px 10px 10px 15px;
    width:100%; 
    
    .list{
        width:50%; 
    }
    .ui.segment{
        display: flex;

        flex-direction: row;
        justify-content:space-between;
        align-items: flex-start;

        width:100%;
        
        margin-left:20px;
        margin-right:10px;

        .button{
            width:10%;
        }
    }
`;
export const Content = styled.div`
    display: flex;

    flex-direction: row;
    justify-content:space-between;
    align-items: flex-start;

    width:100%;

    .header{
        width:100%;   
    }
    padding-top:10px;
   
`;
export const SearchContent = styled.div`
    display: flex;

    flex-direction: row;
    align-items:flex-start;

    width:100%; 
    height:100%;
    padding:50px 20px 20px 20px;   
    .form{
        display:flex;

        flex-direction: row;
        justify-content:space-between;

        width:50%;

        .button{
            width:29%;
        }
        .input{
            width:70%;
        }
    }
    .label{
        width:50%;
    }
`;

export const MenuContainer = styled.div`
    display: flex;

    flex-direction: row;
    justify-content:flex-end;
    align-items: flex-end;

    width:100%;
`;
export const DataList = styled.div`
    display: flex;

    justify-content:space-between;

    width:50%;
`;

export const IconContent = styled.div`
    display: flex;

    flex:0%;
    justify-content:flex-start;

    width:100%;
`;

export const HedaderContent = styled.div`
    display: flex;

    flex:50;
    justify-content:flex-start;

    width:100%;
`;

export const Search = styled.div`
    display: flex;

    justify-content:flex-start;
    width:50%;

    .list{
        width:100%;
    }
`;

export const LastAddedList = styled.div`
    display: flex;

    flex-direction: column;
    justify-content:flex-start;
    width:50%;
    .list{
        width:100%;
    }
`;
