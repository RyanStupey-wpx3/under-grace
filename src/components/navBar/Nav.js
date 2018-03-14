import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './nav.css';

export default class Nav extends Component {
    render() {
        return (
            <div>
                 <ul>
                        <Link to="/blog"><li>Blog</li></Link>
                        <Link to="/contact"><li>Contact Info</li></Link>
                        <Link to="/about"><li>About Me</li></Link>
                 </ul>
            </div>
        );
    }
}