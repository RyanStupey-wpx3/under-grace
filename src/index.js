import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import ShelfA from './components/ShelfA';
import ShelfB from './components/ShelfB';
import ShelfC from './components/ShelfC';
import ShelfD from './components/ShelfD';
import Home from './components/Home';

import Bin1 from './components/bins/Bin.1'
import Bin2 from './components/bins/Bin.2'
import Bin3 from './components/bins/Bin.3'
import Bin4 from './components/bins/Bin.4'
import Bin from './components/bins/Bin'
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<Router>
    <Switch>
        <Route exact path="/" component={Home}/>
        {/* <Route path="/bin" component={Bin}/> */}
        <Route path="/shelfA" component={ShelfA}/>
        <Route path="/shelfB" component={ShelfB}/>
        <Route path="/shelfC" component={ShelfC}/>
        <Route path="/shelfD" component={ShelfD}/>
        <Route path="/bin1a" component={Bin1}/>
        <Route path="/bin2a" component={Bin2}/>
        <Route path="/bin3a" component={Bin3}/>
        <Route path="/bin4a" component={Bin4}/>
    </Switch>
</Router>, document.getElementById('root'));
// registerServiceWorker();
