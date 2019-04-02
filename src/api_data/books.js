import React, { Component } from "react";
import axios from "axios";
import Input from "../common/input";

class Books extends Component {
  state = {
    books: {},
    tags: {}
  };

  async componentDidMount() {
    const { data: books } = await axios.get(
      "https://api.nytimes.com/svc/books/v3/lists.json?list=Hardcover%20Nonfiction&api-key=TQbVMnVxbQNKumGgUG4AtV6EmTebE0yp"
    );

    this.setState({ books });
    console.log(this.state.books.results[0]);
  }

  getList = () => {
    console.log("list");
  };

  renderUI() {
    const { results } = this.state.books;
    if (results) {
      const ui = results.map(item => {
        return (
          <ul key={item.book_details[0].primary_isbn10}>
            <h1>{item.book_details[0].title}</h1>
            <li>{item.book_details[0].description}</li>
            <li>{item.book_details[0].author}</li>
          </ul>
        );
      });
      return ui;
    }
  }

  render() {
    console.log(this.state.books.results);
    return (
      <div className="container">
        <div>
          <Input />
        </div>
        {this.renderUI()}
      </div>
    );
  }
}

export default Books;
