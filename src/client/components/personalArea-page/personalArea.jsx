import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { PAGES } from "../../routes/pages";
import AboutMe from "./aboutMe/aboutMe";
import ServiceGive from "./serviceGive/serviceGive";
import ServiceWant from "./serviceWant/serviseWant";
import GeoLocation from "./geoLocation/geoLocation";
import Meetings from "./meettings/meetings";

export default class PersonalArea extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <li>
              <Link to={PAGES.aboutMe.path}>о себе</Link>
            </li>
            <li>
              <Link to={PAGES.serviceWant.path}>услуги могу</Link>
            </li>
            <li>
              <Link to={PAGES.serviceGive.path}>услуги надо</Link>
            </li>
            <li>
              <Link to={PAGES.geoLocation.path}>геолокация</Link>
            </li>
            <li>
              <Link to={PAGES.meetings.path}>встречи</Link>
            </li>
            <Route path={PAGES.aboutMe.path} component={AboutMe} />
            <Route path={PAGES.serviceWant.path} component={ServiceWant} />
            <Route path={PAGES.serviceGive.path} component={ServiceGive} />
            <Route path={PAGES.geoLocation.path} component={GeoLocation} />
            <Route path={PAGES.meetings.path} component={Meetings} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
