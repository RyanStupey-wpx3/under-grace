import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import InputField from './components/Input_and_buttons';
import {Link} from 'react-router-dom';
import routes from './routes'
import ShelfA from './components/ShelfA';
import ShelfB from './components/ShelfB';
import ShelfC from './components/ShelfC';
import ShelfD from './components/ShelfD';
import Home from './components/Home';
class App extends Component {
  render() {
    return (
      <div>
        <Home/>
        {routes}
      </div>
    );
  }
}

export default App;
