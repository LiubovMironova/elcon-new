import React, { Component } from "react";
// import Type from 'prop-types';
// import { Link } from 'react-router-dom';
// import { BrowserRouter, Route, Link } from "react-router-dom";
// import { PAGES } from '../../routes/pages';
// import { bemClassNameFactory } from '../../utils/bem';
// import AboutMe from './aboutMe/aboutMe';
// import ServiceGive from './serviceGive/serviceGive';
// import ServiceWant from './serviceWant/serviceWant';
// import GeoLocation from './geoLocation/geoLocation'
// import Meetings from './meettings/meetings';
import SearchPeople from "./selectPeople/searchPeople";

export default class PersonalArea extends Component {
  render() {
    return (
      <React.Fragment>
        <SearchPeople />
      </React.Fragment>
      // <div>
      //   < BrowserRouter >
      //     <div>
      //       <li>
      //         <Link to={PAGES.searchPeople.path}>Найти специалиста</Link>
      //       </li>
      //       <Route path={PAGES.searchPeople.path} component={PeopleList} />
      //     </div>
      //   </BrowserRouter >

      //   <PeopleList />

      //   <h1>Услуги могу</h1>
      //   <p></p>
      //   <p>Отметьте галочкой услуги, которые вы можете выполнить:</p>
      //   < ServiceGive tag="G" />
      //   <h1>Услуги хочу</h1>
      //   <p></p>
      //   <p>Отметьте галочкой услуги, которые вы хотите получить:</p>
      //   < ServiceGive tag="W" />
      // </div>
    );
  }
}
