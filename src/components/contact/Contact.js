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
                    <h3>Yes! You came to my website, and now you’re looking at my contact page.  I would love to hear from you – your thoughts, your fascinating story, questions, suggestions for improvements on my website, or a simple hello.  I promise you, I will respond!</h3>
                <div>
                    <InputInfo/>
                    <h4></h4>
                </div>
               
                </div>
                </div>
                <footer></footer>
           </div>
        );
    }
}

export default Home; 