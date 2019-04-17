import React from "react";
import './ProfileCard.css'
import { ProgressBar } from "react-step-progress-bar";


export class ProfileCard extends React.Component {
    getPercent(current, total) {
        let onePercent = (total / 100);
        return current / onePercent;
    }

    render() {
        return (
            <div class="container-fluid">
                <div>
                    {this.props.Title}
                </div>
                <div>
                    {this.props.Gamertag}
                </div>
                <div>
                    {this.props.CurrentGamerscore}
                </div>
                <div>
                    <ProgressBar percent={this.getPercent(this.props.CurrentGamerscore, this.props.TotalGamerscore)} filledBackground="linear-gradient(to right, #adff2f, #008000)"/>
                </div>
            </div>
        )
    }
}