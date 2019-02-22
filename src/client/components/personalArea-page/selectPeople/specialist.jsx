import React, { Component } from "react";
import img1 from "../../../pictures/image1.jpg";
import img2 from "../../../pictures/image2.jpg";
import img3 from "../../../pictures/image3.jpg";
import img4 from "../../../pictures/image4.jpg";
import img5 from "../../../pictures/image5.jpg";
import img6 from "../../../pictures/image6.jpg";
import img7 from "../../../pictures/image7.jpg";
import img8 from "../../../pictures/image8.jpg";
import img9 from "../../../pictures/image9.jpg";

export default class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pics: []
    };
  }

  writeList = arr => {
    const tempList = [];
    for (let i = 0; i < arr.length; i++) {
      tempList.push(
        <div key={i}>
          <li>{arr[i]}</li>
        </div>
      );
    }
    return tempList;
  };

  beginWork = async () => {
    let arrOfPics = Array(9).fill("");
    arrOfPics[1] = img1;
    arrOfPics[2] = img2;
    arrOfPics[3] = img3;
    arrOfPics[4] = img4;
    arrOfPics[5] = img5;
    arrOfPics[6] = img6;
    arrOfPics[7] = img7;
    arrOfPics[8] = img8;
    arrOfPics[9] = img9;

    await this.setState({ pics: arrOfPics });
  };

  componentDidMount() {
    this.beginWork();
  }

  render() {
    return (
      <div className="container-fluid card mb-3">
        <div className="row  p-3">
          <div className="col p-3">
            <img className="rounded" src={this.state.pics[this.props.numPic]} width="200px" alt="Card image cap" />
          </div>
          <div className="col-7 d-flex align-items-center p-1">
            <div>
              <h1>{this.props.name}</h1>
              <p>могу предоставить услуги:</p>
              {this.writeList(this.props.servCan)}
              <p />
              <p>хочу получить услуги:</p>
              {this.writeList(this.props.servWant)}
            </div>
          </div>
        </div>
      </div>

      // <div>
      //   <h1>{this.props.name}</h1>
      //   <p />
      //   <img src={this.state.pics[this.props.numPic]} width="200px" />
      //   <p />
      //   <p>могу предоставить услуги:</p>
      //   {this.writeList(this.props.servCan)}
      //   <p />
      //   <p>хочу получить услуги:</p>
      //   {this.writeList(this.props.servWant)}
      //   {/* <p></p>
      //   <p></p>
      //   <button onClick={this.props.handleClick}>Посмотреть больше</button>
      //   <p></p> */}
      // </div>
    );
  }
}
