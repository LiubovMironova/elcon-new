import React, { Component } from "react";


export default class Meetings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: "",
      myMeetings: []
    };
  }


  // meetingFETCH = async () => {

  //     const meetingList = await fetch(PAGES.API.fetchMeetings.path, {
  //             method: 'POST',
  //             headers: {
  //                 'Accept': 'application/json',
  //                 'Content-Type': 'application/json'
  //             },
  //             body: JSON.stringify({ user: this.props.currentUser })
  //         });

  //     const meetList = await meetingList.json()
  //     return await this.setState({ myMeetings: meetList })
  // }


  render() {
    return (
            <div>
                <h1>Мои встречи</h1>
                <p></p>
                <ul>
                    {/* НУЖНО ЧТОБ ВЫВОДИЛСЯ СПИСОК встреч */}
                    {/* {{#each this.state.myMeetings}}
                   <li>{{this}}</li>
                    {{/each}} */}
                </ul>
                <p></p>
            </div>
    );
  }
}
