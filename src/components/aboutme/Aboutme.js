import React, { Component } from 'react';
import profile_image from '../../images/profile_image.jpg'
import './Aboutme.css';

class Aboutme extends Component {
    render() {
        return (
            <div className="aboutme">
                <img src = {profile_image} className="profile_image" alt="something" />
                <div className="profile_desc">
                Hi, I am Karan. I love to create new products and projects. My core interests include embedded firmwares, operating systems and computer networks. Sometimes I tinker with web and  app developments as well. Do check out my projects below to know more!
                </div>
            </div>
        );
    }
}

export default Aboutme;