import React, { Component } from "react";
import "./styles.css";

export default class PrimaryButton extends Component {
  render() {
    return (
      <>
        <button className="primary-button" onClick={this.props.onPress}>
          {this.props.buttonText}
          <i className="button-icon">{this.props.icon}</i>
        </button>
      </>
    );
  }
}
