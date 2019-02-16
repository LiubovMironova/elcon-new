import React, { Component } from "react";
import { createStore } from "redux";
import Type from "prop-types";
import { PAGES } from "../../routes/pages";
// import { Provider } from 'react-redux';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: ""
    };
    // this.handleLoginChange = this.handleLoginChange.bind(this);
    // this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  static propTypes = {
    login: Type.string
  };

  static defaultProps = {
    Login: "Vasya"
  };

  userlist(state = [], action) {
    if (action.type === "ADD_LOGIN") {
      return [...state, action.payload];
    }
    return state;
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleLoginClick(event) {
    event.preventDefault();
  }

  fetchLogin = async () => {
    try {
      const login = await fetch(PAGES.API.fetchLogin.path, {
        method: "post",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          login: this.state.login,
          password: this.state.password
        })
      });
      const loginInfo = await login.json();
      return loginInfo.name;
    } catch (e) {
      console.error(e);
    }
  };

  handleLoginChange = event => {
    console.log("login was changed", event.target.value);
    this.setState({ login: event.target.value });
  };

  handlePasswordChange = event => {
    console.log("password was changed", event.target.value);
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      // <form onSubmit={this.handleSubmit}>
      //   <div className="login-page">
      //     <h1>Login Page</h1>
      //     <input type="text" placeholder="login" value={this.state.login} onChange={this.handleLoginChange} />
      //     <input type="text" placeholder="password" value={this.state.password} onChange={this.handlePasswordChange} />
      //     <button onClick={this.fetchLogin}>Login</button>
      //   </div>
      //   <div>
      //   {/* <b>Login user</b>: {this.loginInfo.name} */}
      //   </div>
      // </form>
      <form onSubmit={this.handleSubmit}>
      <div className="form-group login-page">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.login} onChange={this.handleLoginChange} />
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange}/>
      </div>
      {/* <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" for="exampleCheck1">Check me out</label>
      </div> */}
      <button type="submit" className="btn btn-primary" onClick={this.fetchLogin}>Submit</button>
    </form>
    );
  }
}
// const { userInfo, isUserFetching } = this.props;