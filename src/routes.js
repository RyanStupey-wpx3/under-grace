import React from 'react';
import App from './App'
import Home from './components/home/Home'
import Login from './components/login/Login';
import Contact from './components/contact/Contact'
import Blog from './components/blog/Blog'
import AdminBlogPost from './components/blog/AdminBlogPost'
import About from './components/about/About'
import {Route, Switch, Redirect} from 'react-router-dom';

export default <Switch>
        {/* redirect root route to home route */}
        <Route exact path="/" render={() => {return (<Redirect to="/home"/>)}}/>
        <Route path="/home" component={Home}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/blog" component={Blog}/>
        <Route path="/admin" component={Login}/>
        <Route path="/adminblog/uhoiu34r78ys7dvh4kjth8y" component={AdminBlogPost}/>
        <Route path="/about" component={About}/>
</Switch>       