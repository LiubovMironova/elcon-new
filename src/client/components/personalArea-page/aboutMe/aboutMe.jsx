import React, { Component } from "react";
import { PAGES } from "../../../routes/pages";

export default class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: "",
      aboutMe: ""
    };
  }

  handleLineChange = async e => {
    await this.setState({ aboutMe: e.target.value });
  };

  handleLineFETCH = async () => {
    await fetch(PAGES.API.fetchAbout.path, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text: this.state.text })
    });
  };

  render() {
    return (
      <div>
        <h1>О себе</h1>
        <input onChange={this.handleLineChange} />
        <p />
        <button onClick={this.handleLineFETCH}>Сохранить</button>
        <p />
      </div>
    );
  }
}
