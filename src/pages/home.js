import React, { Component } from "react";
import "../styles/home.css";
import Card from "../components/card";
import { Link } from "react-router-dom";

class Home extends Component {
  handleLink = () => {
    console.log("clicked");
  };

  render() {
    return (
      <React.Fragment>
        <h1 className="text-center"> Choose a Product</h1>
        <div className="container">
          <div
            className="row"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none"
            }}
          >
            <Link to="/cars">
              <Card onClick={this.handleLink} />
            </Link>
            <Link to="/crypto">
              <Card onClick={this.handleLink} />
            </Link>
            <Link to="/cars">
              <Card onClick={this.handleLink} />
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
