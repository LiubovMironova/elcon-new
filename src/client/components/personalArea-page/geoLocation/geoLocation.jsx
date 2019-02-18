import React, { Component } from "react";


export default class GeoLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      geoLocation: false
    };
  }


  render() {
    return (
            <div>
                <h1>Геолокация</h1>
                <p></p>
              {/* Галочка ДА - НЕТ */}
                <p></p>
            </div>
    );
  }
}
