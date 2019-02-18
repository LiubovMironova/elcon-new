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

export default class ServiceGive extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentUser: 'Вася',
            myServices: [],
            aboutServGive: '',
            choices: [],
            item: []
        }
    }


    giveSaveFETCH = async () => {
        // console.log("  = ", )
        let giveToSeq = [[], [], []]
        let p = 0
        for (let i = 0; i < this.state.choices.length; i++) {
            if (this.state.choices[i] == true) {
                giveToSeq[0][0] = this.state.currentUser
                giveToSeq[1][p] = this.state.myServices[i]
                p++
            }
        }
        console.log("giveToSeq  = ", giveToSeq)

        await fetch(PAGES.API.fetchWriteGive.path, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ array: giveToSeq })
        });
    }


    // serviceFETCH = async () => {
    //     const serviceList = aywait fetch(PAGES.API.fetchServices.path)
    //     await this.setState({ mySearch: serviceList})
    // }

    handleLineChange = async (e) => {
        await this.setState({ aboutServGive: e.target.value });
    };

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

    // beginWork = async () => {
    //     let takeFromSeq = [['уборка квартиры', true], ['йога', true], ['стоматолог', false]];
    //     let choicesArr = Array(takeFromSeq.length).fill(false);
    //     let servicesArr = Array(takeFromSeq.length).fill('');

    //     for (let i = 0; i < takeFromSeq.length; i++) {
    //         choicesArr[i] = takeFromSeq[i][1]
    //         servicesArr[i] = takeFromSeq[i][0]
    //     }

    //     await this.setState({ choices: choicesArr })
    //     await this.setState({ myServices: servicesArr })

    //     this.reWrite()
    // }


    beginWork2 = async () => {
        // console.log("  = ", )

        console.log(" this.state.currentUser = ", this.state.currentUser)
        let userFromBack =
            await fetch(PAGES.API.fetchUser.path, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ user: this.state.currentUser })
            });

        let userAbout = await userFromBack.json()
        console.log(" userAbout = ", userAbout)



        //-----------------------------------------

        const services = await fetch(PAGES.API.fetchServices.path)
        const serviceList = await services.json();
        await this.setState({ myServices: serviceList })

        let choicesArr = Array(serviceList.length).fill(false)
        await this.setState({ choices: choicesArr })

        console.log(" userAbout[1] = ", userAbout[1])
        console.log(" userAbout.length = ", userAbout.length)

        for (let i = 0; i < this.state.myServices.length; i++) {
            for (let g = 0; g < userAbout[1].length; g++) {
                if (this.state.myServices[i] == userAbout[1][g]) {
                    let choisesTemp = this.state.choices
                    choisesTemp[i] = true
                    await this.setState({ choices: choisesTemp })
                }
            }
        }

        

      this.reWrite();
    }

    componentDidMount() {
        this.beginWork2();
    }

    render() {
      return (
            <div>
                <h1>Услуги могу</h1>
                <p></p>
                <p>Отметьте галочкой услуги, которые вы можете выполнить:</p>
                {this.state.item}
                <p></p>
                <p></p>
                <p></p>
                <p>Оставьте ваш комментарий:</p>
                <input onChange={this.handleLineChange} />
                <p></p>
                <button onClick={this.giveSaveFETCH}>Сохранить</button>
                <p></p>
            </div>
      );
    }
}
