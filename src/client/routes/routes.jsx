import React from "react";
import { Switch, Route } from "react-router-dom";
import { Redirect } from "react-router";
import { PAGES } from "./pages";
import App from "../components/app/app";
// import HomePage from "../components/home-page/home-page";
import InfoPage from "../components/info-page/info-page";
import Page404 from "../components/page404/page404";
import LoginPage from "../components/login-page/login-page";
import PersonalArea from "../components/personalArea-page/personalArea";
import Register from "../components/register-page/register";

const WrappedApp = (Component, props) => (
  <App>
    <Component {...props} />
  </App>
);
// appName="Fancy React Redux App"

export default () => (
  <Switch>
    {/* <Route exact path={PAGES.home.path} render={props => WrappedApp(HomePage, props)} /> */}
    <Route exact path={PAGES.info.path} render={props => WrappedApp(InfoPage, props)} />
    <Route exact path={PAGES.login.path} render={props => WrappedApp(LoginPage, props)} />
    <Route exact path={PAGES.personalArea.path} render={props => WrappedApp(PersonalArea, props)} />
    <Route exact path={PAGES.page404.path} render={props => WrappedApp(Page404, props)} />
    <Route exact path={PAGES.register.path} render={props => WrappedApp(Register, props)} />
    <Route path="/" render={() => <Redirect to={PAGES.page404.path} />} />
  </Switch>
);
