import React, { Component } from 'react';
// import Type from 'prop-types';
// import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { PAGES } from '../../routes/pages';
// import { bemClassNameFactory } from '../../utils/bem';
import AboutMe from './aboutMe/aboutMe';
import ServiceGive from './serviceGive/serviceGive';
import ServiceWant from './serviceWant/serviceWant';
// import GeoLocation from './geoLocation/geoLocation'
import Meetings from './meettings/meetings';
import PeopleList from './selectPeople/searchPeople'

export default class PersonalArea extends Component {

  render() {
    return (
      <div>
        < BrowserRouter >
          <div>
            <li>
              <Link to={PAGES.aboutMe.path}>о себе</Link>
            </li>
            <li>
              <Link to={PAGES.serviceGive.path}>услуги могу предоставить</Link>
            </li>
            <li>
              <Link to={PAGES.serviceWant.path}>услуги хочу</Link>
            </li>
            {/* <li>
              <Link to={PAGES.geoLocation.path}>геолокация</Link>
            </li> */}
            <li>
              <Link to={PAGES.meetings.path}>встречи</Link>
            </li>
            <li>
              <Link to={PAGES.searchPeople.path}>Найти специалиста</Link>
            </li>

            <Route path={PAGES.aboutMe.path} component={AboutMe} />
            <Route path={PAGES.serviceWant.path} component={ServiceWant} />
            <Route path={PAGES.serviceGive.path} component={ServiceGive} />
            {/* <Route path={PAGES.geoLocation.path} component={GeoLocation} /> */}
            <Route path={PAGES.meetings.path} component={Meetings} />
            <Route path={PAGES.searchPeople.path} component={PeopleList} />
          </div>
        </BrowserRouter >
      </div>
    );
  }
}
