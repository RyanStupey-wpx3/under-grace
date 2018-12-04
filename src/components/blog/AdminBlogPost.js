// import React, { Component } from 'react';
// import NewBlog from './NewBlog'
// import {connect} from 'react-redux';
// import {changeBool} from '../../redux/reducer';
// import {log_in} from '../../redux/reducer';
// import Delete_button from './Delete_post'
// import Edit_button from './Edit_button';
// import EditBlog from '../editBlog/EditBlog'
// import axios from 'axios';
// import './blog.css';

//  class AdminBlogPost extends Component {
//     constructor(props){
//         super(props)

//         this.state = {
//             updateFromNewPost: this.props.postBool,
//             newBlogStatus: true,
//             message: '',
//             blogs: [],
//             adminButton:'',
//             usersAndPosts:[],
//             editStatus: false,
//             newId: '',
//             mainContent: "",
//             hasPostedMessage: "your post has been submitted",
//             notLoggedIn: '',
//         }
//         // this.showTools = this.showTools.bind(this)
//         this.delete_post = this.delete_post.bind(this)
//         // this.postToDatabase = this.postToDatabase.bind(this)
//         this.toggleState = this.toggleState.bind(this)
//         this.fetchPosts = this.fetchPosts.bind(this)
//         this.changeRedux = this.changeRedux.bind(this)
//         this.getUserInfo = this.getUserInfo.bind(this)
//         this.submit_post = this.submit_post.bind(this)
//     }
//     getUserInfo(){
//         axios.get('/api/user-data')
//             .then((resp) => {
//                 this.props.log_in(resp.data.user)
//             })
//             .catch((err) => {
//                 console.log('err', err)
//             })
//     }
//     // componentDidMount(){
//     //     axios.get('/api/posts')
//     //     .then((resp) => {
//     //         const blogs = resp.data
//     //              this.setState({
//     //                     blogs: blogs.sort((a, b) => {
//     //                         return b.post_id - a.post_id
//     //                     }),
//     //                     adminButton: "show admin tools"
//     //                 })
//     //         })
//     //         .catch((err) => {
//     //             console.log('err', err)
//     //         })
        
//     // }

//     fetchPosts(){
//         axios.get('/api/posts')
//         .then((resp) => {
//             const blogs = resp.data
//                  this.setState({
//                         blogs: blogs.sort((a, b) => {
//                             return b.post_id - a.post_id
//                         }),
//                         adminButton: "show admin tools",
//                         message: "your post has been submitted"
//                     })
//             })
//             .catch((err) => {
//                 console.log('err', err)
//             })
//     }

//     changeRedux(){
//         this.props.changeBool(false)
//     }

//     componentWillUpdate(oldprops) {
//         // this.props.postBool in redux should be false from NewBlog
//         if (this.props.postBool !== oldprops.postBool) {
//             // this.changeRedux()
//             this.fetchPosts()
//         } else {
//             return null;
//         }
        
//       }
       
    

//     showTools(){

//             if (this.state.newBlogStatus === false && this.props.user.user_status === 'admin'){
//                 this.setState({
//                     newBlogStatus: true,
//                     adminButton:"hide admin tools"
//                 })
//              } else {
//                      this.setState({
//                          newBlogStatus: false,
//                          adminButton:"show admin tools"
//                         })
//                     }

//                     this.setState({ state: this.state });
        
//     }
//     delete_post(id){
//         axios.delete(`/api/post/${id}`)
//         .then(() => {
//             axios.get('/api/posts')
//             .then((resp) => {
//                     const blogs = resp.data
//                     this.setState({blogs: blogs})
//                 })
//             .catch((err) => {
//                  console.log('err', err)})
//         }).catch((err) => {console.log('err', err)})
//     }

//     submit_post(i, body){
//         // console.log('i & body', i, HTMLBodyElement)
//         axios.put(`/api/posts/${i}`, {...body, post_id: i})
//         .then(() => {
//             console.log('hit put')
//             if(this.props.postBool === false){
//                 this.props.changeBool(true)
//             } else if(this.props.postBool === true) {
//                 this.props.changeBool(false)/* change redux state back to false*/
//             }
//         }).catch((err) => {
//             console.log('err', err)
//         })
//         axios.get('/api/posts')
//         .then((resp) => {
//             const blogs = resp.data
//             this.setState({
//                    blogs: blogs.sort((a, b) => {
//                     return b.post_id - a.post_id
//                 }),
//                    editStatus: false,
//                    newId: ""
//                })
//        })
        
//     }


//     //from blog.js togglestate()

