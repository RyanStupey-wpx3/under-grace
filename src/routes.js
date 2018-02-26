import React from 'react';
import App from './App'
import {Switch,Route} from 'react-router-dom';


export default (
<Switch>
    <Route exact path="/" component={App}/>
</Switch>
)