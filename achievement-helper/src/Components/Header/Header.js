import React from "react";
import './Header.css'
import logo from './logo.svg';
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
                <div className="xbox-slide">
                    <span>{this.props.xboxProfile.Gamertag}</span>
                </div>
                <div className="profile-slide">
                    <span>{this.props.steamProfile.personaname}</span>
                </div>
                {/*<Carousel.Item>*/}
                    {/*<img*/}
                    {/*className="d-block w-100"*/}
                    {/*src="holder.js/800x400?text=Sam Greaves&bg=373940"*/}
                    {/*alt="Profile Slide"/>*/}
                    {/*<Carousel.Caption>*/}
                        {/*<h3>First slide label</h3>*/}
                        {/*<p>some text here</p>*/}
                    {/*</Carousel.Caption>*/}
                {/*</Carousel.Item>*/}
                {/*<Carousel.Item>*/}
                    {/*<img*/}
                        {/*className="d-block w-100"*/}
                        {/*src="holder.js/800x400?text=Sam Greaves&bg=373940"*/}
                        {/*alt="Xbox Slide"/>*/}
                    {/*<Carousel.Caption>*/}
                        {/*<h3>First slide label</h3>*/}
                        {/*<p>some text here</p>*/}
                    {/*</Carousel.Caption>*/}
                {/*</Carousel.Item>*/}
                {/*<Carousel.Item>*/}
                    {/*<img*/}
                        {/*className="d-block w-100"*/}
                        {/*src="holder.js/800x400?text=Sam Greaves&bg=373940"*/}
                        {/*alt="Steam Slide"/>*/}
                    {/*<Carousel.Caption>*/}
                        {/*<h3>First slide label</h3>*/}
                        {/*<p>some text here</p>*/}
                    {/*</Carousel.Caption>*/}
                {/*</Carousel.Item>*/}
            </Carousel>

            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            </div>
        )
    }
}