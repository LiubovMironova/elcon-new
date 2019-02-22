import React, { Component } from "react";
import img1 from '../../../pictures/image1.jpg'
import img2 from '../../../pictures/image2.jpg'
import img3 from '../../../pictures/image3.jpg'
import img4 from '../../../pictures/image4.jpg'
import img5 from '../../../pictures/image5.jpg'
import img6 from '../../../pictures/image6.jpg'
import img7 from '../../../pictures/image7.jpg'
import img8 from '../../../pictures/image8.jpg'
import img9 from '../../../pictures/image9.jpg'

export default class Person extends Component {

  writeList = (arr) => {
    const tempList = [];
    for (let i = 0; i < arr.length; i++) {
      tempList.push(
        <div key={i}>
          <li>{arr[i]}</li>
        </div>
      );
    }
    return tempList;
  }

  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p></p>
        {this.props.userImg}
         <p></p>
        '../../../pictures/image1.jpg'
        <p></p>
        <img src={ this.props.userImg } width='200px' />
        <p></p>
        <img src= { '../../../pictures/image1.jpg' } width='200px' /> 
        <p></p>
        {/* <img src={  img1} width='200px' /> */}
        <p></p>
        <p>могу предоставить услуги:</p>
        {this.writeList(this.props.servCan)}
        <p></p>
        <p>хочу получить услуги:</p>
        {this.writeList(this.props.servWant)}
        <p></p>
        <p></p>
        <button onClick={this.props.handleClick}>Посмотреть больше</button>
        <p></p>
      </div>
    );
  }
}
