import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import {menuChange} from './menuchange'
import './nav.css';

export default class Nav extends Component {
    constructor(props){
        super(props)
        this.state = {
            liClass:'',
        }
    
    }
    // menuChange(id){
    //     let testSelector = this.state.liClass;
    //     let ulSelector = this.state.ulClass;

    //     console.log('ulSelector', ulSelector)
    //     for (var i = 0; i < ulSelector.length; i++) {
    //       if (ulSelector[i].classList.contains('active')){
    //           ulSelector[i].classList.remove('active')
    //       } 
    //     }
        
    //     if (testSelector.classList.contains('active')){
    //      return testSelector.classList.remove('active')
    //     } else {
    //      return testSelector.classList.add('active')
    //     }                                                         
    //     return testSelector
    // }
   
    render() {
        
        return (
            <header className="navParent">
                <h1>Grace after Fire</h1>
                 <ul  id="navUl">
                        <Link to="/home"><li id="A" className="lin">HOME</li></Link>
                        <Link to="/blog"><li id="B" className="lin">BLOG</li></Link>
                        <Link to="/contact"><li id="C" className="lin">CONTACT</li></Link>
                        <Link to="/about"><li id="D" className="lin">ABOUT</li></Link>
                        <Link to="/"><li id="E" className="lin">LOGOUT</li></Link>
                 </ul>
            </header>
        );
    }
}