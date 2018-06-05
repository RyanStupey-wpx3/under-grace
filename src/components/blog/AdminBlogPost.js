import React, { Component } from 'react';

export default class AdminBlogPost extends Component {
    constructor(props){
        super(props)

        this.state = {

        }
        this.showTools = this.showTools.bind(this)
    }
    showTools(){
        if (this.props.user){
            if (this.props.user.user_status === 'admin'){
                this.setState({newBlogStatus: true})
             } else {
                     this.setState({
                         message: 'sorry, please sign in',
                         newBlogStatus: false,
                         
                        })
                    }

        } else {
            alert('we are sorry, but you do not have proper permissions to view these tools')
        }
        
    }
    render() {
        return (
            <div>Admin views
                <button onClick={() => this.showTools()}>show admin tools</button>
            </div>

        );
    }
}