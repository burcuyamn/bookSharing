import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { AddBook, ExpectedBook, NavigationMenu as Menu, SearchBook, Card } from "../components"

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
            <Route path="/add">
              <AddBook />
            </Route>
             <Route path="/search">
              <SearchBook />
            </Route>
            <Route path="/card">
              <Card />
            </Route>
            <Route path="/expected">
              <ExpectedBook />
            </Route>
          </Switch>
        </BrowserRouter>
      </Container>
    );
  }
}

export default App;