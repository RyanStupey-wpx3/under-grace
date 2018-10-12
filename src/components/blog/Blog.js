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
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then((response) => {
            console.log('response.data["drinks"]', response.data["drinks"])
            this.setState({
            randomDrinkDiv: response.data['drinks']
            })
        })
        .catch((err) => {
            console.log('err', err)
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
        const displayRandomDrinks = this.state.randomDrinkDiv.map((elem) => {
            return ( 
             <div className="random-drink-div">
               <div>{elem.strDrink}</div>
               <div className="img_div"> 
               <img src={elem.strDrinkThumb}/> </div>
     
               <ol>
                 <li> {elem.strIngredient1}</li>
                 <li> {elem.strIngredient2}</li>
                 <li> {elem.strIngredient3}</li>
                 <li> {elem.strIngredient4}</li>
                 <li> {elem.strIngredient5}</li>
               </ol>
               <div>{elem.strInstructions}</div>
             </div>
            )
           })
// posttoDB is nolonger a prop of newBlog because I changed it to a conditionally rendered route
        
    //  if (this.props.user){
     if (1 == true){
        return (
            
            <div className="body">
                <div className="central">
                    <Nav/>
                    <div className="hero"></div>
                   {/* { this.props.user.user_status === 'admin' && <Link to="/adminblog/uhoiu34r78ys7dvh4kjth8y"><button>im an admin</button></Link> } */}
                    <Link to="/adminblog/uhoiu34r78ys7dvh4kjth8y"><button>im an admin</button></Link>
                    {this.props.user && <h3>{this.props.user.username}</h3>}
                    {this.state.message && <div>{this.state.message}</div>}
                    <div className="text-cont-outer">
                        <div className="text-content">
                            <div className="displayBlogsParent">{displayBlogs}</div>
                            {/* <div className="asideAD">{displayRandomDrinks}</div> */}
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
                    <Nav/>
                    <div className="hero"></div>
                    {this.state.message && <div>{this.state.message}</div>}
                    <div className="text-cont-outer">
                        <div className="text-content">
                            <div className="displayBlogsParent">{displayBlogs}</div>
                            {/* <div className="asideAD">{displayRandomDrinks}</div> */}
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