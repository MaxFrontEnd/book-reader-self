import React from "react";
import PropTypes from "prop-types";

const URL = "http://localhost:3000/books-plans/";

class AddBook extends React.Component {
  constructor() {
    super();
    this.state = {
      title: null,
      author: null,
      readed: false
    };
    this.change = this.change.bind(this);
    this._add = this._add.bind(this);
  }
  _add(event) {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      console.log(this.state);
      let data = this.state;
      let options = {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(data)
      };
      fetch(URL, options)
        .then(() => {
          console.log("data is updated");
          this.props.rend();
        })
        .catch(err => {
          console.error(err);
        });
    } else {
      alert("Поля обязательны для заполнения");
    }
  }

  change(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  render() {
    return (
      <div>
        <p className="add-book"> Добавить книгу</p>
        <form className="form" id="form" onSubmit={this._add}>
          <label htmlFor="title">
            {" "}
            Название Книги
            <input type="text" name="title" onChange={this.change} />
          </label>
          <label htmlFor="author">
            {" "}
            Автор Книги
            <input type="text" name="author" onChange={this.change} />
          </label>
          <input type="submit" value="Добавить" />
        </form>
      </div>
    );
  }
}

AddBook.propTypes = {
  rend: PropTypes.func
};
export default AddBook;
