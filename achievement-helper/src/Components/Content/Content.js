import React from "react";
import './Content.css'
import {ProfileCard} from "./ProfileCard/ProfileCard";

export class Content extends React.Component {
    render() {
        return(
            <div class="profile-summary-list">
                <div className="container-fluid">
                    <div className="row">
                        <div class="col-1">
                            <ProfileCard />
                        </div>
                        <div class="col-1">
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