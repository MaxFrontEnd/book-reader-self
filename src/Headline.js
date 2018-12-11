import React from "react";
import home_logo from "../assets/home_house.png";
import PropTypes from "prop-types";
class HeadLine extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.count();
  }

  render() {
    return (
      <div className="head-line">
        <span className="head-line-image">
          <img className="home-logo" src={home_logo} alt="logo" />
        </span>

        <span className="details">Прочитано: {this.props.read}</span>
        <span className="details">Не прочитано: {this.props.not_read}</span>
        <span className="details">Всего книг: {this.props.len}</span>
      </div>
    );
  }
}

HeadLine.propTypes = {
  read: PropTypes.number,
  not_read: PropTypes.number,
  len: PropTypes.number,
  count: PropTypes.func
};

export default HeadLine;
