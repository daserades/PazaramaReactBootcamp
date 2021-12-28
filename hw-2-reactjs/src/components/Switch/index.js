import React, { Component } from "react";
import "./styles.css";

export default class Switch extends Component {
  render() {
    return (
      <div className="switch-container">
        <p className="s-title">{this.props.title}</p>
        <label className="switch">
          <input
            type="checkbox"
            checked={this.props.isOn}
            onChange={this.props.handleToggle}
          />
          <span className="slider round"></span>
        </label>
      </div>
    );
  }
}
