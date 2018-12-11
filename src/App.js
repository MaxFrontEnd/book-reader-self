import React from "react";
import { render } from "react-dom";
import Booklist from "./Booklist";
import AddBook from "./AddBook";

const URL = "http://localhost:3000/books-plans";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: "",
      up: true
    };
    this.componentUpdate = this.componentUpdate.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }
  fetchData() {
    fetch(URL)
      .then(response => {
        response.json().then(data => {
          console.log(typeof data);
          this.setState({ books: data });
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  componentDidMount() {
    this.fetchData();
  }

  componentUpdate() {
    this.fetchData();
  }

  render() {
    let bookList;
    let headLine;
    if (this.state.books !== "") {
      bookList = (
        <Booklist
          books={this.state.books}
          countR={this.count_readed}
          countNr={this.count_not_readed}
        />
      );
    }
    return (
      <div className="main">
        <header className="header">
          <p className="header-title">
            <span className="first-letter">К</span>нигочет
          </p>
        </header>
        {headLine}
        {bookList}
        <footer>
          <AddBook componentUpdate={this.componentUpdate} />
        </footer>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
