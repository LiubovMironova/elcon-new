import React, { Component } from "react";


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
                <p>могу предоставить услуги:</p>
                {this.writeList(this.props.servCan)}
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
