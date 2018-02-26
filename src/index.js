import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';

// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<Router>
    <Switch>
        <Route exact path="/" component={App}/>
    </Switch>
</Router>, document.getElementById('root'));
// registerServiceWorker();
