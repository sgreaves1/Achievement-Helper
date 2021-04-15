import React from "react";
import './Content.css'
import {ProfileCard} from "./ProfileCard/ProfileCard";

export class Content extends React.Component {

    getTotalXboxGamerScore() {
        let xboxTotalGamerscore = 0;

        for (let i = 0; i < this.props.xboxTitleHistory.titles.length; i++) {
            xboxTotalGamerscore += this.props.xboxTitleHistory.titles[0].achievement.totalGamerscore;
        }

        //return xboxTotalGamerscore;
        return 325000;

    }

    profileClicked = (event, profile) =>  {
        console.log(profile);
    };

    render() {
        return(
            <div class="profile-summary-list">
                <div className="container-fluid">
                    <div className="row">
                        <div class="col-1 profile-card">
                            <button class="profile-button" onClick={(e) => this.profileClicked(e, "Xbox")}>
                            <ProfileCard Title="Xbox" Gamertag={this.props.xboxProfile.Gamertag} CurrentGamerscore={this.props.xboxProfile.Gamerscore} TotalGamerscore={this.getTotalXboxGamerScore()}/>
                            </button>
                        </div>
                        <div class="col-1 profile-card">
                            <button className="profile-button" onClick={(e) => this.profileClicked(e, "Steam")}>
                            <ProfileCard Title="Steam" Gamertag="Sam" CurrentGamerscore="281" TotalGamerscore="1000"/>
                            </button>
                        </div>

                        <div class="col-1">
                        </div>
                    </div>
                    <div class="row">

                    </div>
                    <div class="row">
                    </div>
                </div>
            </div>
        )
    }
}