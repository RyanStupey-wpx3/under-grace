import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './components/home/Home'
import Login from './components/login/Login';
import Contact from './components/contact/Contact'
import Blog from './components/blog/Blog'
import {Provider} from 'react-redux'
import store from './redux/store'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
<Provider store={store}>
    <Router>
         <App/>
    </Router>
</Provider>, document.getElementById('root'));
// registerServiceWorker();



