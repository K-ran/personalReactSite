import React, { Component } from 'react';
import './Hero.css';
class Hero extends Component {
    render() {
        return (
            <div className="hero">
                <div className="quote">
                    "Chains of habit are too light to be felt until they are too heavy to be broken."
                </div>
                <div className="author">
                    -Warren Buffett
                </div>
            </div>
        );
    }
}

export default Hero;