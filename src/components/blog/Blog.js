import React, { Component } from 'react';
import '../main.css'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {log_in} from '../../redux/reducer'
import axios from 'axios'
import NewBlog from './NewBlog'
import Delete_button from './Delete_post'
import Edit_button from './Edit_button'


class Blog extends Component {
    constructor(props){
        super(props)

        this.state = {
            blogs: [],
            newBlogStatus: false,
            message: null,
        }
        this.delete_post = this.delete_post.bind(this)
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
                 this.setState({message: 'sorry, please sign in'})
                }
    }

    edit_post(id){
        axios.patch('/api/posts', )
    }
        
    render() {
        console.log('blogs', this.state.blogs)
        const displayBlogs = this.state.blogs.map((elem, i) => {
           return(  <div>
                        <div>{elem.post_date}</div>
                        <div>{elem.post_user}</div>
                        <div className="blogImageDiv"><img src={'https://' + elem.graphic}/></div>
                        <div>{elem.title}</div>
                        <div>{elem.main_content}</div>
                        <Delete_button delete_post={this.delete_post} index={i}/>
                        <Edit_button edit_post={this.edit_post} index={i}/>
                    </div>)

        })
        return (
            
            <div className="body">
                <div className="central">
                <header><h1>Under Fire</h1></header>
                <div className="hero"><img src={require('../../images/liveBurn.jpg')}/></div>
                <nav>
                    <ul>
                        <Link to="/blog"><li>Blog</li></Link>
                        <Link to="/contact"><li>Contact Info</li></Link>
                        <Link to="/about"><li>About Me</li></Link>
                        <Link to="/"><li>logout</li></Link>
                    </ul>
                </nav> 
                <button onClick={() => this.showTools()}>show admin tools</button>
                {this.props.user && <h3>{this.props.user.username}</h3>}
                {this.state.newBlogStatus && <NewBlog/>}
                
                {this.state.message && <div>{this.state.message}</div>}
                <div className="text-cont-outer">
                    <div className="text-content">
                        <h2>"oh how I wish this world was already aflame"</h2>
                        <div>{displayBlogs}</div>
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