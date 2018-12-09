import React from "react";
import home_logo from "../assets/home_house.png";

class HeadLine extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      readed: 0,
      not_readed: 0
    };
  }

  render() {
    return (
      <div className="head-line">
        <span className="head-line-image">
          <img className="home-logo" src={home_logo} alt="logo" />
        </span>

        <span className="details">Прочитано: {this.state.readed}</span>
        <span className="details">Не прочитано: {this.state.not_readed}</span>
        <span className="details">Всего книг: {this.state.total}</span>
      </div>
    );
  }
}

export default HeadLine;
