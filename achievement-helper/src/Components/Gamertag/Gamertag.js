import React from "react";
import './Gamertag.css'

export class Gamertag extends React.Component {
    render() {
        return(
            <div className="xbox-gamercard">
                <div className="xbox-gamerpic">
                    <img src={this.props.xboxProfile.GameDisplayPicRaw}></img>
                </div>
                <div className="xbox-info">
                    {this.props.xboxProfile.Gamertag}<br/>

                    {this.props.xboxProfile.Gamerscore}
                </div>

            </div>
        )
    }
}