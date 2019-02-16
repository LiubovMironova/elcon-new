import React, { Component } from "react";

export default class ServiceWant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: "",
      mySearch: [],
      aboutServWant: ""
    };
  }

  handleLineChange = async e => {
    await this.setState({ aboutServWan: e.target.value });
  };

  // serviceFETCH = async () => {
  //     const serviceList = await fetch(PAGES.API.fetchServices.path)
  //     await this.setState({ mySearch: serviceList})
  // }

  // writeWantFETCH = async () => {
  //     await fetch(PAGES.API.fetchWriteWant.path, {
  //         method: 'POST',
  //         headers: {
  //             'Accept': 'application/json',
  //             'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify({ user: this.state.currentUser, servWant: this.state.myAbilities, aboutWant: this.state.aboutServWant })
  //     });
  // }

  render() {
    return (
      <div>
        <h1>Услуги хочу</h1>
        <p />
        <ul>
          {/* НУЖНО ЧТОБ ВЫВОДИЛСЯ СПИСОК УСЛУГ И МЕСТА ДЛЯ ГАЛОЧЕК*/}
          {/* {{#each  this.state.mySearch}}
                   <li>{{this}}</li>
                    {{/each}} */}
        </ul>
        <p>Оставьте ваш комментарий:</p>
        <input onChange={this.handleLineChange} />
        <p />
        <button onClick={this.handleCountAndWrite}>Сохранить</button>
        <p />
      </div>
    );
  }
}