//     toggleState(i){
//         if(this.state.editStatus){
//             this.setState({
//                 editStatus: false,
//                 newId: ""
//             })
//         } else {
//             this.setState({
//                 editStatus: true,
//                 newId: i
//             })
//         }
//     }

//     handleChange(event){
//         this.setState({ [event.target.name]: event.target.value });
//     }

    
//     render() {
//         if(this.props.user){
//             console.log('user is in Session')
//         } else {
//             this.getUserInfo()
//         }
//         const displayBlogs = this.state.blogs.map((elem, i) => {
//             return(  <div key={elem.post_id} className="mainBlogContent">
   
//                          <div className="mainContent">
                             
//                              <p className="title">{elem.title}</p>
//                              <h4 className="postUser"> written by: {elem.post_user}</h4>
//                              <img className="" src={elem.graphic} />
//                                  <div className="blogImageDiv"></div>{elem.main_content}
//                          </div>
//                         {this.state.newBlogStatus && <Delete_button delete_post={this.delete_post} index={elem.post_id}/>}
//                         {this.state.newBlogStatus &&  <Edit_button toggleState={() => this.toggleState(elem.post_id)}/>}
//                          {this.state.editStatus && this.state.newId == elem.post_id && <EditBlog submit_post={this.submit_post} index={elem.post_id} blogs={elem} />}
//                          <hr className="dividerHr"/>
//                      </div>)
 
//          })
         
//          //if statement checking if there is a user in the current session - no need to check status - > only publis acess except for kathi
//         //  if (this.props.user){
//          if (1){
//         return (
//             <div className="body">
//                 <div className="central">
//                     <div className="hero"></div>
//                     {this.props.user && <h3>{this.props.user.username}</h3>}
//                     <button onClick={() => this.showTools()}>{this.state.adminButton}</button>
//                         <div className="newBlogDivAdmin">
//                          {this.state.newBlogStatus && <NewBlog handleChange={this.handleChange} postToDb={this.postToDatabase} name={this.state.name} date={this.state.date} title={this.state.title} mainContent={this.state.mainContent}/>}
//                          {/*postToDb={this.postToDatabase}*/}
                        
//                          </div>
//                     <div className="text-cont-outer">
//                         <div className="text-content">
//                             {/* <div className="displayBlogsParent">{displayBlogs}</div> */}
//                             <div className="displayBlogsParent">
//                             <div className="mainBlogContent">
//                                     <div className="mainContent">
//                                         <p className="title">Grace Under Fire</p>
//                                         <h4 className="postUser"> written by: Kathi Lang</h4>
//                                         <img className="" src="https://res.cloudinary.com/dpnlwo2iw/image/upload/v1542297442/i8kdd1tqikuni0yr0ite.jpg"/>
//                                             <div className="blogImageDiv"></div>
//                                             <p>God will challenge us in situations where we feel wholly unprepared - where all we want to do is crawl into a rabbit hole and hide.  When God challenges us, He also provides everything we need to meet that challenge. If we listen. If we trust in Him. If we recognize we can’t do it alone.  God provides grace under fire.</p>
//                                             <p>Following God can be terrifying. Walking in faith takes you down paths where you can’t see what’s in front of you. Yet we don’t walk this path alone.  God was there when all I wanted to do was find that rabbit hole.  God was there during shootings, natural disasters, and personal tragedies.  Time after time, God provided grace under fire.</p>
//                                             <p>I was in the middle of, or on the peripheral of all these situations in a one-year span.  I saw families who lost several loved ones at once, people hurting beyond imagination get up every day to help others.  I saw men crying through unbelievable devastation and loss but still persevering.  I saw hurting women with incredible strength, working every day to help others in any way they could.  I learned grace from watching and talking to broken and hurting people who didn’t give up.  I saw grace as they gave each other a quick hug, sharing their pain, and then get back to work rebuilding their community. I saw God’s grace under fire in action amid everyday people.</p>
//                                     </div>
//                                     <hr className="dividerHr"/>
//                                     </div>
//                             </div>
//                          </div>
//                     </div>
                   
//                  </div> 
//                 <footer></footer>
//            </div>
       
            

//             );
//             } else {
//                 return (
//                     <div>
//                         <h2>please log in you are not an admin</h2>
//                     </div>
//                 )
//             }
        
//     }
// }

// // const mapdispatchToProps = {
// //     post_body: post_body
// // }
// const mapdispatchToProps = {
//     changeBool: changeBool,
//     log_in: log_in,
// }


// const mapStateToProps = (state) => {
//     return {
//         user: state.user,
//         postBool: state.postBool
//     }
// }

// export default connect(mapStateToProps, mapdispatchToProps)(AdminBlogPost);