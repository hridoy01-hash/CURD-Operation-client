import React from 'react';
import { Card, Col,Button} from 'react-bootstrap';
import './HomePageCourse.css'

const HomePageCourse = (props) => {
    //get data bia props frome home component
    const {CourseName,InstructorName,CoursePrice,img} = props.course
    return (
        <div>
     <Col>
        <Card>
            <Card.Img style={{height:"200px"}} variant="top" src={img} />
            <Card.Body style={{height:"200px"}} >
            <Card.Title>Subject: {CourseName}</Card.Title>
            <Card.Text>Instructor Name: {InstructorName}</Card.Text>
            <Card.Text>Course Price: {CoursePrice} Taka</Card.Text>
            <Button variant="success">Enrol Now</Button>{' '}
            </Card.Body>
        </Card>
    </Col>

        </div>
    );
};

export default HomePageCourse;