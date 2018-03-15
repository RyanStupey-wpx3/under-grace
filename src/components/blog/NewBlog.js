import React, { Component } from 'react';
import './newblog.css';
import axios from 'axios';
import {connect} from 'react-redux';
// import ImageUploader from '../ImageUploadComponent'
import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'jq5jchmx'
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dpnlwo2iw/upload'


class NewBlog extends Component {
    constructor(props){
        super(props)

        this.state = {
            imageUrl: null,
            name:'',
            date:'',
            title:'',
            mainContent:'',
            uploadedFileCloudinaryUrl:'',

        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
   
    handleChange(event) {
        // console.log(event.target)
        this.setState({ [event.target.name]: event.target.value });
      }

      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
    

    postToDatabase(){
        console.log(this.state)
        axios.post('/api/posts', {post_user: this.props.user.username, post_date: this.state.date, title: this.state.title, main_content: this.state.mainContent, graphic: this.state.uploadedFileCloudinaryUrl})
        .then((resp) => {
            console.log('resp.data', resp.data)
            console.log('confirmed to db')
            this.setState({
                name:'',
                date:'',
                title:'',
                mainContent:'',
            })
        })
        .catch((err) => {console.log('err', err)})
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
        // console.log('state', this.state)
        const {name, date, title, mainContent} = this.state
        // const displayImage = this.state.imageUrl.map((elem) => {
        //     <div>
        //         <img src={elem.}
        //     </div>
        // })
        
        return (
            <div>
            <div className="inputContainer">
                        
            <Dropzone className="dropZoneDiv"
                multiple={false}
                accept="image/*"
                onDrop={this.onImageDrop.bind(this)}>
                {/* <p>Drop an image or click to select a file to upload.</p> */}
                <img className="uploadedImage" src={this.state.uploadedFileCloudinaryUrl} />
                
                {this.state.uploadedFileCloudinaryUrl === '' ? null :
            <div>
                <p>{this.state.uploadedFile.name}</p>
               
            </div>}
            </Dropzone>
                <form onSubmit={this.handleSubmit} className="postForm">
                    <input type="text"onChange={(e) => this.handleChange(e)}  name="name" value={this.props.user.username}  className="usernameInput" placeholder="username: bring in through redux"/>
                    <input type="text"onChange={(e) => this.handleChange(e)}  name="date" value={this.state.date} className="dateInput" placeholder="date of: "/>
                    <input type="text"onChange={(e) => this.handleChange(e)}  name="title" value={this.state.title} className="titleInput" placeholder="title"/>
                    <textarea onChange={(e) => this.handleChange(e)}  name="mainContent" value={this.state.mainContent} className="blogContent" placeholder="blog message" />
                    <input className="submitButton" type="submit" onClick={() => this.postToDatabase()} value="post"/>
                </form>
                
            </div>
        </div>
        
           
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(NewBlog);