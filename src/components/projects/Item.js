import React, { Component } from 'react';
import './Projects.css';
import Modal from 'react-modal';

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
            "banner_image":"project0.jpg",
            "clicked":false
        }
        
    }

    know_more_handler = () =>{
        console.log("clicked id: "+ this.state.id)
        this.setState(prevState => {
            let newState = prevState;
            newState.clicked = !newState.clicked;
            return newState;
        })
        console.log(this.state.clicked);
    }

    render() {
        const image = require('../../images/'+this.state.banner_image)
        let mystyle = {
            "backgroundImage": "url("+image.default+")"
        } 
        console.log(image.default)
        return (
            <div className="project_card" style={mystyle}>
                <Modal className="modal" overlayClassName="modal_overlay" isOpen={this.state.clicked} onRequestClose={this.know_more_handler}>
                    <img src={image.default} alt="someimage" className="modal_image"/>
                    <div className="modal_container">
                        <div className="modal_project_name">{this.state.name}</div>
                        <div className="modal_project_long_desc">{this.state.long_descriptio}</div>
                    </div>
                </Modal>

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