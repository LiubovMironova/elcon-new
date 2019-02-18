import React, { Component } from "react";
import Person from "./specialist";
import ServiceGive from "../serviceGive/serviceGive";
import ServiceWant from "../serviceWant/serviceWant";


export default class PeopleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      servGive: [],
      servWant: [],
      item: []
    };
  }


  // changeFunction = async (g) => {
  //     await this.handleInputChange(g);
  //     await this.reWrite();
  // }

reWrite = async () => {
  const itemInner = [];

  for (let i = 0; i < this.state.user.length; i++) {
    itemInner.push(
            <div key={i} >
                < Person
                    name={this.state.user[i]}
                    servCan={this.state.servGive[i]}
                    servWant={this.state.servWant[i]}
                    // handleClick={() => this.changeFunction()}
                />
            </div>
    );
  }
  await this.setState({ item: itemInner });
}


beginWork = async () => {
  const takeFromSeq = [
    [["Маша"], ["убрать", "помыть"], ["йога", "зубной"]],
    [["Петя"], ["приколотить", "повесить"], ["автомеханика", "бокс"]]
  ];

  const userArr = Array(takeFromSeq.length).fill("");
  const canArr = Array(takeFromSeq.length).fill("");
  const wantArr = Array(takeFromSeq.length).fill("");

  for (let i = 0; i < takeFromSeq.length; i++) {
    userArr[i] = takeFromSeq[i][0];
    canArr[i] = takeFromSeq[i][1];
    wantArr[i] = takeFromSeq[i][2];
  }

  await this.setState({ user: userArr });
  await this.setState({ servGive: canArr });
  await this.setState({ servWant: wantArr });

  this.reWrite();
}


componentDidMount() {
  this.beginWork();
}

render() {
  return (
        <div>
           < ServiceGive />
           < ServiceWant />
            <h1>Специалисты, которые вам подходят:</h1>
                   {this.state.item}
        </div>
  );
}
}
