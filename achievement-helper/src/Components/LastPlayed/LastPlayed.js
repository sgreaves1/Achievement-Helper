import React from "react";
import './LastPlayed.css'

export class LastPlayed extends React.Component {
    render() {
        return(
            <div class="xbox-last-played-box">
                <img class="xbox-last-played-image" src={this.props.xboxLastGamePlayed.displayImage} />
            </div>
        )
    }
}