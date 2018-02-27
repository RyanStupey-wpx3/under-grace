import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import {Link} from 'react-router-dom';
import routes from './routes'
import InputInfo from './components/contact/InputInfo'
import Home from './components/home/Home'
class App extends Component {
  render() {
    return (
      <div>
       <h1>this is App</h1>
          <Home/>
      </div>
    );
  }
}

export default App;
