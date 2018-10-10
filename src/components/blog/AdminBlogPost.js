import React, { Component } from 'react';
import NewBlog from './NewBlog'
import {connect} from 'react-redux';
import {changeBool} from '../../redux/reducer';
import Delete_button from './Delete_post'
import Edit_button from './Edit_button';
import EditBlog from '../editBlog/EditBlog'
import Nav from '../navBar/Nav';
import axios from 'axios';
import './blog.css';

 class AdminBlogPost extends Component {
    constructor(props){
        super(props)

        this.state = {
            updateFromNewPost: this.props.postBool,
            newBlogStatus: false,
            message: '',
            blogs: [],
            adminButton:'',
            usersAndPosts:[],
            editStatus: false,
            newId: '',
            mainContent: "",
            hasPostedMessage: "your post has been submitted"
        }
        // this.showTools = this.showTools.bind(this)
        this.delete_post = this.delete_post.bind(this)
        // this.postToDatabase = this.postToDatabase.bind(this)
        this.toggleState = this.toggleState.bind(this)
        this.fetchPosts = this.fetchPosts.bind(this)
        this.changeRedux = this.changeRedux.bind(this)
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
        axios.get('/api/getUserPostInfo')
        .then((resp) => {
            this.setState({
                usersAndPosts: resp.data
            })
        })
        
    }

    fetchPosts(){
        console.log('hit fetch')
        axios.get('/api/posts')
        .then((resp) => {
            const blogs = resp.data
                 this.setState({
                        blogs: blogs,
                        adminButton: "show admin tools",
                        message: "your post has been submitted"
                    })
            })
            .catch((err) => {
                console.log('err', err)
            })
    }

    changeRedux(){
        this.props.changeBool(false)
    }

    componentWillUpdate(oldprops) {
        console.log(" hit compWillUpdate")
        // this.props.postBool in redux should be false from NewBlog
        console.log('this.props.postBool from Admin compWillUpdate', this.props.postBool)

        if (this.props.postBool !== oldprops.postBool) {
            // this.changeRedux()
            console.log(" hit if statement in CompWillUpdate: true")
            this.fetchPosts()
        } else {
            console.log(" hit if statement in CompWillUpdate: false")
            return null;
        }
        
      }
       
    

    showTools(){

        // if (this.props.user){
            // if (this.props.user.user_status === 'admin' && this.state.newBlogStatus === false){
            if (this.state.newBlogStatus === false){
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

                    this.setState({ state: this.state });
        
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

    submit_post(i, body){
        console.log('i & body', i, HTMLBodyElement)
        axios.put(`/api/posts/${i}`, {...body, post_id: i})
        .then(() => {
            console.log('hit put')
        }).catch((err) => {
            console.log('err', err)
        })

        axios.get('/api/posts')
        .then((resp) => {
            const blogs = resp.data
            this.setState({
                   blogs: blogs,
                   adminButton: "show admin tools"
               })
       })
        
    }


    //from blog.js togglestate()

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

    handleChange(event){
        this.setState({ [event.target.name]: event.target.value });
    }

    
    render() {
       
        // console.log('this.state.mainContent', this.state.mainContent)
        const displayBlogs = this.state.blogs.map((elem, i) => {
            return(  <div key={elem.post_id} className="mainBlogContent">
   
                         <div className="mainContent">
                             
                             <h2 className="title">{elem.title}</h2>
                             <img className="" src={elem.graphic} />
                                 <div className="blogImageDiv"></div>{elem.main_content}
                         </div>
                        {this.state.newBlogStatus && <Delete_button delete_post={this.delete_post} index={elem.post_id}/>}
                        {this.state.newBlogStatus &&  <Edit_button toggleState={() => this.toggleState(elem.post_id)}/>}
                         {this.state.editStatus && this.state.newId == elem.post_id && <EditBlog submit_post={this.submit_post} index={elem.post_id} blogs={elem} />}
                     </div>)
 
         })
         

         const displayUserInfoFromJoin = this.state.usersAndPosts.map((elem) => {
             return (
                 <div>
                     <h4>{elem.post_user} posted on: {elem.post_date}</h4>
                 </div>
             )
         })

          
        return (
            <div className="body">
                <div className="central">
                    <Nav/>
                    <div className="hero"></div>
                    {this.props.user && <h3>{this.props.user.username}</h3>}
                    <button onClick={() => this.showTools()}>{this.state.adminButton}</button>
                    {/* <div className="foreignKey">
                        <h2>userInfo from Join and foreign key:</h2>
                        <div className="userInfoDiv">{displayUserInfoFromJoin}</div>
                    </div> */}
                        <div className="newBlogDivAdmin">
                         {this.state.newBlogStatus && <NewBlog handleChange={this.handleChange} postToDb={this.postToDatabase} name={this.state.name} date={this.state.date} title={this.state.title} mainContent={this.state.mainContent}/>}
                         {/*postToDb={this.postToDatabase}*/}
                         </div>
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

// const mapdispatchToProps = {
//     post_body: post_body
// }
const mapdispatchToProps = {
    changeBool: changeBool,
}


const mapStateToProps = (state) => {
    return {
        user: state.user,
        postBool: state.postBool
    }
}

export default connect(mapStateToProps)(AdminBlogPost);