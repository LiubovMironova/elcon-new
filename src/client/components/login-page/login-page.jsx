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
    login: "Vasya"
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
          "Content-Type": "application/json"
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
      <div>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-center text-white mb-4">Bootstrap 4 Login Form</h2>
              <div className="row">
                <div className="col-md-6 mx-auto">
                  {/* <!-- form card login --> */}
                  <div className="card rounded-0">
                    <div className="card-header">
                      <h3 className="mb-0">Login</h3>
                    </div>
                    <div className="card-body">
                      <form className="form" role="form" autoComplete="off" id="formLogin" noValidate="" method="POST">
                        <div className="form-group">
                          <label htmlFor="uname1">Username</label>
                          <input
                            type="text"
                            className="form-control form-control-lg rounded-0"
                            name="uname1"
                            id="uname1"
                            required=""
                          />
                          <div className="invalid-feedback">Oops, you missed this one.</div>
                        </div>
                        <div className="form-group">
                          <label>Password</label>
                          <input
                            type="password"
                            className="form-control form-control-lg rounded-0"
                            id="pwd1"
                            required=""
                            autoComplete="new-password"
                          />
                          <div className="invalid-feedback">Enter your password too!</div>
                        </div>
                        <div>
                          <label className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" />>
                            <span className="custom-control-indicator" />
                            <span className="custom-control-description small text-dark">
                              Remember me on this computer
                            </span>
                          </label>
                        </div>
                        <button type="submit" className="btn btn-success btn-lg float-right" id="btnLogin">
                          Login
                        </button>
                      </form>
                    </div>
                    {/* <!--/card-block--> */}
                  </div>
                  {/* <!-- /form card login --> */}
                </div>
              </div>
              {/* <!--/row--> */}
            </div>
            {/* <!--/col--> */}
          </div>
          {/* <!--/row--> */}
        </div>
        {/* <!--/container--> */}
      </div>
    );
  }
}
// const { userInfo, isUserFetching } = this.props;

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
// <form onSubmit={this.handleSubmit}>
//   <div className="form-group login-page">
//     <label htmlFor="exampleInputEmail1">Email address</label>
//     <input
//       type="email"
//       className="form-control"
//       id="exampleInputEmail1"
//       aria-describedby="emailHelp"
//       placeholder="Enter email"
//       value={this.state.login}
//       onChange={this.handleLoginChange}
//     />
//     <small id="emailHelp" className="form-text text-muted">
//       We'll never share your email with anyone else.
//     </small>
//   </div>
//   <div className="form-group">
//     <label htmlFor="exampleInputPassword1">Password</label>
//     <input
//       type="password"
//       className="form-control"
//       id="exampleInputPassword1"
//       placeholder="Password"
//       value={this.state.password}
//       onChange={this.handlePasswordChange}
//     />
//   </div>
//   {/* <div className="form-group form-check">
//   <input type="checkbox" className="form-check-input" id="exampleCheck1" />
//   <label className="form-check-label" for="exampleCheck1">Check me out</label>
// </div> */}
//   <button type="submit" className="btn btn-primary" onClick={this.fetchLogin}>
//     Submit
//   </button>
// </form>
