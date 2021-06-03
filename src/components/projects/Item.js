import React, { Component } from 'react';
import './Projects.css';

class Item extends Component {

    constructor()
    {
        super()
        this.state = {
            "id":0,
            "name": "Project0",
            "short_description":"this is a short description",
            "long_descriptio": "this is a long description",
            "tags":["tag1", "tag2"],
            "data":"1622641682",
            "links":{
                "github":"https://github.com/k-ran",
                "medium":"",
                "youtube":"https://youtube.com"    
            },
            "banner_image":"project0.jpg"
        }
        
    }

    know_more_handler = () =>{
        console.log("clicked id: "+ this.state.id)
    }

    render() {
        const image = require('../../images/'+this.state.banner_image)
        let mystyle = {
            "backgroundImage": "url("+image.default+")"
        } 
        console.log(image.default)
        return (
            <div className="project_card" style={mystyle}>
                <div className="project_short_description" >{this.state.short_description}
                <br/>
                <div className="project_know_more" onClick={this.know_more_handler}> KNOW MORE </div>
                </div>
                <div className="project_name"  >{this.state.name}</div>
            </div>
        );
    }
}

export default Item;