import React, { Component } from 'react';
import './Projects.css';

class Item extends Component {

    constructor()
    {
        super()
        this.state = {
            "id":1,
            "name":"Project1",
            "img_src":"project0.jpg"
        }
        
    }

    render() {
        const image = require('../../images/'+this.state.img_src)
        let mystyle = {
            "backgroundImage": "url("+image.default+")"
        } 
        console.log(image.default)
        return (
            <div className="project_card" style={mystyle}>
                <div className="project_name" >{this.state.name}</div>
                {/* <img src={} alt="someting"></img> */}
            </div>
        );
    }
}

export default Item;