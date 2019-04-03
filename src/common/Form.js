import React, { Component } from "react";
import Input from "./input";
import axios from "axios";
import Books from "../api_data/Books";

class Form extends Component {
  state = {
    tags: [],
    list_name: "",
    books: []
  };

  async componentDidMount() {
    const { data: tags } = await axios.get(
      "https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=TQbVMnVxbQNKumGgUG4AtV6EmTebE0yp"
    );
    this.setState({ tags });

    console.log(this.state.tags.results);
  }

  renderUI = () => {
    const { results } = this.state.tags;
    if (results) {
      const ui = results.map(item => {
        return (
          <option key={item.list_name} value={item.display_name}>
            {item.list_name}
          </option>
        );
      });
      return ui;
    }
  };

  genreChange = async e => {
    this.setState({ list_name: e.target.value });
    const { list_name: genre } = this.state;

    const url = `https://api.nytimes.com/svc/books/v3/lists.json?list=${genre}&api-key=TQbVMnVxbQNKumGgUG4AtV6EmTebE0yp`;

    const { data: books } = await axios.get(url);

    this.setState({ books });
  };

  render() {
    const { books } = this.state;
    return (
      <React.Fragment>
        <form onChange={this.genreChange}>
          <Input renderUI={this.renderUI} />
        </form>
        <Books books={books} />
      </React.Fragment>
    );
  }
}

export default Form;
