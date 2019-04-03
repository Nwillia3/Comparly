import React, { Component } from "react";

class Input extends Component {
  state = {
    tags: []
  };

  render() {
    // const { results } = this.state.tags;
    // console.log(results);
    return (
      <select className="form-control form-control-md">
        {this.props.renderUI()}
      </select>
    );
  }
}

export default Input;
