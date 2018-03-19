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
            weatherApiCall: null,
            apikey:'053500b0444e5159d69ef33fa1ed972a',
        }

    }
    componentWillMount(){
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Phoenix&APPID=053500b0444e5159d69ef33fa1ed972a`)
        .then((resp) => {
            this.setState({
                weatherApiCall: resp.data,
            })
        }).catch((err) =>{
            console.log('err', err)
        })

    }


    componentDidMount(){
        axios.get('/api/user-data')
        .then((resp) => {
            this.props.log_in(resp.data.user)
            console.log('this.props.user', this.props.user)
        })
        
    }
   

    render() {
        console.log('this.state.weatherApiCall', this.state.weatherApiCall)

        // const displayWeather = this.state.weatherApiCall.map((elem) => {
        //     return (<div>
        //         <div>Temp:{elem.main.temp}</div>
        //         <div>Humidity:{elem.main.humidity}</div>
        //         <div>Forecast:{elem.weather[0].main}</div>
        //         <div>Descriptio{elem.weather[0].description}</div>
        //     </div>)
        // })
        return (
            
           <div className="body">
                <div className="central">
                <Nav/>
                <div className="hero"><ImageCrsl/></div>
               <div></div>
                <div className="text-cont-outer">
                    <div className="text-content">
                        <h2>"oh how I wish this world was already aflame"</h2> 
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. 
                        Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. 
                        Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. 
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>

                        <p>Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. 
                        Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. 
                        Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non,
                        massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel,
                         tincidunt sed, euismod in, nibh.</p>

                        <p>Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                        per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, 
                        a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus 
                        consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. 
                        Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam.
                         Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor.
                          Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel,
                           egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper. 
                        Nulla facilisi. Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a tortor. Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, 
                        dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante. Nulla quam. Aenean laoreet. Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies eu, 
                        pede. Ut orci risus, accumsan porttitor, cursus quis, aliquet eget, justo. </p>
                        
                    </div>
                </div>
                    <div className="socialmedia">
                        {/* <div>{displayWeather}</div> */}
                        
                    </div>
                    <div className="galleryLink">
                       <Link to='/blog'> <div className="pod i-1"><img src={require('../../images/fire-heart.jpg')}/></div></Link>
                        <div className="pod i-2"><img src={require('../../images/person.jpg')}/></div>
                        <div className="pod i-3"><img src={require('../../images/liveBurn.jpg')}/></div>
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