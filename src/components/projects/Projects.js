import React, { Component } from 'react';
import './Projects.css';
import project_data from '../../project_data.js';
import Items from './Item';

class Projects extends Component {
    
    render() {
        let item_array = []
        let i=0;
        while(i<project_data.length)
        {
            item_array.push(<Items key={project_data[i].id} info={project_data[i]}/>)
            i++;
        }
        return (
            <div className="card_container">
                <div className="projects_title">Projects</div>
                {item_array}
            </div>
        );
    }
}

export default Projects;