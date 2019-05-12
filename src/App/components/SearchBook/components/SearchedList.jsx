import React, { Component } from 'react';

import { List } from 'semantic-ui-react';

import { DataList, IconContent, HedaderContent } from '../page/SearchBook.styled';

export class SearchList extends Component {
    constructor(){
        super();

        this.onSearch = this.onSearch.bind(this);
    }

    onSearch(e, List) {
        window.location.href = `card/${List.name}`;
    }
    render(){
        const items = this.props.findList.map((elem) =>{
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