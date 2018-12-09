import React from "react";
const URL = "http://localhost:3000/books-plans";
import Book from "./Book";
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
    let total = 0;
    if (this.state.books && this.state.books.length > 0) {
      return (
        <div className="book-container">
          {this.state.books.map(book => {
            total = total += 1;
            return (
              <Book
                className="new"
                key={book.id}
                id={book.id}
                title={book.title}
                author={book.author}
                read={book.readed}
                total
              />
            );
          })}
        </div>
      );
    } else {
      return <div>Geting data</div>;
    }
  }
}

export default Booklist;
