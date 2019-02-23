import React from "react";
import ReactDOM from "react-dom";
import { Button } from "antd";

class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        Hello,{this.props.name}
        <Button type="primary">Primary</Button>
      </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<HelloMessage name="Doter" />, mountNode);
