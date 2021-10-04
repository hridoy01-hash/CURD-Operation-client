import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import CourseService from '../CourseService/CourseService';
import './Services.css'

const Services = () => {
    //Load data frme JSON File
    const [courses,setCourses] = useState([])
    useEffect(()=>{
        fetch('./fakeData.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div>
            <h1 className="text-center mt-5">Our Latest Sevices Course</h1>
          <Container>
          <Row xs={1} md={3} className="g-4 mt-5">
  
           {
               courses.map(course =><CourseService key={course.Instructorid} course ={course}></CourseService>)
           }
  
         </Row>
            
         
         </Container>
        </div>
    );
};

export default Services;