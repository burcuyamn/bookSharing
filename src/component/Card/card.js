import React, { Component } from 'react';

import { getJSON } from "../../util/request";

import { Item, Menu } from 'semantic-ui-react';
import { ItemContainer, Container, Content, MenuContainer} from './cardStyle'

export class BookCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            books: [],
            findedBook: [],
            selectedBook: window.location.href.split("/")[window.location.href.split("/").length - 1]
        }
        this.getJsonData = this.getJsonData.bind(this);
    }

    componentDidMount() {
        this.getJsonData();
    }
    getJsonData() {
        getJSON({ url: "books" })
            .then((resolve) => {
                const bookArray = []
                resolve.forEach(element => {
                    if (element.book === this.state.selectedBook) {
                        bookArray.push(element)
                    }
                });
                this.setState({
                    books: resolve,
                    findedBook: bookArray
                });
            })
            .catch((error) => console.log(error));
    }

    render() {
        const items = this.state.findedBook.map((element) => {
            return (
                <Item key={element.id}> 
                    <Item.Image  size='tiny' src={element.bookImage} />
                    <Item.Content verticalAlign='middle'>
                        <Item.Header>
                            {element.bookName}
                        </Item.Header> 
                        <Item.Meta>
                            {element.author}
                        </Item.Meta>
                        <Item.Header>
                            {element.email}
                        </Item.Header>                              
                    </Item.Content>
                </Item>    
            );

        });
        return (
            <Container>
                <Content>
                    <MenuContainer>
                        <Menu pointing>
                            <Menu.Item name='Kitap Ara' onClick={this.props.routeSearchBook} />
                            <Menu.Item name='Kitap Ekle' onClick={this.props.routeAddBook} />
                        </Menu>
                    </MenuContainer>
                </Content>
                <ItemContainer>
                    <Item.Group>
                        {items}
                    </Item.Group>
                </ItemContainer>
            </Container>
        );
    }
}