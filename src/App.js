import React from "react";
import { render } from "react-dom";
import Booklist from "./Booklist";
import HeadLine from "./Headline";
const URL = "http://localhost:3000/books-plans";
class App extends React.Component {
  render() {
    return (
      <div className="main">
        <header className="header">
          <p className="header-title">
            <span className="firstLetter">К</span>нигочет
          </p>
        </header>
        <HeadLine />
        <Booklist />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
