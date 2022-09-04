import React, { Component } from "react";
import ColorBox from "./ColorBox.component";
import "./ColorPicker.styles.css";

class ColorPicker extends Component {
  static defaultProps = {
    numBoxes: 18,
  };

  render() {
    const boxes = Array.from({ length: this.props.numBoxes }).map(() => (
      <ColorBox />
    ));
    return <div className="ColorPicker">{boxes}</div>;
  }
}

export default ColorPicker;
