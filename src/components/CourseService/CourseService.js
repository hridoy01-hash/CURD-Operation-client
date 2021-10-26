import React, { useState,useEffect } from 'react';
import { Card, Col,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CourseService.css'

const CourseService = (props) => {
    
    const [courses,setCourses] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/courses')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])

    // Get data by props
    const {CourseName,InstructorName,CoursePrice,img,_id} = props.course;
    
    const handleDelete=id=>{
        console.log(id);
        fetch(`http://localhost:5000/courses/${id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(result =>{
            if(result.deletedCount >0){
                alert('Delete has been successfully');
                const remainingCourse = courses.filter(course => course._id !== id)
                setCourses(remainingCourse);
            }
        })
    }
    return (
        <div>
             <Col>
            <Card>
                <Card.Img style={{height:"250px"}} variant="top" src={img} />
                <Card.Body>
                <Card.Title>{CourseName}</Card.Title>
                <Card.Text>Instructor Name: {InstructorName} </Card.Text>
                <Card.Text>Course Price: {CoursePrice} Taka </Card.Text>
                <Button variant="success">Enroll Now</Button>
                <Button onClick={()=>handleDelete(_id)} className="ms-3" variant="danger">DELETE</Button>
                <Link to={`/courses/update/${_id}`}>
                <Button className="ms-3" variant="primary">Update</Button>
                </Link>
               
                </Card.Body>
            </Card>
          </Col>
        </div>
    );
};

export default CourseService;