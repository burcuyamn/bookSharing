import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { AddBook } from '../component/AddBook/addBook';
import { SearchBook } from '../component/SearchBook/searchBook';
import { BookCard } from '../component/Card/card';
import { AddWaitingBook } from '../component/AddBook/addWaitingBook';

import { Box, Container } from './App.style';

import { Button, Icon } from 'semantic-ui-react'

class App extends Component {

  routeSearchBook = () => {
    window.location.href = `/searchBook`;
  }

  routeAddBook = () => {
    window.location.href = `/addBook`;
  }

  routeBookCard = () => {
    window.location.href = `/card`;
  }
  routeAddWaitingBook = () => {
    window.location.href = `/addWaitingBook`;
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Container>
              <Box>
                <Button animated='fade' color='blue' onClick = { this.routeSearchBook }>
                  <Button.Content visible>Kitap Ara</Button.Content>
                  <Button.Content hidden>
                    <Icon name='search' />
                  </Button.Content>
                </Button>
                <Button animated='fade' color='blue' onClick = { this.routeAddBook } >
                  <Button.Content visible>Kitap Ekle</Button.Content>
                  <Button.Content hidden>
                    <Icon name='add' />
                  </Button.Content>
                </Button>
              </Box>
            </Container>
          </Route>
          <Route path="/addBook">
            <AddBook routeAddBook = {this.routeAddBook} routeSearchBook = {this.routeSearchBook} routeBookCard = {this.routeBookCard} />
          </Route>
          <Route path="/searchBook">
            <SearchBook routeSearchBook = {this.routeSearchBook} routeAddBook = {this.routeAddBook}  />
          </Route>
          <Route path="/card">
            <BookCard routeAddBook = {this.routeAddBook} routeSearchBook = {this.routeSearchBook}  routeBookCard = {this.routeBookCard} />
          </Route>
          <Route path="/addWaitingBook">
            <AddWaitingBook routeAddBook = {this.routeAddBook} routeSearchBook = {this.routeSearchBook}  routeBookCard = {this.routeBookCard} routeAddWaitingBook = {this.routeAddWaitingBook}  />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;