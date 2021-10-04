import React from 'react';
import { Card, Col,Button} from 'react-bootstrap';
import './HomePageCourse.css'

const HomePageCourse = (props) => {
    //get data bia props frome home component
    const {CourseName,InstructorName,CoursePrice,img} = props.course
    return (
        <div>
     <Col>
        <Card className="service">
            <Card.Img variant="top" src={img} />
            <Card.Body>
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