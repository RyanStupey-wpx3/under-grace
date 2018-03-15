import React, { Component } from 'react';

export default class EditBlog extends Component {
    constructor(props){
        super(props)

        this.state = {
            post_user: this.props.blogs.post_user,
            date: this.props.blogs.date,
            title: this.props.blogs.title,
            mainContent: this.props.blogs.mainContent,
        }
    }
    handleChange(event) {
        // console.log(event.target)
        this.setState({ [event.target.name]: event.target.value });
      }

    render() {
        return (
            <div className="EditBlogParent">
                <form onSubmit={this.handleSubmit} className="postForm">
                    <input type="text"onChange={(e) => this.handleChange(e)}  name="name" value={this.state.post_user}  className="usernameInput" placeholder="username: bring in through redux"/>
                    <input type="text"onChange={(e) => this.handleChange(e)}  name="date" value={this.state.date} className="dateInput" placeholder="date of: "/>
                    <input type="text"onChange={(e) => this.handleChange(e)}  name="title" value={this.state.title} className="titleInput" placeholder="title"/>
                    <textarea onChange={(e) => this.handleChange(e)}  name="mainContent" value={this.state.mainContent} className="blogContent" placeholder="blog message" />
                    <input className="submitButton" type="submit" onClick={() => this.postToDatabase()} value="submit"/>
                </form>
                
            </div>
        );
    }
}