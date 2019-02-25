import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.scss";

export default class Sider extends Component {
  static propTypes = {
    list: PropTypes.array
  };
  handleClick = e => {
    console.log("click ", e);
  };

  render() {
    return (
      <ul className="slider">
        {this.props.list.map((item, index) => {
          return (
            <li key={`${index}`} onClick={this.handleClick}>
              {item.title}
            </li>
          );
        })}
      </ul>
    );
  }
}
