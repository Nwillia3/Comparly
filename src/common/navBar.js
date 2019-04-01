import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          Comparly
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/cars"> Cars </Link>
            <Link to="/crypto"> Crypto </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
