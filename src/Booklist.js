import React from "react";
import { render } from "react-dom";
import { isArray } from "util";
const URL = "http://localhost:3000/books-plans";

class Booklist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }
  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", URL, true);
    xhr.onload = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          this.setState({ books: JSON.parse(xhr.responseText) }, () => {});
        }
      } else {
        console.error(xhr.statusText);
      }
    };
    xhr.onerror = () => {
      console.error(xhr.statusText);
    };

    xhr.send();
  }

  render() {
    if (this.state.books && this.state.books.length > 0) {
      return (
        <div>
          {this.state.books.map((book, index) => {
            return <p key={book.id}>{book.title}</p>;
          })}
        </div>
      );
    } else {
      return <div>Geting data</div>;
    }
  }
}

export default Booklist;
