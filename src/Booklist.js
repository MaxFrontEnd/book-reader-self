import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";
import HeadLine from "./Headline";
import AddBook from "./AddBook";
const URL = "http://localhost:3000/books-plans";
class Booklist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
      read: 0,
      not_read: 0
    };
    this.books = null;
    this.count = this.count.bind(this);
    this.add_to_readed = this.add_to_readed.bind(this);
    this.add_to_not_readed = this.add_to_not_readed.bind(this);
    this.remove_from_readed = this.remove_from_readed.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.rendeIt = this.rendeIt.bind(this);
  }

  fetchData() {
    fetch(URL)
      .then(response => {
        response.json().then(data => {
          Booklist.books = data;
          // Для отрисовки после попадания данных в переменную books
          this.setState({ done: !this.state.done });
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.fetchData();
  }

  rendeIt() {
    this.fetchData();
    this.add_to_not_readed();
  }

  add_to_not_readed = () => {
    this.setState(state => {
      return { not_read: (state.not_read += 1) };
    });
  };
  add_to_readed = () => {
    this.setState(state => {
      return { read: (state.read += 1), not_read: (state.not_read -= 1) };
    });
  };

  remove_from_readed = () => {
    this.setState(state => {
      return { read: (state.read -= 1), not_read: (state.not_read += 1) };
    });
  };

  count() {
    if (Booklist.books && Booklist.books.length > 0) {
      Booklist.books.map(book => {
        book.readed
          ? this.setState(state => {
              return { read: (state.read += 1) };
            })
          : this.setState(state => {
              return { not_read: (state.not_read += 1) };
            });
      });
    }
  }

  render() {
    if (Booklist.books && Booklist.books.length > 0) {
      return (
        <div className="book-container">
          <HeadLine
            rend={this.rendeIt}
            count={this.count}
            read={this.state.read}
            not_read={this.state.not_read}
            len={Booklist.books.length}
          />
          {Booklist.books.map(book => {
            return (
              <Book
                className="new"
                key={book.id}
                id={book.id}
                title={book.title}
                author={book.author}
                read={book.readed}
                count={this.count}
                add_to_readed={this.add_to_readed}
                remove_from_readed={this.remove_from_readed}
              />
            );
          })}
          <div>
            <AddBook rend={this.rendeIt} />
          </div>
        </div>
      );
    } else {
      return <div>Geting data</div>;
    }
  }
}

Booklist.propTypes = {
  countR: PropTypes.func,
  countnR: PropTypes.func,
  books: PropTypes.array
};
export default Booklist;
