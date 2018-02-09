import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import InputField from './Input_and_buttons';
import {Link} from 'react-router-dom';
import routes from '../routes'
import ShelfA from './ShelfA';
import ShelfB from './ShelfB';
import ShelfC from './ShelfC';
import ShelfD from './ShelfD';
class Home extends Component {
  componentDidMount(){
    alert("Welcome to Shelfie")
  }
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
      <img className="arrow-logo" src={require('../images/logo.png')}/>
        </header>
       <Link to="/shelfA"> <div className="shelf"><p>Shelf A</p></div></Link>
        <Link to="/shelfB"><div className="shelf"><p>Shelf B</p></div></Link>
        <Link to="/shelfC"><div className="shelf"><p>Shelf C</p></div></Link>
        <Link to="/shelfD"><div className="shelf"><p>Shelf D</p></div></Link>
      
      </div>
    );
  }
}

export default Home;
