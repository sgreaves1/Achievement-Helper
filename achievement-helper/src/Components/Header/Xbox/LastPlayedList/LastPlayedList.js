import React from "react";
import './LastPlayedList.css'

export class LastPlayedList extends React.Component {

    onMouseEnterHandler = (event, game) => {
        this.props.showHoveredGame(game);
    }

    onMouseLeaveHandler = (event, game) => {
        this.props.showHoveredGame(game);
    }



    render() {

        const items = [];

        for (const [index, value] of this.props.LastPlayedGames.entries()) {
            if (index > 13)
                break;

            if (index > 0)
                items.push(<div class="xbox-last-played-list-game-box">

                    <img className="xbox-last-played-list-game-image" onMouseEnter={(e) => {this.onMouseEnterHandler(e, value)}} onMouseLeave={(e) => {this.onMouseLeaveHandler(e, this.props.LastPlayedGames[0])}} src={value.displayImage}/>
                </div>)
        }

        return (
            <div>
                {items}
            </div>
        )
    }
}