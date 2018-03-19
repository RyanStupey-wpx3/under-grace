import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './nav.css';

export default class Nav extends Component {
    render() {
        return (
            <header className="navParent">
                <h1>Under Fire</h1>
                 <ul className="navUl">
                        <Link to="/home"><li className="lin">HOME</li></Link>
                        <Link to="/blog"><li className="lin">BLOG</li></Link>
                        <Link to="/contact"><li className="lin">CONTACT ME</li></Link>
                        <Link to="/about"><li className="lin">ABOUT ME</li></Link>
                        <Link to="/"><li className="lin">LOGOUT</li></Link>
                 </ul>
            </header>
        );
    }
}