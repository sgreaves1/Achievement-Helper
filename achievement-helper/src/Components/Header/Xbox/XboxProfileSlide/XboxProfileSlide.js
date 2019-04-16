import React from "react";
import './XboxProfileSlide.css'
import {Gamertag} from "../Gamertag/Gamertag.js"
import {LastPlayedImagesBox} from "../LastPlayedImageBox/LastPlayedImagesBox.js"
import {LastPlayedInfo} from "../LastPlayedInfo/LastPlayedInfo";
import {LastPlayedList} from "../LastPlayedList/LastPlayedList";

export class XboxProfileSlide extends React.Component {
    render() {

        let count = this.props.LastPlayedGames[0].images.length;
        let rand = Math.floor((Math.random() * this.props.LastPlayedGames[0].images.length));

        var backgroundStyle = {
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,1)), url(${this.props.LastPlayedGames[0].images[rand].url})`,
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
                        <LastPlayedImagesBox LastPlayedGame={this.props.LastPlayedGames[0]}/>
                    </div>
                    <div class="xbox-slide-column-3">
                        <LastPlayedInfo LastPlayedGame={this.props.LastPlayedGames[0]}/>
                    </div>
                </div>
                <div class="xbox-slide-row-3">
                    <div class="xbox-slide-column-1"/>
                    <div class="xbox-slide-column-bottom">
                        <LastPlayedList LastPlayedGames={this.props.LastPlayedGames}/>
                    </div>
                </div>
            </div>
        )
    }
}