import React, { Component } from "react";

export default class ServiceGive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: "",
      myAbilities: [],
      aboutServGive: ""
    };
  }

  handleLineChange = async e => {
    await this.setState({ aboutServGive: e.target.value });
  };

  // serviceFETCH = async () => {
  //     const serviceList = await fetch(PAGES.API.fetchServices.path)
  //     await this.setState({  myAbilities: serviceList})
  // }

  // writeGiveFETCH = async () => {
  //     await fetch(PAGES.API.fetchWriteGive.path, {
  //         method: 'POST',
  //         headers: {
  //             'Accept': 'application/json',
  //             'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify({ user: this.state.currentUser, servGive: this.state.myAbilities, aboutGive: this.state.aboutServGive })
  //     });
  // }

  render() {
    return (
      <div>
        <h1>Услуги могу</h1>
        <p />
        <ul>
          {/* НУЖНО ЧТОБ ВЫВОДИЛСЯ СПИСОК УСЛУГ И МЕСТА ДЛЯ ГАЛОЧЕК*/}
          {/* {{#each this.state.myAbilities}}
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
