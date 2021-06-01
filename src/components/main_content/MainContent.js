import React, { Component } from 'react';
import Aboutme from '../aboutme/Aboutme';
import Projects from '../projects/Projects';
import './MainContent.css';

class MainContent extends Component {
    render() {
        return (
            <main className="main_content">
                <Aboutme/>
                {/* <Projects/> */}
            </main>
        );
    }
}

export default MainContent;