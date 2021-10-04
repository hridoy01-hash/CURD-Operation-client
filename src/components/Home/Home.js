import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import HomePageCourse from '../HomePageCourse/HomePageCourse';
import WebsiteBaner from '../WebsiteBaner/WebsiteBaner';

const Home = () => {
    //Load data frome JSON file
    const [courses,setCourses] = useState([])
    useEffect(()=>{
        fetch('./fakeData.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    //Course show Section
    return (
        <div className="mb-5">
          <WebsiteBaner></WebsiteBaner>
          <h1 className="text-center mt-5">Our Running Sevices</h1>
          <Container>
         <Row className="justify-content-md-center mt-5" xs={1} md={3}>
           
         {
         courses.slice(0,3).map(course => <HomePageCourse key={course.Instructorid} course={course}></HomePageCourse>)
         } 
            
         </Row>
         </Container>
        </div>
    );
};

export default Home;