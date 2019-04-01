import React, { Component } from "react";
import Car from "./pages/cars";
import Crypto from "./pages/crypto";
import navBar from "./common/navBar";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/home";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <navBar />
        <div className="container">
          <Switch>
            <Route path="/cars" component={Car} />
            <Route path="/crypto" component={Crypto} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
