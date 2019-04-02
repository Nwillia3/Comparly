import React, { Component } from "react";
import Nba from "./pages/nba";
import Book from "./pages/book";
import NavBar from "./common/navbar";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="container">
          <Switch>
            <Route path="/nba" component={Nba} />
            <Route path="/books" component={Book} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
