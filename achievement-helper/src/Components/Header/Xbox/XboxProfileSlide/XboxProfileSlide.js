import React from "react";
import './XboxProfileSlide.css'
import {Gamertag} from "../Gamertag/Gamertag.js"
import {LastPlayedImagesBox} from "../LastPlayedImageBox/LastPlayedImagesBox.js"
import {LastPlayedInfo} from "../LastPlayedInfo/LastPlayedInfo";
import {LastPlayedList} from "../LastPlayedList/LastPlayedList";

export class XboxProfileSlide extends React.Component {
    constructor(props) {
        super(props);
        this.showHoveredGame  = this.showHoveredGame.bind(this);

        this.state = {
            xboxLastPlayedGame: {
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
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({xboxLastPlayedGame: nextProps.LastPlayedGames[0]});
    }

    showHoveredGame(gameToShow) {
        this.setState({xboxLastPlayedGame: gameToShow});
    }

    render() {

        let rand = Math.floor((Math.random() * this.state.xboxLastPlayedGame.images.length));

        var backgroundStyle = {
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,1)), url(${this.state.xboxLastPlayedGame.images[rand].url})`,
        };

        return(
            <div class="xbox-slide2 container-fluid" style={backgroundStyle}>
                <div class="xbox-slide-row-1">
                    <div class="xbox-slide-column-1">
                        <img src={this.props.xboxGamercard.avatarBodyImagePath} />
                    </div>
                    <div class="xbox-slide-column-2">
                        <Gamertag xboxProfile={this.props.xboxProfile}/>
                    </div>
                    <div class="xbox-slide-column-3"/>
                </div>
                <div class="xbox-slide-row-2">
                    <div class="xbox-slide-column-1"/>
                    <div class="xbox-slide-column-2">
                        <LastPlayedImagesBox LastPlayedGame={this.state.xboxLastPlayedGame}/>
                    </div>
                    <div class="xbox-slide-column-3">
                        <LastPlayedInfo LastPlayedGame={this.state.xboxLastPlayedGame}/>
                    </div>
                </div>
                <div class="xbox-slide-row-3">
                    <div class="xbox-slide-column-1"/>
                    <div class="xbox-slide-column-bottom">
                        <LastPlayedList LastPlayedGames={this.props.LastPlayedGames} showHoveredGame={this.showHoveredGame}/>
                    </div>
                </div>
            </div>
        )
    }
}