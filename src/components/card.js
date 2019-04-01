import React, { Component } from "react";
import { Link } from "react-router-dom";

class Card extends Component {
  render() {
    return (
      <Link to="/cars" style={{}}>
        <span className="col-md-4" onClick={this.props.onClick}>
          <div
            className="card mb-3 text-white bg-info mr-2"
            style={{ height: "18rem" }}
          >
            <div className="card-header text-center">
              <h3>Cars</h3>
            </div>
            <div className="card-body" style={{ padding: "7rem" }}>
              <h5>body</h5>
            </div>
          </div>
        </span>
      </Link>
    );
  }
}

export default Card;
