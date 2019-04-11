import React from "react";
import './Header.css'
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import Carousel from "react-bootstrap-carousel";
import "bootstrap/dist/css/bootstrap.css";
import {XboxProfileSlide} from "../XboxProfileSlide/XboxProfileSlide";

export class Header extends React.Component {
    _changeIcon = () => {
        let { leftIcon, rightIcon } = this.state;
        leftIcon = leftIcon ? undefined : <span className="fa fa-glass" />;
        rightIcon = rightIcon ? undefined : <span className="fa fa-music" />;
        this.setState({ leftIcon, rightIcon });
    };

    render() {
        return(
            <div>
                <Carousel
                animation="true"
                autoplay="false"
                slideshowSpeed="50000"
                version="4">
                    <div className="profile-slide">
                        <span>Sam Greaves</span>
                        <div className="carousel-caption">Sam Greaves</div>
                    </div>
                    <div class="steam-slide" >
                        <span>
                            <text>{this.props.steamProfile.personaname}</text>
                        </span>
                    </div>
                    <XboxProfileSlide xboxProfile={this.props.xboxProfile} xboxGamercard={this.props.xboxGamercard} xboxPresence={this.props.xboxPresence} LastPlayedGames={this.props.xboxTitleHistory.titles}/>
                </Carousel>


            </div>
        )
    }
}