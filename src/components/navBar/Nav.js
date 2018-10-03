import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import {menuChange} from './menuchange'
import './nav.css';

export default class Nav extends Component {
    constructor(props){
        super(props)
        this.clickedNav = React.createRef()
        this.state = {
            home: "prim",
            contact: "prim",
            about: "prim",
            blog: "prim",
            contact: "prim",
        }
        //make state properties have the same value so setstate code is easy
        this.addActiveClass = this.addActiveClass.bind(this)
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

    // function changeClass(keyInState, val){
    //         if(keyInState === "home") {
    //             this.setState({home: })
    //         }
    // }

    addActiveClass(){
        // this.clickedNav.current
        console.log('this.clickedNav.current', this.clickedNav.current)
        this.clickedNav.current.classList.toggle("active")
    }
//    trying to have nav links show active page
    render() {
        
        return (
            <header className="navParent">
                <h1>Grace after Fire</h1>
                <hr/>
                 <ul  id="navUl">
                        <Link to="/"><li ref={this.clickedNav} onClick={this.addActiveClass} id="A" className="lin">HOME</li></Link>
                        <Link to="/blog"><li ref={this.clickedNav} onClick={this.addActiveClass} id="B" className="lin">BLOG</li></Link>
                        <Link to="/contact"><li ref={this.clickedNav} onClick={this.addActiveClass} id="C" className="lin">CONTACT</li></Link>
                        <Link to="/about"><li ref={this.clickedNav} onClick={this.addActiveClass} id="D" className="lin">ABOUT</li></Link>
                        <Link to="/"><li ref={this.clickedNav} onClick={this.addActiveClass} id="E" className="lin">LOGOUT</li></Link>
                 </ul>
                 
            </header>
        );
    }
}