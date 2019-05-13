import React, { Component } from 'react'
import { Route } from "react-router-dom"

import { List } from 'semantic-ui-react'
import { DataList, IconContent, HedaderContent } from '../page/SearchBook.styled'

export class LastAdded extends Component{
    constructor(){
        super();

        this.onSearch = this.onSearch.bind(this);
    }

    onSearch(e, List) {
        window.location.href = `card/${List.name}`;
    }
    render(){
        let count=0;
        const items = this.props.books.map((elem) =>{

            if(count === 14){
                return null
            }

            count++;

            return(  
                <List.Item name={elem.book} onClick={this.onSearch} key = {elem.id}>
                    <DataList>
                        <IconContent>
                            <List.Icon name="book" size="large" verticalAlign='middle'/>
                        </IconContent>
                        <HedaderContent>
                            <List.Content>
                                <List.Header>{elem.bookName}</List.Header>
                                <List.Description>{elem.author}</List.Description>
                            </List.Content>
                        </HedaderContent>
                    </DataList>
                </List.Item>            
            );  
        });

        return (
                <List divided relaxed>
                    {items}
                </List>           
        );
    }
}