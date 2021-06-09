import React, { Component } from 'react';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faChevronUp } from '@fortawesome/free-solid-svg-icons'
class Navbar extends Component {

    constructor()
    {
        super();
        this.state = 
        {
            barextended:false
        }
    }

    bar_toggle = () => {
        this.setState(
            {
                barextended: !this.state.barextended
            }
        )
    }

    render() {
        return (
            <div className="navbar">
                <div className="navbar-title">
                    <div className="navbar-title-text">Karan Purohit</div>
                    <FontAwesomeIcon onClick={this.bar_toggle} className="navbar-title-icon" icon={this.state.barextended?faChevronUp:faBars} />
                </div>
               
                <ul className="navbar-menuItemList" style={{display: this.state.barextended?"flex":"none"}}>
                    <li className="navbar-menuItem" ><a href="#home">Home</a></li>
                    <li className="navbar-menuItem" ><a href="#aboutme">About</a></li>
                    <li className="navbar-menuItem" ><a href="#projects">Projects</a></li>
                    <li className="navbar-menuItem" ><a href="#footer">Contacts</a></li>
                </ul>
            </div>
        );
    }
}

export default Navbar;