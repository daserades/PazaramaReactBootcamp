import React, { Component } from "react";

import "./styles.css";

import { AiOutlineSwapRight } from "react-icons/ai";

import SubTitle from "../../components/SubTitle";
import InputText from "../../components/InputText";
import PrimaryButton from "../../components/PrimaryButton";

export default class InputName extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", inputName: "" };
  }

  render() {
    const todoDisplay = () => {
      console.log("name:" + this.state.inputName);
      // localStorage.setItem("userName", this.state.name);
    };
    const handleChange = (event) => {
      this.setState({ inputName: event.target.value });
    };
    return (
      <article className="input-name-container">
        <header>
          <SubTitle subTitle="Hoşgeldiniz, adınız nedir?" />
        </header>
        <section>
          <InputText
            value={this.state.inputName}
            handleChange={handleChange}
            type="text"
            placeHolder="Adınızı giriniz..."
          />
          <PrimaryButton
            onPress={todoDisplay}
            buttonText="Devam Et"
            icon={<AiOutlineSwapRight />}
          />
        </section>
      </article>
    );
  }
}
