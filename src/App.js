import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import {Link} from 'react-router-dom';
import routes from './routes'
import InputInfo from './components/contact/InputInfo'
import Home from './components/home/Home'
import Login from './components/login/Login';
class App extends Component {
  render() {
    return (
      <div>
          {routes}
      </div>
    );
  }
}

export default App;
