import React from "react";
import ReactDOM from "react-dom";
import Slider from "./Slider";
import Layout from "./Layout";
import "./index.css";

import { sliderList } from "./config";

class HelloMessage extends React.Component {
  render() {
    return (
      <div className="container">
        <Slider list={sliderList} />
        <Layout />
      </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<HelloMessage name="Doter" />, mountNode);
