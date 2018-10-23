import React from 'react';
import App from './App'
import Home from './components/home/Home'
import Login from './components/login/Login';
import Contact from './components/contact/Contact'
import Blog from './components/blog/Blog'
import AdminBlogPost from './components/blog/AdminBlogPost'
import About from './components/about/About'
import {Route, Switch, Redirect} from 'react-router-dom';

const redirectUri = encodeURIComponent(window.location.origin + '/auth/callback');
const link = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/login?client=${process.env.REACT_APP_AUTH0_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${redirectUri}&response_type=code`;

export default <Switch>

        <Route exact path="/" component={Home}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/blog" component={Blog}/>
        <Route path="/admin" component={Login}/>
        <Route path="/adminblog/uhoiu34r78ys7dvh4kjth8y" component={AdminBlogPost}/>
        <Route path="/about" component={About}/>
</Switch>       