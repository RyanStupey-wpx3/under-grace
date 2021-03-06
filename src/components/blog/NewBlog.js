import React, { Component } from 'react';
import './newblog.css';
import axios from 'axios';
import {connect} from 'react-redux';
import {changeBool} from '../../redux/reducer';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import StatefulEditor from '../StatefulEditor/StatefulEditor'
// import {Link, RichText, Date} from 'prismic-reactjs';

class NewBlog extends Component {
    constructor(props){
        super(props)

        this.state = {
            imageUrl: null,
            name: "",
            date: "",
            title:"",
            mainContent: "",
            uploadedFileCloudinaryUrl: "",
            post: 0,
            /////////changed///////////
            uploadedFile:{},
            ///////////////////////////
            eventState: this.props.event,
            newBlogBool: this.props.postBool,
            alertBox: false,

        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.postToDatabase = this.postToDatabase.bind(this)
        this.setAlertState = this.setAlertState.bind(this)
    }
   
      handleSubmit(event) {
        event.preventDefault();
      }
    
    //thought process: post table in database has a post_user column which stores and references the username of whoever submits the post

    // my foreign key is registered in the posts table in my database my join will be SELECT user.username, posts.post_date, post.post_user FROM posts INNER JOIN users ON post.post_user=users.username


    onImageDrop(files) {
        this.setState({
          uploadedFile: files[0]
        });

        this.handleImageUpload(files[0]);
    }

    handleImageUpload(file) {
        let upload = request.post(process.env.REACT_APP_CLOUDINARY_UPLOAD_URL)
                            .field('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET)
                            .field('file', file);
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

      handleChange(event){
        this.setState({ [event.target.name]: event.target.value });
    }


      postToDatabase(){
        // *** change back post_user to this.props.user.username
        axios.post('/api/posts', {post_user: this.state.name, post_date: this.state.date, title: this.state.title, main_content: this.state.mainContent, graphic: this.state.uploadedFileCloudinaryUrl})
        .then((resp) => {
            console.log('confirmed to db')
            this.setState({
                imageUrl: null,
                name: "",
                date: "",
                title:"",
                mainContent: "",
                uploadedFileCloudinaryUrl: "",
                alertBox: true,
            })
            
            if(this.props.postBool === false){
                this.props.changeBool(true)
            } else if(this.props.postBool === true) {
                this.props.changeBool(false)/* change redux state back to false*/
            }
            
        })
        .catch((err) => {console.log('err', err)})
            /* if postBool === false:  dispatch changeBool action*/
     
    }


    setAlertState(){
        this.setState({
            alertBox: false,
        })
    }

    

    render() {
        // console.log('cloudinaryurl', this.state.uploadedFileCloudinaryUrl)
        // console.log('this.state', this.state)
        const {name, date, title, mainContent} = this.state
    
        // const displayImage = this.state.imageUrl.map((elem) => {
        //     <div>
        //         <img src={elem.}
        //     </div>
        // })

        const alertBox = 
        <div onClick={() => {this.setState({alertBox: false})}}>
            <div className="alert">
                <span className="closebtn" onClick={() => this.setAlertState()}> &times;</span> 
                your post has been submitted
            </div>
        </div>
        
        return (
            <div>
            <div className="newBloginputContainer">
            {this.state.alertBox && alertBox}
                <form onSubmit={this.handleSubmit} className="newBlogpostForm">
                <Dropzone className="newBlogdropZoneDiv"
                multiple={false}
                accept="image/*"
                onDrop={this.onImageDrop.bind(this)}>
                <div className="newBlogdragImage">upload an image</div>
                <img className="newBloguploadedImage" src={this.state.uploadedFileCloudinaryUrl} />
                
                
            
            </Dropzone>
                    <input type="text"onChange={(e) => this.handleChange(e)}  name="name" value={this.state.name}  className="newBlogusernameInput " placeholder="username: bring in through redux"/>
                    <input type="text"onChange={(e) => this.handleChange(e)}  name="date" value={this.state.date} className="newBlogdateInput " placeholder="date of: "/>
                    <input type="text"onChange={(e) => this.handleChange(e)}  name="title" value={this.state.title} className="newBlogtitleInput " placeholder="title"/>
                    {/* <div className="newBlogblogContent"><StatefulEditor  name="mainContent" onChange={(e) => this.handleChange(e)} value={this.state.mainContent} /></div> */}
                    <textarea onChange={(e) => this.handleChange(e)}  name="mainContent" value={this.state.mainContent} className="newBlogblogContent " placeholder="blog message" />
                    <input className="newBlogsubmitButton" type="submit" onClick={() => this.postToDatabase()} value="post"/>
                    {/* pass postToDatabase as props down from adminblogPost */}
                </form>
                
            </div>
        </div>
        
        //    right now handling either post to db or this.handleChange 
        );
    }
}

const mapdispatchToProps = {
    changeBool: changeBool,
}


const mapStateToProps = (state) => {
    return {
        user: state.user,
        event: state.event,
        postBool:state.postBool
    }
}

export default connect(mapStateToProps, mapdispatchToProps)(NewBlog);