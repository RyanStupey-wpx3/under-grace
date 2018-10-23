import React, { Component } from 'react';
import InputInfo from './InputInfo';
import Nav from '../navBar/Nav';
import '../main.css'
import './contact.css'
// import ImageCrsl from '../carousel/Carousel'

class Home extends Component {
    render() {
        return (
           <div className="body">
                <div className="central">
                <div className="hero"></div>
                <div className="hardcodedContactInfo">
                    <h4>name: Kathi Lang </h4>
                    <h4>email: kathilang58@gmail.com</h4>
                    <hr/>
                    <h3>I would love to connect with you and promise to respond quickly. Please take a moment to fill out the form below and I will get right back with you.</h3>
                </div>
                <div>
                    <InputInfo/>
                    <h4></h4>
                </div>
               
                </div>
                <footer></footer>
           </div>
        );
    }
}

export default Home; 