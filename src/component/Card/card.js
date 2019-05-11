import React, { Component } from 'react';

import { getJSON } from "../../util/request";

import { Icon, Image, Item, Menu, Card } from 'semantic-ui-react';
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
                <Card>
                    <Image src={element.bookImage} wrapped ui={false} />
                    <Card.Content>
                    <Card.Header>{element.bookName}</Card.Header>
                    <Card.Meta>
                        <span className='author'>{element.author}</span>
                    </Card.Meta>
                    <Card.Description>
                        {element.email}
                    </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    <a>
                    <Icon name='like' />
                        22 Like
                    </a>
                    </Card.Content>
                </Card>
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