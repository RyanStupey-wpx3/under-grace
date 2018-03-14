import React from 'react';
import App from './App'
import Home from './components/home/Home'
import Login from './components/login/Login';
import Contact from './components/contact/Contact'
import Blog from './components/blog/Blog'
import {Route} from 'react-router-dom';


export default <React.Fragment>

        <Route exact path="/" component={Login}/>
        <Route path="/home" component={Home}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/blog" component={Blog}/>

</React.Fragment>