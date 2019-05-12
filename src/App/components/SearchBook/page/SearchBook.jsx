import React, { Component } from 'react';
import { Redirect, Link as RouterLink } from "react-router-dom"

import { SearchList } from '../components/SearchedList';
import { LastAdded } from '../components/LastAdded';

import Menu from "../../common/NavigationMenu/NavigationMenu"

import { Button, Header, Icon, Input, Label, Form, Segment } from 'semantic-ui-react';
import { Container, Content, SearchContent, LastAddedList, Search } from './SearchBook.styled';

import { getJSON } from "../../../../util/request"

export default class SearchBook extends Component {
    constructor() {
        super();

        this.state = {
            books: [],
            findList: [],
            currentList: [],
        };

        this.getJsonData = this.getJsonData.bind(this);
        this.searchData = this.searchData.bind(this);
        this.findBook = this.findBook.bind(this);
    }

    componentDidMount() {
        this.getJsonData();
    }

    render() {
        return (
            <Container>
                <Content>
                    <Header
                        as='h2' 
                        icon='search' 
                        content='Kitap Ara' 
                    />
                    <Menu />
                </Content>
                <SearchContent>
                    <Form onSubmit={this.searchData}>
                        <Input onChange={this.onInputChange} id="bookName" placeholder='Kitap ara' />
                        <Button onClick={this.searchData} color='blue' animated='fade'>
                            <Button.Content hidden>Ara</Button.Content>
                            <Button.Content visible>
                                <Icon name='search' />
                            </Button.Content>
                        </Button>
                    </Form>
                    <Label color='blue'>
                        <h3>Son Eklenenler</h3>
                    </Label>
                </SearchContent>
                <Content>
                    <Search>
                        {this.state.findList.length === 0
                            ?
                            null
                            : <SearchList findList={this.state.findList} />
                        }
                    </Search>
                    <LastAddedList>
                        <LastAdded books={this.state.books} />
                    </LastAddedList>
                </Content>
                <Segment>
                        <Header as='h4' icon='wait' content='Aradığın kitabı bulamadıysan beklenenlere ekleyebilirsin..' />
                        <Button color='red' onClick={this.routeAddWaitingBook}>Ekle</Button>
                    </Segment>
            </Container>
        );
    }

    getJsonData() {
        getJSON({ url: "books" })
            .then((resolve) => {

                resolve.sort((a, b) => {
                    const tempa = a.date
                    const tempb = b.date
                    const nameA = tempa.split('/')
                    const nameB = tempb.split('/')
                    if (nameA[2] < nameB[2]) {
                        return 1
                    }
                    if (nameA[2] > nameB[2]) {
                        return -1
                    }
                    if (nameA[2] === nameB[2]) {
                        if (nameA[0] < nameB[0]) {
                            return 1
                        }
                        if (nameA[0] > nameB[0]) {
                            return -1
                        }
                        if (nameA[0] === nameB[0]) {
                            if (nameA[1] < nameB[1]) {
                                return 1
                            }
                            if (nameA[1] > nameB[1]) {
                                return -1
                            }
                            if (nameA[1] === nameB[1]) {
                                return 0
                            }
                        }
                    }
                    return 0
                })
                this.setState({
                    books: resolve
                });
            })
            .catch((error) => console.log(error));
    }

    searchData(e) {
        e.preventDefault();
        let value = this.state.findList.length;
        if (value !== 0) {
            this.state.findList.map((element) => {
                return window.location.href = `card/${element.book}`;
            });
        }
    }

    slugify = function (text) {
        var trMap = {
            'çÇ': 'c',
            'ğĞ': 'g',
            'şŞ': 's',
            'üÜ': 'u',
            'ıİ': 'i',
            'öÖ': 'o'
        };
        for (var key in trMap) {
            text = text.replace(new RegExp('[' + key + ']', 'g'), trMap[key]);
        }
        return text.replace(/[^-a-zA-Z0-9\s]+/ig, '') // remove non-alphanumeric chars
            .replace(/\s/gi, "-") // convert spaces to dashes
            .replace(/[-]+/gi, "-") // trim repeated dashes
            .toLowerCase();
    }

    findBook(value) {
        let bookSlug = this.slugify(value);
        const filteredBook = this.state.books.filter((a) =>
            a.book.toLowerCase().indexOf(bookSlug.toLowerCase()) !== -1 ||
            a.author.toLowerCase().indexOf(bookSlug.toLowerCase()) !== -1
        )
        this.setState({
            findList: filteredBook
        });
    }

    onInputChange = (e) => {
        this.findBook(e.currentTarget.value);
    }

    routeAddWaitingBook = () => {
        window.location.href = `/addWaitingBook`
    }
}