import React, { Component } from 'react';
import './Projects.css';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faMedium, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'

class Item extends Component {

    constructor(props)
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
                "medium":"https://medium.com",
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


    get_link_jsx = (key,site,link) => {
        console.log(site,link);
        switch (site) {
            case "github":
                return <a className = "fa_link_anchor" rel="noopener noreferrer" target="_blank" href={link} key={key}><FontAwesomeIcon  size='2x' icon={faGithubSquare} /></a>
            case "youtube":
                return <a className = "fa_link_anchor" rel="noopener noreferrer" target="_blank" href={link} key={key}><FontAwesomeIcon   size='2x' icon={faYoutubeSquare}  /></a>
            case "medium":
                return <a className = "fa_link_anchor" rel="noopener noreferrer" target="_blank"href={link} key={key}><FontAwesomeIcon  size='2x' icon={faMedium}  /></a>
            default:
                break;
        }
    }

    get_links = () => {
        let linkjsx = []
        var link;
        let i = 0;
        for (link in this.state.links)
        {
            linkjsx.push(this.get_link_jsx(i, link,this.state.links[link]))
            i++;
        }
        return linkjsx;
    }

    render() {
        const image = require('../../images/'+this.state.banner_image)
        let mystyle = {
            "backgroundImage": "url("+image.default+")"
        } 
        console.log(image.default)

        const modal = 
        <Modal className="modal" overlayClassName="modal_overlay" isOpen={this.state.clicked} onRequestClose={this.know_more_handler}>
            <img src={image.default} alt="someimage" className="modal_image"/>
            <div className="modal_container">
                <div className="modal_project_name">{this.state.name}</div>
                <div className="modal_project_long_desc">{this.state.long_descriptio}</div>
                <div className="modal_footer">
                    <div className="modal_external_links_container">
                        <div className="external_link_heading">External links: </div>
                        <div className="modal_project_links">{this.get_links()}</div>
                    </div>
                    <div className="modal_close_container">
                        <button className="modal_close_button" onClick={this.know_more_handler}>Close</button>
                    </div>
                    
                </div>
            </div>
        </Modal>

        return (
            <div className="project_card" style={mystyle}>
                {modal}
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