import React, { Component } from 'react';
import Carousel from 'nuka-carousel';

export default class ImageCrsl extends Component {
    render() {
        return (
            <Carousel wrapAround={true} autoplay={true} autoplayInterval={4000} speed={1500}>
            <img src={require('../images/Dark-Clouds.jpg')}/>
            <img src={require('../images/download.jpeg')}/>
            <img src={require('../images/liveBurn.jpg')}/>
            <img src={require('../images/fire-heart.jpg')}/>
          </Carousel>
        );
    }
}