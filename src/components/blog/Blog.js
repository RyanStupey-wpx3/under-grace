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
            newId: ''
        }
        this.delete_post = this.delete_post.bind(this)
        // this.edit_post = this.edit_post.bind(this)
        // this.toggleState. this.toggleState.bind(this)
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

    toggleState(i){
        if(this.state.editStatus){
            this.setState({
                editStatus: false,
                newId: ""
            })
        } else {
            this.setState({
                editStatus: true,
                newId: i
            })
        }
    }

    submit_post(i, body){
        console.log('i & body', i, HTMLBodyElement)
        axios.put(`/api/posts/${i}`, {...body, post_id: i})
        .then(() => {
            console.log('hit put')
        }).catch((err) => {
            console.log('err', err)
        })
    }
    
        
    render() {
        console.log('blogs.graphic', this.state.blogs)
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