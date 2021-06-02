import React, { Component } from 'react';
import './Projects.css';
import project_data from '../../project_data.js';
import Items from './Item';

class Projects extends Component {
    constructor()
    {
        super()
        console.log(project_data)
    }

    render() {
        return (
            <div className="card_container">
                <Items/>
                <Items/>
                <Items/>
            </div>
        );
    }
}

export default Projects;