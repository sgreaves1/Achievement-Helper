import React from "react";
import './Header.css'
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import Carousel from "react-bootstrap-carousel";
import "bootstrap/dist/css/bootstrap.css";

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
                autoplay="true"
                slideshowSpeed="5000"
                version="4">
                    <div className="profile-slide">
                        <span>Sam Greaves</span>
                        <div className="carousel-caption">Sam Greaves</div>

                    </div>
                    <div class="xbox-slide">
                            <div class="xbox-gamercard">
                                <img src={this.props.xboxProfile.GameDisplayPicRaw}></img>
                                {this.props.xboxProfile.Gamertag}
                                {this.props.xboxProfile.Gamerscore}
                            </div>
                            <div className="placeHolder">hello</div>
                    </div>
                    <div class="col-sm steam-slide" >
                        <span>
                            <text>{this.props.steamProfile.personaname}</text>
                        </span>
                    </div>
                </Carousel>


            </div>
        )
    }
}