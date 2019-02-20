import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Type from "prop-types";
import { PAGES } from "../../routes/pages";
import { selectEmail, selectPassword } from "../../redux/selectors/register-selector";
import { fetchRegisterThunkAC } from "../../redux/actions/register-actions";

const mapStateToProps = state => ({
  email: selectEmail(state),
  password: selectPassword(state)
  // isRegisterFetching: selectIsRegisterFetching(state)
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
      password: ""
      // sequrityQuestion: ""
    };
  }

  static propTypes = {
    email: Type.string,
    password: Type.string,
    // sequrityQuestion: Type.string,
    isRegisterFetching: Type.bool,
    fetchRegister: Type.func
  };

  // static defaultProps = {
  //   Login: "Vasya"
  // };

  // handleSubmit(event) {
  //   event.preventDefault();
  // }

  // handleRegisterClick(event) {
  //   event.preventDefault();
  // }

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  // handleAnswerChange = event => {
  //   this.setState({ sequrityQuestion: event.target.value });
  // };

  handleFetchRegister = () => {
    this.props.fetchRegister(this.state);
  };

  render() {
    return (
      // <div className="container-fluid bg-light py-3">
      <React.Fragment>
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
                  value={this.state.password}
                  type="password"
                  onChange={this.handlePasswordChange}
                />
              </div>
              {/* <div className="form-group has-success">
                <input
                  className="form-control input-lg"
                  placeholder="Confirm Password"
                  name="password"
                  value={this.state.password}
                  type="password"
                  onChange={this.handleUserInfoChange}
                />
              </div> */}
              {/* <div className="form-group">
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
              </div> */}
              {/* <div className="checkbox">
                <label className="small">
                  <input name="terms" type="checkbox" />I have read and agree to the <a href="#">terms of service</a>
                </label>
              </div> */}
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
      </React.Fragment>
      // </div>
    );
  }
}

const VisibleRegister = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterPage);
export default VisibleRegister;
