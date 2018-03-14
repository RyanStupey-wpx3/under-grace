import React, { Component } from 'react';
import InputInfo from './InputInfo'

class Home extends Component {
    render() {
        return (
           <div className="body">
                <header></header>
                <div className="central">
                <div>
                    <h4>email</h4>
                    <h4>:</h4>
                    <InputInfo/>
                    <h4></h4>
                </div>
                </div>
                <footer></footer>
           </div>
        );
    }
}

export default Home; 