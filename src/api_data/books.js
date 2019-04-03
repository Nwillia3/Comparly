import React, { Component } from "react";
import axios from "axios";
import Form from "../common/Form";

class Books extends Component {
  // async componentDidMount() {
  //   const { data: books } = await axios.get(
  //     "https://api.nytimes.com/svc/books/v3/lists.json?list=&api-key=TQbVMnVxbQNKumGgUG4AtV6EmTebE0yp"
  //   );

  //   this.setState({ books });
  //   console.log(this.state.books.results[0]);
  // }

  renderUI() {
    const { results } = this.props.books;
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
    } else {
      return <h1> Data Loading</h1>;
    }
  }

  render() {
    // console.log(this.state.books.results);
    return <div className="container">{this.renderUI()}</div>;
  }
}

export default Books;
