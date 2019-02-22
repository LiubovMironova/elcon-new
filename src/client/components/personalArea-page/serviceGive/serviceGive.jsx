import React, { Component } from "react";
import { PAGES } from "../../../routes/pages";

class ServicesList extends Component {
  render() {
    return (
      <li className="nav-item">
        <div className="form-check">
          <label className="form-check-label">
            <input
              type="checkbox"
              className="form-check-input"
              checked={this.props.checked}
              onChange={this.props.onChangeFunc}
            />
            {this.props.serv}
          </label>
        </div>
      </li>
      //   <div>
      //     <input type="checkbox" checked={this.props.checked} onChange={this.props.onChangeFunc} />
      //     {this.props.serv}
      //   </div>
    );
  }
}

export default class ServiceGive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: [],
      myServicesText: [],
      myServicesID: [],
      aboutServGive: "",
      choices: [],
      item: []
    };
  }

  giveSaveFETCH = async () => {
    let giveToSeq = [];
    for (let i = 0; i < this.state.choices.length; i++) {
      if (this.state.choices[i] == true) {
        giveToSeq.push(this.state.myServicesID[i]);
      }
    }

    await fetch(PAGES.API.fetchWriteGive.path, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ user: this.state.currentUser[0], array: giveToSeq, tag: this.props.tag })
    });
  };

  handleLineChange = async e => {
    await this.setState({ aboutServGive: e.target.value });
  };

  handleInputChange = async k => {
    const value = !this.state.choices[k];
    const choicesTemp = this.state.choices;
    choicesTemp[k] = value;
    await this.setState({ choices: choicesTemp });
  };

  changeFunction = async g => {
    await this.handleInputChange(g);
    await this.reWrite();
  };

  reWrite = async () => {
    const itemInner = [];

    for (let i = 0; i < this.state.choices.length; i++) {
      itemInner.push(
        <div key={i}>
          <ServicesList
            serv={this.state.myServicesText[i]}
            checked={this.state.choices[i]}
            onChangeFunc={() => this.changeFunction(i)}
          />
        </div>
      );
    }
    await this.setState({ item: itemInner });
  };

  beginWork2 = async () => {
    console.log(" this.props.tag = ", this.props.tag);

    // Подгрузка всех пользователей
    const allUsers = await fetch(PAGES.API.fetchAllUsers.path);
    const userList = await allUsers.json();
    //  console.log(" userList   = ", userList)

    // Подгрузка текущего пользователя
    const currUserFromBack = await fetch(PAGES.API.fetchCurrUser.path);
    const currUser = await currUserFromBack.json();
    console.log(" currUser = ", currUser);

    let userToState = [];
    userToState[0] = currUser;

    for (let i = 0; i < userList.length; i++) {
      console.log(" userList[i] = ", userList[i]);

      if (currUser == userList[i][0]) {
        userToState[1] = userList[i][1];
      }
    }
    await this.setState({ currentUser: userToState });

    let userFromBack = await fetch(PAGES.API.fetchUserArrayAbout.path, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ user: this.state.currentUser[0], tag: this.props.tag })
    });

    let userArrayAbout = await userFromBack.json();
    //-----------------------------------------
    const services = await fetch(PAGES.API.fetchServices.path);
    const serviceList = await services.json();

    let IDArr = Array(serviceList.length).fill(false);
    let servicesArr = Array(serviceList.length).fill(false);
    for (let i = 0; i < serviceList.length; i++) {
      IDArr[i] = serviceList[i][0];
      servicesArr[i] = serviceList[i][1];
    }

    await this.setState({ myServicesID: IDArr });
    await this.setState({ myServicesText: servicesArr });

    let choicesArr = Array(serviceList.length).fill(false);
    await this.setState({ choices: choicesArr });

    let choisesTemp = Array(serviceList.length).fill(false);
    for (let i = 0; i < this.state.myServicesID.length; i++) {
      for (let g = 0; g < userArrayAbout.length; g++) {
        if (this.state.myServicesID[i] == userArrayAbout[g]) {
          choisesTemp[i] = true;
        }
      }
    }
    await this.setState({ choices: choisesTemp });
    this.reWrite();
  };

  componentDidMount() {
    this.beginWork2();
  }

  render() {
    return (
      <div>
        {/* <h1>Услуги могу</h1>
                <p></p>
                <p>Отметьте галочкой услуги, которые вы можете выполнить:</p> */}
        <p />
        {this.state.item}
        <p />
        <p />
        <button onClick={this.giveSaveFETCH}>Сохранить</button>
        <p />
      </div>
    );
  }
}
