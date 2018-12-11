import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";
import HeadLine from "./Headline";
class Booklist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      read: 0,
      not_read: 0
    };
    this.count = this.count.bind(this);
    this.add_to_readed = this.add_to_readed.bind(this);
    this.remove_from_readed = this.remove_from_readed.bind(this);
  }

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
    if (this.props.books && this.props.books.length > 0) {
      this.props.books.map(book => {
        console.log(book.readed);
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
    if (this.props.books && this.props.books.length > 0) {
      return (
        <div className="book-container">
          <HeadLine
            count={this.count}
            read={this.state.read}
            not_read={this.state.not_read}
            len={this.props.books.length}
          />
          {this.props.books.map(book => {
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
