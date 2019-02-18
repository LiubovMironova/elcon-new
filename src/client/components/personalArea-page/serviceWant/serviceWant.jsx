import React, { Component } from "react";
import { PAGES } from "../../../routes/pages";


class ServicesList extends Component {
  render() {
    return (
            <div>
                <input
                    type="checkbox"
                    checked={this.props.checked}
                    onChange={this.props.onChangeFunc}
                />
                {this.props.serv}
            </div>
    );
  }
}

export default class ServiceWant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: "",
      myServices: [],
      aboutServGive: "",
      choices: [],
      item: []
    };
  }

  // serviceFETCH = async () => {
  //     const serviceList = await fetch(PAGES.API.fetchServices.path)
  //     await this.setState({ mySearch: serviceList})
  // }

    handleLineChange = async (e) => {
      await this.setState({ aboutServGive: e.target.value });
    };

    writeGiveFETCH = async () => {
      const giveToSeq = [];

      for (let i = 0; i < this.state.choices.length; i++) {
        giveToSeq[i] = [this.state.myServices[i], this.state.choices[i]];
      }

      await fetch(PAGES.API.fetchWriteGive.path, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ user: this.state.currentUser, servGive: giveToSeq, aboutGive: this.state.aboutServGive })
      });
    }

    handleInputChange = async (k) => {
      const value = !this.state.choices[k];
      const choicesTemp = this.state.choices;
      choicesTemp[k] = value;
      await this.setState({ choices: choicesTemp });
    }

    changeFunction = async (g) => {
      await this.handleInputChange(g);
      await this.reWrite();
    }

    reWrite = async () => {
      const itemInner = [];

      for (let i = 0; i < this.state.choices.length; i++) {
        itemInner.push(
                <div key={i}>
                    < ServicesList
                        serv={this.state.myServices[i]}
                        checked={this.state.choices[i]}
                        onChangeFunc={() => this.changeFunction(i)}
                    />
                </div>
        );
      }
      await this.setState({ item: itemInner });
    }

    beginWork = async () => {
      const takeFromSeq = [["уборка квартиры", true], ["йога", true], ["стоматолог", false]];
      const choicesArr = Array(takeFromSeq.length).fill(false);
      const servicesArr = Array(takeFromSeq.length).fill("");

      for (let i = 0; i < takeFromSeq.length; i++) {
        choicesArr[i] = takeFromSeq[i][1];
        servicesArr[i] = takeFromSeq[i][0];
      }

      await this.setState({ choices: choicesArr });
      await this.setState({ myServices: servicesArr });

      this.reWrite();
    }

    componentDidMount() {
      this.beginWork();
    }

    render() {
      return (
            <div>
                <h1>Услуги хочу</h1>
                <p></p>
                <p>Отметьте галочкой услуги, которые вы хотите получить:</p>
                {this.state.item}
                <p></p>
                <p></p>
                <p></p>
                <p>Оставьте ваш комментарий:</p>
                <input onChange={this.handleLineChange} />
                <p></p>
                <button onClick={this.writeGiveFETCH}>Сохранить</button>
                <p></p>
            </div>
      );
    }
}
