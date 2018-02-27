import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './components/home/Home'
import Contact from './components/contact/Contact'
import {HashRouter as Router, Switch, Route} from 'react-router-dom';

// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<Router>
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/contact" component={Contact}/>
    </Switch>
</Router>, document.getElementById('root'));
// registerServiceWorker();
