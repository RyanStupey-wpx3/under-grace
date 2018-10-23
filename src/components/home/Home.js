import React, { Component } from 'react';
import './home.css'
import '../main.css'
import axios from 'axios'
import InputInfo from '../contact/InputInfo'
import {Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {log_in} from '../../redux/reducer';
import ImageCrsl from '../carousel/Carousel';
import Nav from '../navBar/Nav';
class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // weatherApiCall: {},
            apikey:'053500b0444e5159d69ef33fa1ed972a',
        }

    }
    // componentWillMount(){
    //     axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Phoenix&APPID=053500b0444e5159d69ef33fa1ed972a`)
    //     .then((resp) => {
    //         this.setState({
    //             weatherApiCall: resp.data,
    //         })
    //     }).catch((err) =>{
    //         console.log('err', err)
    //     })

    // }


    componentDidMount(){
        axios.get('/api/user-data')
        .then((resp) => {
            this.props.log_in(resp.data.user)
            console.log('this.props.user', this.props.user)
        })
        
    }
   

    render() {
        // console.log('this.state.weatherApiCall', this.state.weatherApiCall)
        // const {weatherApiCall} = this.state;

        // const displayWeather = this.state.weatherApiCall
            
                
          
      
        return (
            
           <div className="body">
                <div className="central">
                <div className="hero"></div>
               <div></div>
                <div className="text-cont-outer">
                    <div className="text-content">
                    
                        <h1>Welcome!</h1>
                        <p>Hello! Thank you for taking time to  look at my website – it's for women  seeking joy and strength in day to day life.  My life, like yours, 
                        has been full of ups and downs.  I have at times, chosen not to follow God. Yet He still loved me, and saved me.  
                        My blessings include a loving family, good friends, and a church home that fits.  I don’t have all the answers, but I’m willing to share my experiences,
                         my mistakes, and my successes to let you know through Christ, we can all have grace - under fire and after fire. </p>

                         <hr/>
                        
                        <h2>A little about me</h2>
                        <p>Most importantly, I believe in God the Father and I believe in Jesus Christ. I am also a wife, a mother, and a grandmother.  
                            I had a 35 year career in law enforcement  where I've encountered people during the worst of circumstances: A school shooting with six teenagers shot, with five of them killed, 
                            A mud slide destroying a community with 43 lives lost, An 18 month old little girl who drowned in the river, Children assaulted by their own parents, But through God's Grace I was able to witness incredible strength and faith in the people who became part of my life.</p>

                            <h5>Please join me, share your story with me, let me know your thoughts.</h5>
                         <hr/>
                        <h2>Jeremiah 29:11</h2>
                        <p>“For I know I have plans for you” declared the Lord, “plans to prosper you and not to harm you, plans to give you hope and a future.</p>
                        
                    </div>
                </div>
                    <div className="socialmedia">
                        <div>
                            {/* <div>Temp:{weatherApiCall.main.temp}</div>
                            <div>Humidity:{weatherApiCall.main.humidity}</div>
                            <div>Forecast:{weatherApiCall.weather[0].main}</div>
                            <div>Descriptio{weatherApiCall.weather[0].description}</div> */}
                        </div>
                        
                    </div>
                    <div className="galleryLink">
                        <div className="pod i-1"><img src={require('../../images/fire-heart.jpg')}/><p className="bottomPodWords love">Love</p></div>
                        <div className="pod i-2"><img src={require('../../images/ihaventforgot/image10.png')}/><p className="bottomPodWords grace">Grace</p> </div>
                        <div className="pod i-3"><img src={require('../../images/liveBurn.jpg')}/><p className="bottomPodWords passion">Passion</p></div>
                    </div>
                     </div>
                <footer>
                    
                </footer>
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

export default connect(mapStateToProps, mapdispatchToProps)(Home);