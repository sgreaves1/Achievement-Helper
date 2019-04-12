import React from "react";
import './LastPlayedImagesBox.css'

export class LastPlayedImagesBox extends React.Component {

    render() {
        return(
            <div class="xbox-last-played-image-box">
                <img class="xbox-last-played-image" src={this.props.LastPlayedGame.displayImage} />
            </div>
        )
    }
}