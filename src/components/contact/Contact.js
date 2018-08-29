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
                <Nav/>
                <div className="central">
                <div className="hero"></div>
                <div className="hardcodedContactInfo">
                    <h4>name: Kathi Lang </h4>
                    <h4>email: kathilang58@gmail.com</h4>
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