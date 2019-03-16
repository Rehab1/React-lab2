import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import './nav.css';

class Navbar extends Component {

    state = {
        nav_links: [
          {
            name: "Posts",
            path: "/"
          },
          {
            name: "Users",
            path: "/users"
          },
          
        ],
    }

    render(){

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        {
                            this.state.nav_links.map( (navlink, index) => (
                                
                                (
                                    <li className="nav-item" key={index}>
                                        <NavLink exact to={navlink.path} className="nav-link" activeClassName="active_tab">
                                            {navlink.name}
                                        </NavLink>
                                    </li>
                                )
                                
                            ))
                        }    
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;