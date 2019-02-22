import React, { Component } from "react";
import Person from "./specialist";
import { PAGES } from "../../../routes/pages";
import ServiceGive from "../serviceGive/serviceGive";
import "./searchPeople.css";
import pic from "./man.jpg";

export default class PeopleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: [],
      allServices: [],
      user: [],
      userImg: [],
      servGive: [],
      servWant: [],
      item: []
    };
  }

  componentDidMount() {
    this.beginWork2();
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <nav className="col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar">
            <ul className="nav nav-pills flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Все услуги<span className="sr-only">(current)</span>
                </a>
              </li>
              <ServiceGive tag="W" />
            </ul>
              <hr />
              <ul className="nav nav-pills flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Все услуги<span className="sr-only">(current)</span>
                </a>
              </li>
              <ServiceGive tag="G" />
            </ul>
              {/* <hr /> */}
              {/* <li className="nav-item">
                <div className="form-check">
                  <label className="form-check-label">
                    <input type="checkbox" className="form-check-input" />
                    Занятие йогой
                  </label>
              </li> */}
              {/* <li className="nav-item">
                <div className="form-check">
                  <label className="form-check-label">
                    <input type="checkbox" className="form-check-input" />
                    Лечение у стоматолога
                  </label>
                </div>
              </li>

              <li className="nav-item">
                <div className="form-check">
                  <label className="form-check-label">
                    <input type="checkbox" className="form-check-input" />
                    Ремонт в квартире
                  </label>
                </div>
              </li> */}
            {/* </ul> */}
            {/* <h1>Специалисты, которые вам подходят:</h1>
            <p />
            <button onClick={this.renderList}>Перерисовать</button>
            <p />
            {this.state.item} */}
          </nav>
          <main className="offset-md-3 col-sm-9 offset-sm-3 col-md-8 offset-md-3 pt-3">
            {/* <h1>Специалисты</h1> */}

            <section className="d-flex flex-column placeholders">
              <h1>Специалисты, которые вам подходят:</h1>
              <p />
              <button onClick={this.renderList}>Перерисовать</button>
              <p />
              {this.state.item}
              {/* <div className="container card mb-3">
                <div className="row  p-3">
                  <div className="col-sm-3">
                    <img className="rounded" src={pic} width="200px" alt="Card image cap" />
                  </div>
                  <div className="col-sm-9 d-flex align-items-center p-5">
                    <p>
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div> */}

              {/* <div className="container card mb-3">
                <div className="row  p-3">
                  <div className="col-sm-3">
                    <img className="rounded" src="img/man.jpg" width="200px" alt="Card image cap" />
                  </div>
                  <div className="col-sm-9 d-flex align-items-center p-5">
                    <p>
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div> */}

              {/* <div className="container card mb-3">
                <div className="row  p-3">
                  <div className="col-sm-3">
                    <img className="rounded" src="img/man.jpg" width="200px" alt="Card image cap" />
                  </div>
                  <div className="col-sm-9 d-flex align-items-center p-5">
                    <p>
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div> */}
            </section>
          </main>
        </div>
      </div>
        // <div>
        //   <h1>{this.state.currentUser[1]}, личный кабинет</h1>
        //   <h1>Услуги могу</h1>
        //   <p />
        //   <p>Отметьте галочкой услуги, которые вы можете выполнить:</p>
        //   <ServiceGive tag="G" />
        //   <h1>Услуги хочу</h1>
        //   <p />
        //   <p>Отметьте галочкой услуги, которые вы хотите получить:</p>
        //   <ServiceGive tag="W" />

        //   <h1>Специалисты, которые вам подходят:</h1>
        //   <p />
        //   <button onClick={this.renderList}>Перерисовать</button>
        //   <p />
        //   {this.state.item}
        // </div>
    );
  }

  // changeFunction = async (g) => {
  //     await this.handleInputChange(g);
  //     await this.reWrite();
  // }

  reWrite = async () => {
    let itemInner = [];

    for (let i = 0; i < this.state.user.length; i++) {
      itemInner.push(
        <div key={i}>
          <Person
            name={this.state.user[i]}
            numPic={this.state.userImg[i]}
            servCan={this.state.servGive[i]}
            servWant={this.state.servWant[i]}
            // handleClick={() => this.changeFunction()}
          />
          {/* 111111111111111111 */}
        </div>
      );
    }
    await this.setState({ item: itemInner });
  };

  beginWork = async () => {
    let usersFromBack = await fetch(PAGES.API.fetchSelectUsers.path, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ user: this.state.currentUser })
    });

    let usersBack = await usersFromBack.json();
    let takeFromSeq = usersBack;
    //-----------------------------------------
    let userArr = Array(takeFromSeq.length).fill("");
    let userArrImg = Array(takeFromSeq.length).fill("");
    let canArr = Array(takeFromSeq.length).fill("");
    let wantArr = Array(takeFromSeq.length).fill("");

    for (let i = 0; i < takeFromSeq.length; i++) {
      userArr[i] = takeFromSeq[i][0][0];
      canArr[i] = takeFromSeq[i][1];
      wantArr[i] = takeFromSeq[i][2];
    }

    // Подгрузка всех пользователей
    const allUsers = await fetch(PAGES.API.fetchAllUsers.path);
    const userList = await allUsers.json();
    console.log(" userList   = ", userList);

    // Подгрузка всех услуг
    const services = await fetch(PAGES.API.fetchServices.path);
    const serviceList = await services.json();

    for (let k = 0; k < takeFromSeq.length; k++) {
      for (let i = 0; i < serviceList.length; i++) {
        for (let g = 0; g < canArr[k].length; g++) {
          if (canArr[k][g] == serviceList[i][0]) {
            canArr[k][g] = serviceList[i][1];
          }
        }
        for (let g = 0; g < wantArr[k].length; g++) {
          if (wantArr[k][g] == serviceList[i][0]) {
            wantArr[k][g] = serviceList[i][1];
          }
        }
      }
      for (let i = 0; i < userList.length; i++) {
        if (userArr[k] == userList[i][0]) {
          userArr[k] = userList[i][1];
          userArrImg[k] = userList[i][2];
        }
      }
    }

    await this.setState({ user: userArr });
    await this.setState({ userImg: userArrImg });
    await this.setState({ servGive: canArr });
    await this.setState({ servWant: wantArr });

    console.log("!!!!!!!!!!!!!! = !!!!!!!!!!!!!", this.state.userImg);

    this.reWrite();
  };

  renderList = async () => {
    await this.beginWork();
  };

  beginWork2 = async () => {
    // Подгрузка всех пользователей
    const allUsers = await fetch(PAGES.API.fetchAllUsers.path);
    const userList = await allUsers.json();
    //  console.log(" userList   = ", userList)

    // Подгрузка текущего пользователя
    const currUserFromBack = await fetch(PAGES.API.fetchCurrUser.path);
    console.log("  currUserFromBack = ", currUserFromBack);
    const currUser = await currUserFromBack.text();
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

    await this.beginWork();
  };
}
