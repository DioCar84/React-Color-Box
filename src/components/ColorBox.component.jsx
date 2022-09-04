import React, { Component } from "react";
import "./ColorBox.styles.css";

class ColorBox extends Component {
  static defaultProps = {
    colors: [
      "Blue",
      "Pink",
      "Gray",
      "Yellow",
      "Red",
      "Orange",
      "Black",
      "Green",
      "Cyan",
      "Lavender",
    ],
  };

  constructor(props) {
    super(props);
    this.state = {
      color:
        this.props.colors[Math.floor(Math.random() * this.props.colors.length)],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  pickColor() {
    let rand = Math.floor(Math.random() * this.props.colors.length);
    this.setState((st) => {
      while (st.color === this.props.colors[rand]) {
        rand = Math.floor(Math.random() * this.props.colors.length);
      }
      return { color: this.props.colors[rand] };
    });
  }

  handleClick() {
    this.pickColor();
  }

  render() {
    return (
      <div className="ColorBox">
        <div
          onClick={this.handleClick}
          className="ColorBox-box"
          style={{ backgroundColor: this.state.color }}
        ></div>
      </div>
    );
  }
}

export default ColorBox;
