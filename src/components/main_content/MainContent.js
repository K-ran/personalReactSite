import React, { Component } from 'react';
import Aboutme from '../aboutme/Aboutme';
import Projects from '../projects/Projects';

class MainContent extends Component {
    render() {
        return (
            <div>
                <Aboutme/>
                <Projects/>
            </div>
        );
    }
}

export default MainContent;