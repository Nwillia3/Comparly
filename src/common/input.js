import React, { Component } from "react";
import axios from "axios";

class Input extends Component {
  state = {
    tags: []
  };

  async componentDidMount() {
    const { data: tags } = await axios.get(
      "https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=TQbVMnVxbQNKumGgUG4AtV6EmTebE0yp"
    );
    this.setState({ tags });
  }

  renderUI() {
    const { results } = this.state.tags;
    if (results) {
      const ui = results.map(item => {
        return <option key={item.list_name}>{item.display_name}</option>;
      });
      return ui;
    }
    return <h1> There is no data</h1>;
  }

  render() {
    const { results } = this.state.tags;
    console.log(results);
    return (
      <select className="form-control form-control-md">
        {this.renderUI()}
      </select>
    );
  }
}

export default Input;
