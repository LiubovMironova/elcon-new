import React, { Component } from 'react';
import Person from './specialist';
import { PAGES } from '../../../routes/pages';
import ServiceGive from '../serviceGive/serviceGive';



export default class PeopleList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentUser: ['1', 'Вася'],
            allServices: [],
            user: [],
            servGive: [],
            servWant: [],
            item: []
        }
    }


    // changeFunction = async (g) => {
    //     await this.handleInputChange(g);
    //     await this.reWrite();
    // }

    reWrite = async () => {
        let itemInner = []

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
            )
        }
        await this.setState({ item: itemInner })
    }


    beginWork = async () => {

        let usersFromBack =
            await fetch(PAGES.API.fetchSelectUsers.path, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ user: this.state.currentUser })
            });

        let usersBack = await usersFromBack.json()
        console.log(" usersBack = ", usersBack)
        let takeFromSeq = usersBack
        //-----------------------------------------

        let userArr = Array(takeFromSeq.length).fill('');
        let canArr = Array(takeFromSeq.length).fill('');
        let wantArr = Array(takeFromSeq.length).fill('');

        for (let i = 0; i < takeFromSeq.length; i++) {
            userArr[i] = takeFromSeq[i][0][0]
            console.log("userArr[i] = ", userArr[i])
            canArr[i] = takeFromSeq[i][1]
            wantArr[i] = takeFromSeq[i][2]
        }

        // console.log("  userArr = ", userArr)
        // console.log(" canArr = ", canArr)
        // console.log(" wantArr = ", wantArr)

        // Подгрузка всех пользователей
        const allUsers = await fetch(PAGES.API.fetchAllUsers.path)
        const userList = await allUsers.json();
        console.log(" userList   = ", userList)


        // Подгрузка всех услуг
        const services = await fetch(PAGES.API.fetchServices.path)
        const serviceList = await services.json();

        console.log(" serviceList  = ", serviceList)

        for (let k = 0; k < takeFromSeq.length; k++) {
            for (let i = 0; i < serviceList.length; i++) {
                for (let g = 0; g < canArr[k].length; g++) {
                    if (canArr[k][g] == serviceList[i][0]) {
                        canArr[k][g] = serviceList[i][1]
                    }
                }
                for (let g = 0; g < wantArr[k].length; g++) {
                    if (wantArr[k][g] == serviceList[i][0]) {
                        wantArr[k][g] = serviceList[i][1]
                    }
                }
            }
            for (let i = 0; i < userList.length; i++) {
        //         console.log(" userArr[k] = ", userArr[k] )
        //         console.log(" userArr[k][0] = ", userArr[k][0] )

        // console.log("   userList[i][1] = ",  userList[i][1])

                if (userArr[k] == userList[i][0]) {
                    userArr[k] = userList[i][1]
                }

            }

        }


        console.log("  userArr = ", userArr)
        console.log(" canArr = ", canArr)
        console.log(" wantArr = ", wantArr)

        await this.setState({ user: userArr })
        await this.setState({ servGive: canArr })
        await this.setState({ servWant: wantArr })

        this.reWrite()
    }


    renderList = async () => {
        await this.beginWork()
    }


    beginWork2 = async () => {
        await this.beginWork()
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
                < ServiceGive tag="G" />
                <h1>Услуги хочу</h1>
                <p></p>
                <p>Отметьте галочкой услуги, которые вы хотите получить:</p>
                < ServiceGive tag="W" />

                <h1>Специалисты, которые вам подходят:</h1>
                <p></p>
                <button onClick={this.renderList}>Перерисовать</button>
                <p></p>
                {this.state.item}
            </div>
        );
    }

}
