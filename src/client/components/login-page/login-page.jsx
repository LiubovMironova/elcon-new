import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Type from "prop-types";
import { PAGES } from "../../routes/pages";
import { selectEmail, selectPassword } from "../../redux/selectors/login-selectors";
import { fetchLoginThunkAC } from "../../redux/actions/login-actions";

const mapStateToProps = state => ({
  email: selectEmail(state),
  password: selectPassword(state)
  // isRegisterFetching: selectIsRegisterFetching(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchLogin: fetchLoginThunkAC
    },
    dispatch
  );

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  static propTypes = {
    email: Type.string,
    password: Type.string,
    // sequrityQuestion: Type.string,
    isLoginFetching: Type.bool,
    fetchLogin: Type.func
  };

  // static defaultProps = {
  //   login: "Vasya"
  // };

  // handleSubmit(event) {
  //   event.preventDefault();
  // }

  // handleLoginClick(event) {
  //   event.preventDefault();
  // }

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  handleFetchLogin = () => {
    this.props.fetchLogin(this.state);
  };

  render() {
    return (
      <React.Fragment>
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card card-body">
            <h3 className="text-center mb-4">Sign-in</h3>
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
              <input
                className="btn btn-lg btn-primary btn-block"
                value="Sign Me In"
                type="submit"
                onClick={this.handleFetchLogin}
              />
            </fieldset>
          </div>
        </div>
      </div>
      </React.Fragment>
      // <div>
      //   <div className="container py-5">
      //     <div className="row">
      //       <div className="col-md-12">
      //         <h2 className="text-center text-white mb-4">Login Form</h2>
      //         <div className="row">
      //           <div className="col-md-6 mx-auto">
      //             {/* <!-- form card login --> */}
      //             <div className="card rounded-0">
      //               <div className="card-header">
      //                 <h3 className="text-center mb-0">Login</h3>
      //               </div>
      //               <div className="card-body">
      //                 <form className="form" role="form" autoComplete="off" id="formLogin" noValidate="" method="POST">
      //                   <div className="form-group">
      //                     <label htmlFor="email">Email</label>
      //                     <input
      //                       type="text"
      //                       className="form-control form-control-lg rounded-0"
      //                       name="email"
      //                       id="email"
      //                       required=""
      //                     />
      //                     <div className="invalid-feedback">Oops, you missed this one.</div>
      //                   </div>
      //                   <div className="form-group">
      //                     <label>Password</label>
      //                     <input
      //                       type="password"
      //                       className="form-control form-control-lg rounded-0"
      //                       id="pwd1"
      //                       required=""
      //                       autoComplete="new-password"
      //                     />
      //                     <div className="invalid-feedback">Enter your password too!</div>
      //                   </div>
      //                   <button type="submit" className="btn btn-primary btn-lg float-right" id="btnLogin">
      //                     Login
      //                   </button>
      //                 </form>
      //               </div>
      //               {/* <!--/card-block--> */}
      //             </div>
      //             {/* <!-- /form card login --> */}
      //           </div>
      //         </div>
      //         {/* <!--/row--> */}
      //       </div>
      //       {/* <!--/col--> */}
      //     </div>
      //     {/* <!--/row--> */}
      //   </div>
      //   {/* <!--/container--> */}
      // </div>
    );
  }
}

const VisibleLogin = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
export default VisibleLogin;
