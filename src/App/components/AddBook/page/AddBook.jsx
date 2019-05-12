import React from 'react'
import Moment from 'moment'

import Menu from "../../common/NavigationMenu/NavigationMenu"

import { postJSON, getJSON } from "../../../../util/request"

import { Button, Form, Header, Icon, Input } from 'semantic-ui-react';
import { Container, Content, FormWrapper } from './AddBook.styled';

export default class AddBook extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            books: [],
            book: '',
        };

        this.addBook = this.addBook.bind(this);
    }

    componentDidMount(){
        getJSON({
            
        })
    }

    render() {
        return (
            <Container>
                <Content>
                    <Header
                        as='h2' 
                        icon='add' 
                        content='Kitap Ekle' 
                    />
                    <Menu />
                </Content>
                <FormWrapper>
                    <Form>
                        <Form.Group widths='equal'>
                            <Form.Field
                                id='bookName'
                                control={Input}
                                label='Kitap Adı'
                                placeholder='zorunlu'
                            />
                            <Form.Field
                                id='author'
                                control={Input}
                                label='Yazarı'
                                placeholder='zorunlu'
                            />
                            <Form.Field
                                id='printingYear'
                                control={Input}
                                label='Basım Yılı'
                                placeholder='isteğe bağlı'
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Field
                                id='fullName'
                                control={Input}
                                label='Ad Soyad'
                                placeholder='isteğe bağlı'
                            />
                            <Form.Field
                                id='email'
                                control={Input}
                                label='E-mail'
                                placeholder='zorunlu'
                            />
                            <Form.Field
                                id='phone'
                                control={Input}
                                label='Telefon'
                                placeholder='isteğe bağlı'
                            />
                        </Form.Group>
                        <Button floated="right" animated='fade' color='blue' onClick={this.addBook}>
                            <Button.Content visible>Kaydet</Button.Content>
                            <Button.Content hidden>
                                <Icon name='add' />
                            </Button.Content>
                        </Button>
                    </Form>
                </FormWrapper>
            </Container>
        );
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

    addBook(e) {
        e.preventDefault();
        let bookName = document.getElementById('bookName').value;
        let book = this.slugify(bookName);
        let author = document.getElementById('author').value;
        let printingYear = document.getElementById('printingYear').value;
        let fullName = document.getElementById('fullName').value;
        let email = document.getElementById('email').value;
        let phone = document.getElementById('phone').value;
        let dateNow = new Date();
        const formattedDate = Moment(dateNow).format('L');

        if (!(bookName === "" || bookName === null ||
            email === "" || email === null ||
            author === "" || author === null
        )) {
            postJSON({
                url: "books",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    bookName: bookName,
                    book: book,
                    author: author,
                    printingYear: printingYear,
                    bookImage: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
                    fullName: fullName,
                    email: email,
                    phone: phone,
                    date: formattedDate,
                }),
            })
                .then(() => {                   
                    this.onSearch(book);
                })
                .catch((error) => {
                    console.log("Hata");
                })
        }
        else {
            alert("Kitapın adı, yazarı ve mail adresiniz boş olamaz.");
        }
    }

    onSearch = (book) => {
        window.location.href = `card/${book}`;
    }
}