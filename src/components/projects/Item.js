import React, { Component } from 'react';
import './Projects.css';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGooglePlay, faGithubSquare, faMedium, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'

class Item extends Component {

    constructor(props)
    {
        super(props)
        console.log(props.info)
        this.state = {
            "id":props.info.id,
            "name": props.info.name,
            "short_description":props.info.short_description,
            "long_descriptio": props.info.long_description,
            "tags":props.info.tags,
            "date":props.info.date,
            "links":props.info.links,
            "banner_image":props.info.banner_image,
            "clicked":false
        }
        
    }
    know_more_handler = () =>{
        this.setState(prevState => {
            let newState = prevState;
            newState.clicked = !newState.clicked;
            return newState;
        })
    }


    get_link_jsx = (key,site,link) => {
        switch (site) {
            case "github":
                return <a className = "fa_link_anchor" rel="noopener noreferrer" target="_blank" href={link} key={key}><FontAwesomeIcon  size='2x' icon={faGithubSquare} /></a>
            case "youtube":
                return <a className = "fa_link_anchor" rel="noopener noreferrer" target="_blank" href={link} key={key}><FontAwesomeIcon   size='2x' icon={faYoutubeSquare}  /></a>
            case "medium":
                return <a className = "fa_link_anchor" rel="noopener noreferrer" target="_blank"href={link} key={key}><FontAwesomeIcon  size='2x' icon={faMedium}  /></a>
            case "google_play":
                return <a className = "fa_link_anchor" rel="noopener noreferrer" target="_blank"href={link} key={key}><FontAwesomeIcon  size='2x' icon={faGooglePlay}  /></a>    
            default:
                return <a className = "fa_link_anchor" rel="noopener noreferrer" target="_blank"href={link} key={key}><FontAwesomeIcon  size='2x' icon={faLink}  /></a>
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

        const modal = 
        <Modal className="modal" overlayClassName="modal_overlay" isOpen={this.state.clicked} onRequestClose={this.know_more_handler}>
            <img src={image.default} alt="someimage" className="modal_image"/>
            <div className="modal_container">
                <div className="modal_project_name">{this.state.name}</div>
                <div className="modal_project_long_desc">{this.state.long_descriptio}</div>
                <div className="modal_footer">
                    <div className="modal_external_links_container">
                        <div className="external_link_heading">External links</div>
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