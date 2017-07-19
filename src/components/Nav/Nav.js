import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import './Nav.css'

class Nav extends Component {
    render() {
        return (
            <nav className="Nav">
                <span className="Nav-header">
                    <div className="Nav-title">John's App</div>
                </span>
                <ul className="Nav-navlist">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        )
    }
}

export default Nav;
