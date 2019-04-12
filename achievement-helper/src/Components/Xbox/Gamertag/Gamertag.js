import React from "react";
import './Gamertag.css'

export class Gamertag extends React.Component {
    render() {
        return(
            <div class="xbox-gamercard container-fluid">
                <div class="xbox-gamercard-row-1">
                    <div className="xbox-gamercard-column-1"><img src={this.props.xboxProfile.GameDisplayPicRaw}/></div>
                    <div className="xbox-gamercard-column-2">{this.props.xboxProfile.Gamertag}</div>
                </div>
                <div class="xbox-gamercard-row-2">
                    <div class="xbox-gamercard-column-1"></div>
                    <div class="xbox-gamercard-column-2">{this.props.xboxProfile.Gamerscore}</div>
                </div>
            </div>
        )
    }
}