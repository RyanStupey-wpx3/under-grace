import React, { Component } from 'react';
import axios from 'axios';

class InputInfo extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
        }
        this.getState = this.getState.bind(this)
    }

    getState(prop, val){
        console.log('from getstate')
        this.setState({
            [prop]: val, 
            
        })
    }

    sendContactInfo(){
        const {name, subject, email, message} = this.state
        axios.post('/api/contact', {name, subject, email, message})
        .then((resp) => {
            this.setState({
                name: null,
                subject: null,
                email: null,
                messsage: null,
            })

        })
    }

    render() {
        const {name, subject, email, message} = this.state
        
        return (
           <div className="body">
                <div className="central">
                <header></header>
                <div className="hero"></div>
                <div className="text-content"></div>
                <div>
                    <h3>rendering input on home page for testing</h3>
                    <form>
                        <input type="text" onChange={(e) => this.getState('name', e.target.value)} placeholder="name"/>
                        <input type="text" onChange={(e) => this.getState('email', e.target.value)} placeholder="email"/>
                        <input type="text" onChange={(e) => this.getState('subject', e.target.value)} placeholder="subject"/>
                        <input type="text" onChange={(e) => this.getState('message', e.target.value)} placeholder="message"/>
                        <input type="submit"/>
                    </form>
                    <h4>name: {name}</h4>
                    <h4>email: {email}</h4>
                    <h4>subject: {subject}</h4>
                    
                </div>
                </div>
                <footer></footer>
           </div>
        );
    }
}

export default InputInfo; 