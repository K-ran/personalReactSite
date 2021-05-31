import React, { Component } from 'react';
import './Hero.css';
class Hero extends Component {
    render() {
        return (
            <div className="hero">
                <div className="quote">
                    "Most people overestimate what they can do in one year and underestimate what they can do in ten years"
                </div>
                <div className="author">
                    - Someone smart
                </div>
            </div>
        );
    }
}

export default Hero;