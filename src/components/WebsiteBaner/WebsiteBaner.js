import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import baner from '../../slider1.jpg'
import offer from '../../super-sale-horizontal-banner_52683-59532.jpg'
import course from '../../banner-academy-course-analytics-addon.jpg'
import intern from '../../internship.jpg'
import './WebsiteBaner.css'

const WebsiteBaner = () => {
  //Slider section for website banar
    return (
        <div className="mt-2">
        <Container>
        {
            
           <Carousel className="baner-slider mt-3" variant="dark">
           <Carousel.Item>
             <img
               className="d-block w-100"
               src={baner}
               alt="First slide"
             />
           </Carousel.Item>
           <Carousel.Item>
             <img
               className="d-block w-100"
               src={course}
               alt="Second slide"
             />
           </Carousel.Item>
           <Carousel.Item>
             <img
               className="d-block w-100"
               src={offer}
               alt="Third slide"
             />
           </Carousel.Item>
           <Carousel.Item>
             <img
               className="d-block w-100"
               src={intern}
               alt="Third slide"
             />
           </Carousel.Item>
         </Carousel>
        }
        </Container>
        </div>
    );
};

export default WebsiteBaner;