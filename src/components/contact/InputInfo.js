import React, { Component } from 'react';
import axios from 'axios';
import './inputInfo.css'

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
        this.sendContactInfo = this.sendContactInfo.bind(this)
    }

    getState(prop, val){
        console.log('from getstate')
        this.setState({
            [prop]: val, 
            
        })
    }

    sendContactInfo(){
        console.log('hit function')
        const {name, subject, email, message} = this.state
        axios.post('/api/send-email', {to: email, subject: subject, message: message, name: name})
        .then((resp) => {
            // this.setState({
            //     name: null,
            //     subject: null,
            //     email: null,
            //     messsage: null,
            // })

        })
    }

    render() {
        const {name, subject, email, message} = this.state
        
        return (
           <div className="body">
                <div className="central">
                <div>
                    <form className="contactForm" onSubmit={this.sendContactInfo}>
                        <input className="inputField" type="text" onChange={(e) => this.getState('name', e.target.value)} name="name" placeholder="name"/>
                        <input className="inputField" type="email" onChange={(e) => this.getState('email', e.target.value)} name="to" placeholder="email"/>
                        <input className="inputField" type="text" onChange={(e) => this.getState('subject', e.target.value)} name="subject" placeholder="subject"/>
                        <textarea className=" inputField messageBox" onChange={(e) => this.getState('message', e.target.value)} name="message" placeholder="message"/>
                        <input className="sendButton" onSubmit={() => alert(' your message has been sent!')} type="submit" value="send"/>
                    </form>
                    
                    
                </div>
                </div>
           </div>
        );
    }
}

export default InputInfo; 