import React, { Component } from 'react';
import '../main.css'
import './blog.css'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {log_in} from '../../redux/reducer'
import axios from 'axios'
import NewBlog from './NewBlog'
import Delete_button from './Delete_post'
import Edit_button from './Edit_button';
import Nav from '../navBar/Nav';
import EditBlog from '../editBlog/EditBlog'
import ImageCrsl from '../carousel/Carousel'


class Blog extends Component {
    constructor(props){
        super(props)

        this.state = {
            blogs: [],
            newBlogStatus: false,
            message: null,
            editStatus: false,
        }
        this.delete_post = this.delete_post.bind(this)
        this.edit_post = this.edit_post.bind(this)
    }
    componentDidMount(){
        axios.get('/api/posts')
        .then((resp) => {
            const blogs = resp.data
            this.setState({blogs: blogs})
            })
        axios.get('/api/user-data')
            .then((resp) => {
                this.props.log_in(resp.data.user)
                // console.log('this.props.user', this.props.user)
            })
    }


    delete_post(id){
        console.log('id', id)
        axios.delete(`/api/post/${id}`)
        .then(() => {
            axios.get('/api/posts')
            .then((resp) => {
                    const blogs = resp.data
                    this.setState({blogs: blogs})
                    
                })
            .catch((err) => {
                 console.log('err', err)})
        }).catch((err) => {console.log('err', err)})
    }



    showTools(){
        if (this.props.user.user_status === 'admin'){
            this.setState({newBlogStatus: true})
         } else {
                 this.setState({
                     message: 'sorry, please sign in',
                     newBlogStatus: false,
                    })
                }
    }

    edit_post(i){
        this.setState({
            
        })
        axios.patch(`/api/posts/${this.state.blogs[i].post_id}`, {post_user: this.state.blogs[i].post_user, post_date: this.state.blogs[i].post_date, title: this.state.blogs[i].title, main_content: this.state.blogs[i].main_content})
        .then((resp) => {
            this.setState({
               editStatus: true,
            })
        }).catch((err) => {
            console.log('err', err)
        })
    }
        
    render() {
        console.log('blogs.graphic', this.state.blogs.post_user)
        const displayBlogs = this.state.blogs.map((elem, i) => {
           return(  <div key={elem.post_id} className="mainBlogContent">
                        {/* <div>{elem.post_date}</div> */}
                        {/* <div>{elem.post_user}</div> */}
                        
                       
                        <div className="mainContent">
                            
                            <h2 className="title">{elem.title}</h2>
                                <p> <div className="blogImageDiv"><img className="" src={elem.graphic} /></div>{elem.main_content}</p>
                        </div>
                        <Delete_button delete_post={this.delete_post} index={elem.post_id}/>
                        <Edit_button edit_post={() => this.edit_post(i)} index={elem.post_id}/>
                        {this.state.editStatus &&  <EditBlog blogs={this.state.blogs}/>}
                    </div>)

        })
        return (
            
            <div className="body">
                <div className="central">
                {/* <header><h1>Under Fire</h1>
                    
                </header> */}
                <Nav/>
                {/* <div className="hero"><img src={require('../../images/liveBurn.jpg')}/></div> */}
                <div className="hero"><ImageCrsl/></div>
                <button onClick={() => this.showTools()}>show admin tools</button>
                {this.props.user && <h3>{this.props.user.username}</h3>}
                {this.state.newBlogStatus && <NewBlog/>}
                
                {this.state.message && <div>{this.state.message}</div>}
                <div className="text-cont-outer">

                    <div className="text-content">
                    
                        <h2></h2>
                        <div className="displayBlogsParent">{displayBlogs}</div>
                    </div>
                </div>
                    
                     </div>
                <footer></footer>
           </div>
        );
    }
}

const mapdispatchToProps = {
    log_in: log_in
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, mapdispatchToProps)(Blog);