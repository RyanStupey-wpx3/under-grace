import React, { Component } from 'react';
import {NavLink, Route} from 'react-router-dom';
// import {menuChange} from './menuchange'
import './nav.css';

export default class Nav extends Component {
    constructor(props){
        super(props)
        this.clickedNav = React.createRef()
        this.state = {
            home: "lin",
            contact: "lin",
            about: "lin",
            blog: "lin",
            logout: "lin",
        }
        //make state properties have the same value so setstate code is easy
        this.addActive = this.addActive.bind(this)
        // this.changeClass = this.changeClass.bind(this)
        console.log('Route', Route)
    }

    // componentDidMount(){
    //     // if (Route.path)
    // }

    // changeClass(id){
    //     if(Object.values(this.state).includes('lin active')){
    //         this.setState({
    //             home: "lin",
    //             contact: "lin",
    //             about: "lin",
    //             blog: "lin",
    //             logout: "lin",
    //         })
    //     }
    //     if (this.state[id] === "lin"){
    //     this.setState({
    //         [id]: "lin active"
    //     })

    // } else {
    //     this.setState({
    //         [id]: "lin"
    //     })
    // }
    // console.log('Object.values(this.state).includes("lin active")', Object.values(this.state).includes("lin active"))
        // console.log('LinksLi.style.backgroundColor', linksLi.style.backgroundColor)
    // }

    addActive(id){
        // this.clickedNav.current
        var x = document.getElementById("navUl").getElementsByTagName("li")
        console.log('x', x)
       
    }
    
//    trying to have nav links show active page
    render() {
        console.log('Object.values(this.state).includes("lin active")', Object.values(this.state).includes("lin active"))
        console.log('rerender')
        console.log('this.state', this.state)
        return (
            <header className="navParent">
                <h1 className="graceAfterTitle">Grace after fire . . .</h1>
                <hr/>
                 <ul  id="navUl"  ref={this.clickedNav}>
                        <NavLink to="/home" activeClassName="active"><li   className={this.state.home} key={1}  id="home" >HOME</li></NavLink>
                        <NavLink to="/blog" activeClassName="active"><li  className={this.state.blog}  key={2}  id="blog">BLOG</li></NavLink>
                        <NavLink to="/contact" activeClassName="active"><li  className={this.state.contact}  key={3} id="contact" >CONTACT</li></NavLink>
                        <NavLink to="/about" activeClassName="active"><li  className={this.state.about}  key={4} id="about" >ABOUT</li></NavLink>
                        {/* <Link to="/"><li  className={this.state.logout}  key={5} onClick={() => this.changeClass('logout')} id="logout" >LOGOUT</li></Link> */}
                 </ul>
                 
            </header>
        );
    }
}