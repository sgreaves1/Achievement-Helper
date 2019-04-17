import React, { Component } from 'react';
import './App.css';
import {Header} from "./Components/Header/Header.js"
import {Content} from "./Components/Content/Content";

class App extends Component {

    constructor() {
        super();
        this.state = {
            xboxProfile: {},
            xboxGamercard: {},
            xboxPresence: {},
            xboxTitleHistory: {
                "xuid": null,
                "titles": [
                    {
                        "displayImage": null,
                        "achievement": {
                            "currentAchievements": null,
                            "totalAchievements": null,
                            "currentGamerscore": null,
                            "totalGamerscore": null,
                            "progressPercentage": null,
                            "sourceVersion": null
                        },
                        "images": [
                            {
                                "url": null,
                                "type": null
                            }
                        ]
                    }
                ]
            },
            steamProfile: {
                "personaname": null
            }
        };
    }

    componentDidMount() {
        this.getXboxProfile();
        this.getXboxGamercard();
        this.getXboxPresence();
        this.getXboxTitleHistory();
        this.getSteamProfile();
    }

    getXboxProfile() {
        fetch('xbox/profile')
            .then(res => res.json())
            .then(json => {this.setState({xboxProfile: json})});
    }

    getXboxGamercard() {
        fetch('xbox/gamercard')
            .then(res => res.json())
            .then(json => {this.setState({xboxGamercard: json})});
    }

    getXboxPresence() {
        fetch('xbox/presence')
            .then(res => res.json())
            .then(json => {this.setState({xboxPresence: json})});
    }

    getXboxTitleHistory() {
        fetch('xbox/title-history')
            .then(res => res.json())
            .then(json => {this.setState({xboxTitleHistory: json})});
    }

    getSteamProfile() {
        // fetch('steam/profile')
        //     .then(res => res.json())
        //     .then(json => {this.setState({steamProfile: json})});

        this.setState({steamProfile:
                {
                    "steamid": "76561198325804171",
                    "communityvisibilitystate": 3,
                    "profilestate": 1,
                    "personaname": "Sam",
                    "lastlogoff": 1554425978,
                    "commentpermission": 1,
                    "profileurl": "https://steamcommunity.com/profiles/76561198325804171/",
                    "avatar": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/36/36106a778ebe89152dcace15a7b0cbe040905b0f.jpg",
                    "avatarmedium": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/36/36106a778ebe89152dcace15a7b0cbe040905b0f_medium.jpg",
                    "avatarfull": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/36/36106a778ebe89152dcace15a7b0cbe040905b0f_full.jpg",
                    "personastate": 1,
                    "realname": "Sam",
                    "primaryclanid": "103582791429521408",
                    "timecreated": 1470812084,
                    "personastateflags": 0
                }
        });
    }

    render() {
        console.log('render');

      return (
          <div className="App">
            <Header xboxProfile={this.state.xboxProfile} xboxGamercard={this.state.xboxGamercard} xboxPresence={this.state.xboxPresence} xboxTitleHistory={this.state.xboxTitleHistory} steamProfile={this.state.steamProfile}/>
            <Content xboxProfile={this.state.xboxProfile} xboxTitleHistory={this.state.xboxTitleHistory}/>
          </div>
      );
    }
}

export default App;
