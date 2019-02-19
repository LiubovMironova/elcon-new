import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Type from "prop-types";
import { PAGES } from "../../routes/pages";
import { selectEmail, selectSequrityQuestion, selectIsRegisterFetching } from "../../redux/selectors/register-selector";
import { fetchRegisterThunkAC } from "../../redux/actions/register-actions";

const mapStateToProps = state => ({
  email: selectEmail(state),
  sequrityQuestion: selectSequrityQuestion(state),
  isRegisterFetching: selectIsRegisterFetching(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchRegister: fetchRegisterThunkAC
    },
    dispatch
  );

class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      sequrityQuestion: ""
    };
  }

  static propTypes = {
    email: Type.string,
    sequrityQuestion: Type.string,
    isRegisterFetching: Type.bool,
    fetchRegister: Type.func
  };

  // static defaultProps = {
  //   Login: "Vasya"
  // };

  userlist(state = [], action) {
    if (action.type === "ADD_LOGIN") {
      return [...state, action.payload];
    }
    return state;
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleRegisterClick(event) {
    event.preventDefault();
  }

  fetchLogin = async () => {
    try {
      const login = await fetch(PAGES.API.fetchRegister.path, {
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

  handleEmailChange = event => {
    console.log("login was changed", event.target.value);
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = event => {
    console.log("password was changed", event.target.value);
    this.setState({ password: event.target.value });
  };

  handleAnswerChange = event => {
    console.log("login was changed", event.target.value);
    this.setState({ sequrityQuestion: event.target.value });
  };

  handleFetchRegister = () => {
    this.props.fetchRegister(this.state);
  };

  render() {
    console.log("this.props = ", this.props);
    return (
      // <div className="container-fluid bg-light py-3">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card card-body">
            <h3 className="text-center mb-4">Sign-up</h3>
            {/* <div className="alert alert-danger">
                <a className="close font-weight-light" data-dismiss="alert" href="#">
                  ×
                </a>
                Password is too short.
              </div> */}
            <fieldset>
              <div className="form-group has-error">
                <input
                  className="form-control input-lg"
                  placeholder="E-mail Address"
                  name="email"
                  value={this.state.email}
                  type="text"
                  onChange={this.handleEmailChange}
                />
              </div>
              <div className="form-group has-success">
                <input
                  className="form-control input-lg"
                  placeholder="Password"
                  name="password"
                  value=""
                  type="password"
                  onChange={this.handlePasswordChange}
                />
              </div>
              <div className="form-group has-success">
                <input
                  className="form-control input-lg"
                  placeholder="Confirm Password"
                  name="password"
                  value=""
                  type="password"
                  onChange={this.handlePasswordChange}
                />
              </div>
              <div className="form-group">
                <select className="form-control input-lg">
                  <option selecterd="">Sequrity Question</option>
                </select>
              </div>
              <div className="form-group">
                <input
                  className="form-control input-lg"
                  placeholder="Sequrity Answer"
                  name="answer"
                  value={this.state.sequrityQuestion}
                  type="text"
                  onChange={this.handleAnswerChange}
                />
              </div>
              <div className="checkbox">
                <label className="small">
                  <input name="terms" type="checkbox" />I have read and agree to the <a href="#">terms of service</a>
                </label>
              </div>
              <input
                className="btn btn-lg btn-primary btn-block"
                value="Sign Me Up"
                type="submit"
                onClick={this.handleFetchRegister}
              />
            </fieldset>
          </div>
        </div>
      </div>
      // </div>
    );
  }
}

const VisibleRegister = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterPage);
export default VisibleRegister;
