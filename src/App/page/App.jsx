import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { AddBook, NavigationMenu as Menu, SearchBook, Card } from "../components"
// import { BookCard } from '../../component/Card/card';
// import { AddWaitingBook } from '../../component/AddBook/addWaitingBook';

import { MenuWrapper, Container } from './App.styled';

class App extends React.Component {
  render() {
    return (
      <Container>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <MenuWrapper>
                <Menu center />
              </MenuWrapper>
            </Route>
            <Route path="/add-book">
              <AddBook />
            </Route>
             <Route path="/search-book">
              <SearchBook />
            </Route>
            <Route path="/card">
              <Card />
            </Route>
            {/*<Route path="/addWaitingBook">
              <AddWaitingBook />
            </Route> */}
          </Switch>
        </BrowserRouter>
      </Container>
    );
  }
}

export default App;