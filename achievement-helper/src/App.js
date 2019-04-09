import React, { Component } from 'react';
import './App.css';
import {Header} from "./Components/Header/Header.js"

class App extends Component {
    constructor() {
        super();
        this.state = {
            xboxProfile: {},
            xboxGamercard: {},
            xboxPresence: {},
            steamProfile: {}
        };
    }

    componentDidMount() {
        this.getXboxProfile();
        this.getXboxGamercard();
        this.getXboxPresence();
        this.getSteamProfile();
    }

    getXboxProfile() {
        // fetch('xbox/profile')
        //     .then(res => res.json())
        //     .then(json => {this.setState({xboxProfile: json})});

        this.setState({xboxProfile:
                {
                    "id": 2533274811841399,
                    "hostId": 2533274811841399,
                    "Gamertag": "Samgplay",
                    "GameDisplayName": "Samgplay",
                    "AppDisplayName": "Samgplay",
                    "Gamerscore": 72882,
                    "GameDisplayPicRaw": "http://images-eds.xboxlive.com/image?url=rwljod2fPqLqGP3DBV9F_yK9iuxAt3_MH6tcOnQXTc9IeVtfjqtpaqaCuFR7qE5hzCJKP9_3HXYmTUlm.2m390b.6g6U6CNhYDy6zR5VyLA-&background=0xababab&format=png",
                    "AppDisplayPicRaw": "http://images-eds.xboxlive.com/image?url=rwljod2fPqLqGP3DBV9F_yK9iuxAt3_MH6tcOnQXTc9IeVtfjqtpaqaCuFR7qE5hzCJKP9_3HXYmTUlm.2m390b.6g6U6CNhYDy6zR5VyLA-&background=0xababab&format=png",
                    "AccountTier": "Silver",
                    "XboxOneRep": "GoodPlayer",
                    "PreferredColor": "http://dlassets.xboxlive.com/public/content/ppl/colors/00007.json",
                    "TenureLevel": 0,
                    "isSponsoredUser": false
                }
        });
    }

    getXboxGamercard() {
        // fetch('xbox/gamercard')
        //     .then(res => res.json())
        //     .then(json => {this.setState({xboxGamercard: json})});

        this.setState({xboxGamercard:
                {
                "gamertag": "Samgplay",
                "name": "",
                "location": "",
                "bio": "",
                "gamerscore": 72892,
                "tier": "Silver",
                "motto": "",
                "avatarBodyImagePath": "http://avatar.xboxlive.com/avatar/Samgplay/avatar-body.png",
                "gamerpicSmallImagePath": "http://avatar.xboxlive.com/avatar/Samgplay/avatarpic-s.png",
                "gamerpicLargeImagePath": "http://avatar.xboxlive.com/avatar/Samgplay/avatarpic-l.png",
                "gamerpicSmallSslImagePath": "https://avatar-ssl.xboxlive.com/avatar/Samgplay/avatarpic-s.png",
                "gamerpicLargeSslImagePath": "https://avatar-ssl.xboxlive.com/avatar/Samgplay/avatarpic-l.png",
                "avatarManifest": "AAAAAAAAAAAAAAAAABAAAAMcAAPByPEJoZyy4AAIAAADLQADwcjxCaGcsuAAIAAAAzgAA8HI8QmhnLLgAACAAALqAAPByPEJoZyy4D+AAAAAAAAAAAAAAAAAAAAAACAAAqIAA8HI8QmhnLLgAAAAAAAAAAAAAAAAAAAAAAAAQAACbwADwcjxCaGcsuAAAAAAAAAAAAAAAAAAAAAAAAEAAALWAAHByPEJoZyy4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/+Opdv8NDQ3/78KL/3J/Nf8NDQ3/blCk/w0NDf9mvNz/ZrzcAAAAAgAAAAHByPEJoZyy4AACAAAAAAAAAAAAAAAAAAAAAAABAAIAA8HI8QmhnLLgAAEAAAAAAAAAAAAAAAAAAAAAAAQBzgADwcjxCaGcsuAABAAAAAAAAAAAAAAAAAAAAAABAADMAAHByPEJoZyy4AEAAAAAAAAAAAAAAAAAAAAAAAAgADQAAcHI8QmhnLLgACAAAAAAAAAAAAAAAAAAAAAAEAAAAZHjzbkHeUVBCNQQAAAAAAAAAAAAAAAAAAAAAAAACABgAAHByPEJoZyy4AAIAAAAAAAAAAAAAAAAAAAAAAIAANwAAcHI8QmhnLLgAgAAAAAAAAAAAAAAAAAAAAAAABBs2gKhxJNV+VhYCDYAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAA0AAHByPEJoZyy4AAgAAAAAAAAAAAAAAAAAAAAAAAQAKkAAcHI8QmhnLLgABAAAAAAAAAAAAAAAAAAAAAAAAgAYAABwcjxCaGcsuAACAAAAAAAAAAAAAAAAAAAAAAABAHOAAPByPEJoZyy4AAEAAAAAAAAAAAAAAAAAADgAADk+spUbAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="
            }});
    }

    getXboxPresence() {
        // fetch('xbox/presence')
        //     .then(res => res.json())
        //     .then(json => {this.setState({xboxPresence: json})});

        this.setState({xboxPresence:
                {
                    "xuid": 2533274811841399,
                    "state": "Offline",
                    "lastSeen": {
                        "deviceType": "XboxOne",
                        "titleId": 750323071,
                        "titleName": "Home",
                        "timestamp": "2019-04-07T16:35:34.7272491Z"
                    }
                }});
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
      return (
        <div className="App">
          <Header xboxProfile={this.state.xboxProfile} xboxGamercard={this.state.xboxGamercard} xboxPresence={this.state.xboxPresence} steamProfile={this.state.steamProfile}/>
            <body>
            </body>
        </div>
      );
    }
}

export default App;
