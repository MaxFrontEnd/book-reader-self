import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
//let classNames = require('classnames');
const URL = "http://localhost:3000/books-plans/";

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btnClass: "book",
      read: false
    };
    this.create = this.create.bind(this);
  }

  componentDidMount() {
    let readed = this.props.read;
    this.setState({ read: readed });
  }
  create(data) {
    let options = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "PATCH",
      body: JSON.stringify(data)
    };
    fetch(URL + `${this.props.id}`, options)
      .then(() => {
        console.log("data is updated");
      })
      .catch(err => {
        console.error(err);
      });
  }
  _read = event => {
    event.preventDefault();
    this.setState(
      {
        read: !this.state.read
      },
      () => {
        this.create({ readed: this.state.read });
      }
    );
  };
  render() {
    let statusClass = classNames({
      book: true,
      "readed-book": this.state.read
    });
    let btnClass = classNames({
      btn: true,
      readed: this.state.read
    });
    let bookIsReaded = this.state.read ? "Прочитано" : "Не прочитано";
    return (
      <div className={statusClass}>
        <span className="info">{this.props.title}</span>
        <span className="info">{this.props.author}</span>
        <span>
          <button className={btnClass} onClick={this._read}>
            {bookIsReaded}
          </button>
        </span>
        <span>
          <button className="btn delete">Удалить</button>
        </span>
      </div>
    );
  }
}

Book.propTypes = {
  read: PropTypes.bool,
  id: PropTypes.number,
  title: PropTypes.string,
  author: PropTypes.string
};

export default Book;
