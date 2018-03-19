import React, { Component } from 'react';

export default class EditBlog extends Component {
    constructor(props){
        super(props)
console.log(props)
        this.state = {
            post_user: this.props.blogs.post_user,
            date: this.props.blogs.post_date,
            title: this.props.blogs.title,
            mainContent: this.props.blogs.main_content,
        }
    }
   


    render() {
        console.log(this.state)
        return (
            <div className="EditBlogParent">
                <form onSubmit={this.handleSubmit} className="postForm">
                    <input type="text"onChange={(e) => this.setState({post_user: e.target.value})} value={this.state.post_user}  name="name"  className="usernameInput" placeholder="username: bring in through redux"/>
                    <input type="text"onChange={(e) => this.setState({date: e.target.value})} value={this.state.date}  name="date" className="dateInput" placeholder="date of: "/>
                    <input type="text"onChange={(e) => this.setState({title: e.target.value})} value={this.state.title}  name="title" className="titleInput" placeholder="title"/>
                    <textarea onChange={(e) => this.setState({mainContent: e.target.value})} value={this.state.mainContent}  name="mainContent" className="blogContent" placeholder="blog message" />
                    <input className="submitButton" type="submit" onClick={() => this.props.submit_post( this.props.blogs.post_id, this.state )} value="submit"/>
                </form>
                
            </div>
        );
    }
}