import React from "react";
import './LastPlayedList.css'

export class LastPlayedList extends React.Component {
    render() {

        const items = []

        for (const [index, value] of this.props.LastPlayedGames.entries()) {
            if (index > 13)
                break;

            if (index > 0)
                items.push(<div class="xbox-last-played-list-game-box"> <img class="xbox-last-played-list-game-image" src={value.displayImage}/> </div>)
        }

        return (
            <div>
                {items}
            </div>
        )
    }
}