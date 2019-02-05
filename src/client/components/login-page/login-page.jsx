import React, { Component } from "react";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: ""
    };
    this.handleLoginChange = this.handleLoginChange.bind(this);
  }

  handleLoginChange(event) {
    console.log("login was changed", event.target.value);
    this.setState({ login: event.target.value });
  }

  render() {
    return (
      <div className="login-page">
        <h1>Login Page</h1>
        <input type="text" placeholder="login" value={this.state.login} onChange={this.handleLoginChange} />
        <button>Login</button>
      </div>
    );
  }
}
