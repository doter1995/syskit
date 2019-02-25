import React, { Component } from "react";
import PropTypes from "prop-types";
import OverView from "./overview";
export default class index extends Component {
  static propTypes = {
    key: PropTypes.string,
    payload: PropTypes.object
  };

  render() {
    return (
      <div>
        <OverView />
      </div>
    );
  }
}
