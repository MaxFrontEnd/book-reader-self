import React from "react";
import { render } from "react-dom";
import Booklist from "./Booklist";
class App extends React.Component {
  render() {
    return (
      <div>
        <header className="header">
          <p>
            <span className="firstLetter">К</span>ниги Мудрость
          </p>
        </header>
        <Booklist />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
