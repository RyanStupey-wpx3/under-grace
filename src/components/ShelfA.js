import React, { Component } from 'react';
// import Bin from './Bin'
import {Link, Route} from 'react-router-dom'

class ShelfA extends Component {
  render() {
    return (
      <div className="App">
         <header className="App-header">
      <img className="arrow-logo" src={require('../images/logo.png')}/>
        </header>
        <p className="App-intro">
        </p>
        <Link to="/bin1a"> <div className="shelf"><p>Bin 1</p></div></Link>
        <Link to="/bin2a"><div className="shelf"><p>Bin 2</p></div></Link>
        <Link to="/bin3a"><div className="shelf"><p>Bin 3</p></div></Link>
        <Link to="/bin4a"><div className="shelf"><p>Bin 4</p></div></Link>
      </div>
    );
  }
}

export default ShelfA;
