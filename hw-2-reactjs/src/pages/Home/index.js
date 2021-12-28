import React, { Component } from "react";
import "./styles.css";

import Header from "../../containers/Header";
import InputName from "../../containers/InputName";

export default class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <header>
          <Header />
        </header>
        <main>
          <InputName />
        </main>
      </div>
    );
  }
}
