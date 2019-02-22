import React, { Component } from "react";
import beachImg from "./beach.jpg";
import oneImg from "./img1.jpg";
import twoImg from "./img2.jpg";

export default class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        {/* <h1>Home Page</h1> */}
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={beachImg} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={oneImg} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={twoImg} className="d-block w-100" alt="..." />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}
