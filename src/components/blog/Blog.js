import React, { Component } from 'react';
import '../main.css'
import './blog.css'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {log_in} from '../../redux/reducer'
import axios from 'axios'
// import ImageCrsl from '../carousel/Carousel'


class Blog extends Component {
    constructor(props){
        super(props)

        this.state = {
            blogs: [],
            newBlogStatus: false,
            message: null,
            // editStatus: false,
            // newId: '',
            randomDrinkDiv:[]
        }

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
   //toggleState was here

   // submitPost was here
    render() {


        const displayBlogs = this.state.blogs.map((elem, i) => {
           return(  <div key={elem.post_id} className="mainBlogContent">
                        <div className="mainContent">
                            <h2 className="title">{elem.title}</h2>
                            <img className="" src={elem.graphic} />
                             <div className="blogImageDiv"></div>{elem.main_content}
                        </div>
                        {/* {this.state.editStatus && this.state.newId == elem.post_id && <EditBlog submit_post={this.submit_post} index={elem.post_id} blogs={elem}/>} */}
                    </div>)
        })
// posttoDB is nolonger a prop of newBlog because I changed it to a conditionally rendered route
        
    //  if (this.props.user){
     if (1 == true){
        return (
            
            <div className="body">
                <div className="central">
                    <div className="hero"></div>
                    {this.props.user && <h3> admin: {this.props.user.username}</h3>}
                    {this.state.message && <div>{this.state.message}</div>}
                    <div className="text-cont-outer">
                        <div className="text-content">
                            {/* <div className="displayBlogsParent">{displayBlogs}</div> */}
                            <div className="displayBlogsParent">
                            <div className="mainBlogContent">
                                    <div className="mainContent">
                                        <p className="title">Grace Under Fire</p>
                                        <h4 className="postUser"> written by: Kathi Lang</h4>
                                        <img className="" src="https://res.cloudinary.com/dpnlwo2iw/image/upload/v1542297442/i8kdd1tqikuni0yr0ite.jpg"/>
                                            <div className="blogImageDiv"></div>
                                            <p>God will challenge us in situations where we feel wholly unprepared - where all we want to do is crawl into a rabbit hole and hide.  When God challenges us, He also provides everything we need to meet that challenge. If we listen. If we trust in Him. If we recognize we can’t do it alone.  God provides grace under fire.</p>
                                            <p>Following God can be terrifying. Walking in faith takes you down paths where you can’t see what’s in front of you. Yet we don’t walk this path alone.  God was there when all I wanted to do was find that rabbit hole.  God was there during shootings, natural disasters, and personal tragedies.  Time after time, God provided grace under fire.</p>
                                            <p>I was in the middle of, or on the peripheral of all these situations in a one-year span.  I saw families who lost several loved ones at once, people hurting beyond imagination get up every day to help others.  I saw men crying through unbelievable devastation and loss but still persevering.  I saw hurting women with incredible strength, working every day to help others in any way they could.  I learned grace from watching and talking to broken and hurting people who didn’t give up.  I saw grace as they gave each other a quick hug, sharing their pain, and then get back to work rebuilding their community. I saw God’s grace under fire in action amid everyday people.</p>
                                    </div>
                                    <hr className="dividerHr"/>
                                    </div>
                            </div>
                         </div>
                         
                    </div>
                 </div>
                <footer></footer>
           </div>
        );

    } else {
        return(
            <div className="body">
                <div className="central">
                    <div className="hero"></div>
                    {this.state.message && <div>{this.state.message}</div>}
                    <div className="text-cont-outer">
                        <div className="text-content">
                            {/* <div className="displayBlogsParent">{displayBlogs}</div> */}
                            <div className="displayBlogsParent">
                            
                            </div>
                         </div>
                         
                    </div>
                 </div>
                <footer></footer>
           </div>
        )
    }
    
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