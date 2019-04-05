import React, { Component } from 'react';
import './App.css';
import {Header} from "./Components/Header/Header.js"

class App extends Component {
    constructor() {
        super();
        this.state = {
            xboxProfile: {},
            steamProfile: {}
        };
    }

    componentDidMount() {
        this.getXboxProfile();
        this.getSteamProfile();
    }

    getXboxProfile() {
        fetch('xbox/profile')
            .then(res => res.json())
            .then(json => {this.setState({xboxProfile: json})});
    }

    getSteamProfile() {
        fetch('steam/profile')
            .then(res => res.json())
            .then(json => {this.setState({steamProfile: json})});
    }

    render() {
      return (
        <div className="App">
          <Header xboxProfile={this.state.xboxProfile} steamProfile={this.state.steamProfile}/>
            <body>
            </body>
        </div>
      );
    }
}

export default App;
