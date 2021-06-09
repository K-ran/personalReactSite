import React, { Component } from 'react';
import profile_image from '../../images/profile_image.jpg'
import './Aboutme.css';

class Aboutme extends Component {
    render() {
        return (
            <div id = "aboutme" className="aboutme">
                <div className="about_me_title">About me</div>
                <img src = {profile_image} className="profile_image" alt="something" />
                <div className="profile_desc">
                Hi, I am Karan. I am a software developer by profession and I love to work on new products. Mostly I work with system programming but I do tinker with web and app development. Do check out my projects below to know more!
                </div>
            </div>
        );
    }
}

export default Aboutme;