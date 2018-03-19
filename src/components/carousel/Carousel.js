import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import './carousel.css'

export default class ImageCrsl extends Component {
    render() {
        return (
            <Carousel className="carouselDiv" wrapAround={true} autoplay={true} autoplayInterval={4000} speed={1500}>
            <img src={require('../../images/ihaventforgot/backyard.JPG')}/>
            <img src={require('../../images/ihaventforgot/MPHS.JPG')}/>
            <img src={require('../../images/ihaventforgot/my_aunt_sodie.JPG')}/>
            <img src={require('../../images/ihaventforgot/sky1.JPG')}/>
            <img src={require('../../images/ihaventforgot/sky2.JPG')}/>
            <img src={require('../../images/courage.jpg')}/>
          </Carousel>
        );
    }
}