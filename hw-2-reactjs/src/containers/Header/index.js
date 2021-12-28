import React, { Component } from "react";
import "./styles.css";

import Title from "../../components/Title";
import Switch from "../../components/Switch";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isDark: false };
  }
  render() {
    return (
      <header className="header-container">
        <Title />
        <Switch
          isOn={this.state.isDark}
          handleToggle={() => this.setState({ isDark: !this.state.isDark })}
          title="GÜNDÜZ/GECE MODU"
        />
      </header>
    );
  }
}
