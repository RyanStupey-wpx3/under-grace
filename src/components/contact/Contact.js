import React, { Component } from 'react';
import InputInfo from './InputInfo';
import Nav from '../navBar/Nav';
import Carousel from '../carousel/Carousel'

class Home extends Component {
    render() {
        return (
           <div className="body">
                <header><Nav/></header>
                <div className="central">
                <div><Carousel/></div>
                <div>
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