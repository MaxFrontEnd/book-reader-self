import React from "react";
import { render } from "react-dom";
import Booklist from "./Booklist";
import AddBook from "./AddBook";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      up: true
    };
  }
  render() {
    return (
      <div className="main">
        <header className="header">
          <p className="header-title">
            <span className="first-letter">К</span>нигочет
          </p>
        </header>
        <Booklist />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
