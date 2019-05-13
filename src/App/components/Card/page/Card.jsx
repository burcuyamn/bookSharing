import React from 'react';

import { getJSON } from "../../../../util/request"

import { Icon, Image, Card } from 'semantic-ui-react';

import Menu from "../../common/NavigationMenu/NavigationMenu"

import { Container, Content, CardWrapper } from './CardStyle.styled'

export default class BookCard extends React.Component {
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

    render() {
        const items = this.state.findedBook.map((element) => {
            return (
                <Container>
                    <CardWrapper>
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
                    </CardWrapper>
                </Container>
            );
        });
        return (
            <Container>
                <Content>
                    <Menu />
                </Content>
            </Container>
        )
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
}