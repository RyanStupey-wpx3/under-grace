import React from 'react';

import Home from './components/Home'
// import Bin from './components/bins/';
import ShelfA from './components/ShelfA';
import ShelfB from './components/ShelfB';
import ShelfC from './components/ShelfC';
import ShelfD from './components/ShelfD';
import {Switch,Route} from 'react-router-dom';


export default (
<Switch>
    <Route exact path="/" component={Home}/>
    {/* <Route path="/bin" component={Bin}/> */}
    <Route path="/shelfA" component={ShelfA}/>
    <Route path="/shelfB" component={ShelfB}/>
    <Route path="/shelfC" component={ShelfC}/>
    <Route path="/shelfD" component={ShelfD}/>
</Switch>
)