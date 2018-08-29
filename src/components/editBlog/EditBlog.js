import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'jq5jchmx'
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dpnlwo2iw/upload'
//used force Update in AdminBlogPost showTools
//need to update onChange methods
//need to update function post to Database and state 


export default class EditBlog extends Component {
    constructor(props){
        super(props)
console.log(props)
        this.state = {
            post_user: this.props.blogs.post_user,
            date: this.props.blogs.post_date,
            title: this.props.blogs.title,
            mainContent: this.props.blogs.main_content,
            uploadedFileCloudinaryUrl:'',
        }
        this.postToDatabase = this.postToDatabase.bind(this)
    }

    

    onImageDrop(files) {
        this.setState({
          uploadedFile: files[0]
        });

        this.handleImageUpload(files[0]);
    }

    handleImageUpload(file) {
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
                            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                            .field('file', file);
        console.log('upload', upload)
        upload.end((err, response) => {
          if (err) {
            console.error(err);
          }
    
          if (response.body.secure_url !== '') {
            this.setState({
              uploadedFileCloudinaryUrl: response.body.secure_url
            });
          }
        });
      }
      


    render() {
        console.log('cloudinaryurl', this.state.uploadedFileCloudinaryUrl)
        console.log(this.state)
        return (
            <div className="EditBlogParent">
                <Dropzone className="dropZoneDiv"
                    multiple={false}
                    accept="image/*"
                    onDrop={this.onImageDrop.bind(this)}>
                    {/* <p>Drop an image or click to select a file to upload.</p> */}
                    <img className="uploadedImage" src={this.state.uploadedFileCloudinaryUrl} />
                
                    {this.state.uploadedFileCloudinaryUrl === '' ? null : <div><p>{this.state.uploadedFile.name}</p></div>}

                </Dropzone>
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