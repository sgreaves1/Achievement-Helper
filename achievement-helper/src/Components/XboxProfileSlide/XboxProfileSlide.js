import React from "react";
import './XboxProfileSlide.css'
import {Gamertag} from "../Gamertag/Gamertag.js"
import {LastPlayedImagesBox} from "../LastPlayed/LastPlayedImagesBox.js"

export class XboxProfileSlide extends React.Component {
    render() {
        return(
            <div class="xbox-slide2 container-fluid">
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
                        <LastPlayedImagesBox xboxTitleHistory={this.props.xboxTitleHistory}/>
                    </div>
                    <div class="xbox-slide-column-3">
                        Last Played: {this.props.xboxTitleHistory.titles[0].name}
                    </div>
                </div>
                <div class="xbox-slide-row-3">
                    <div class="xbox-slide-column-1"/>
                    <div class="xbox-slide-column-2"/>
                    <div class="xbox-slide-column-3"/>
                </div>
            </div>
        )
    }
}