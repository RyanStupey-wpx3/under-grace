import React, { Component } from 'react';
import NewBlog from './NewBlog'
import {connect} from 'react-redux'
import Delete_button from './Delete_post'
import Edit_button from './Edit_button';
import EditBlog from '../editBlog/EditBlog'
import Nav from '../navBar/Nav';
import axios from 'axios'
 class AdminBlogPost extends Component {
    constructor(props){
        super(props)

        this.state = {
            newBlogStatus: false,
            message: '',
            blogs: [],
            adminButton:''
        }
        this.showTools = this.showTools.bind(this)
        this.delete_post = this.delete_post.bind(this)

    }

    componentDidMount(){
        axios.get('/api/posts')
        .then((resp) => {
            const blogs = resp.data
                 this.setState({
                        blogs: blogs,
                        adminButton: "show admin tools"
                    })
            })
            .catch((err) => {
                console.log('err', err)
            })
        
    }

    showTools(){
        if (this.props.user){
            if (this.props.user.user_status === 'admin' && this.state.newBlogStatus === false){
                this.setState({
                    newBlogStatus: true,
                    adminButton:"hide admin tools"
                })
             } else {
                     this.setState({
                         newBlogStatus: false,
                         adminButton:"show admin tools"
                        })
                    }
        } else {
            this.setState({
                message: 'sorry, please sign in',
            })
        }
        
    }

    delete_post(id){
        console.log('id', id)
        axios.delete(`/api/post/${id}`)
        .then(() => {
            axios.get('/api/posts')
            .then((resp) => {
                    const blogs = resp.data
                    console.log('resp.data', resp.data)
                    this.setState({blogs: blogs})
                    
                })
            .catch((err) => {
                 console.log('err', err)})
        }).catch((err) => {console.log('err', err)})
    }

    
    render() {
        const displayBlogs = this.state.blogs.map((elem, i) => {
            return(  <div key={elem.post_id} className="mainBlogContent">
   
                         <div className="mainContent">
                             
                             <h2 className="title">{elem.title}</h2>
                             <img className="" src={elem.graphic} />
                                 <p> <div className="blogImageDiv"></div>{elem.main_content}</p>
                         </div>
                         <Delete_button delete_post={this.delete_post} index={elem.post_id}/>
                         <Edit_button toggleState={() => this.toggleState(elem.post_id)}/>
                         {this.state.editStatus && this.state.newId == elem.post_id && <EditBlog submit_post={this.submit_post} index={elem.post_id} blogs={elem}/>}
                     </div>)
 
         })
        return (
            <div className="body">
                <div className="central">
                    <Nav/>
                    <div className="hero"></div>
                    {this.props.user && <h3>{this.props.user.username}</h3>}
                    {this.state.message && <div>{this.state.message}</div>}
                    <button onClick={() => this.showTools()}>{this.state.adminButton}</button>
                    {this.state.newBlogStatus && <NewBlog/>}
                    <div className="text-cont-outer">
                        <div className="text-content">
                            <div className="displayBlogsParent">{displayBlogs}</div>
                         </div>
                    </div>
                 </div>
                <footer></footer>
           </div>
                
            

        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(AdminBlogPost);