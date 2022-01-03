import React, { Component } from "react";
import "./styles.css";

export default class InputText extends Component {
  render() {
    return (
      <>
        <input
          className="input-text"
          type={this.props.type}
          placeholder={this.props.placeHolder}
          onChange={this.props.handleChange}
          value={this.props.value}
        />
      </>
    );
  }
}
