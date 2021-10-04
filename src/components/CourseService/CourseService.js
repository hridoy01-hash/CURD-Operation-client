import React from 'react';
import { Card, Col,Button } from 'react-bootstrap';
import './CourseService.css'

const CourseService = (props) => {
    // Get data by props
    const {CourseName,InstructorName,CoursePrice,img} = props.course
    return (
        <div>
             <Col>
            <Card>
                <Card.Img style={{height:"250px"}} variant="top" src={img} />
                <Card.Body>
                <Card.Title>{CourseName}</Card.Title>
                <Card.Text>Instructor Name: {InstructorName} </Card.Text>
                <Card.Text>Course Price: {CoursePrice} Taka </Card.Text>
                <Button variant="success">Enroll Now</Button>{' '}
                </Card.Body>
            </Card>
          </Col>
        </div>
    );
};

export default CourseService;