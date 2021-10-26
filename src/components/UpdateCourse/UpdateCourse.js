import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateCourse = () => {
    const [course,setCourse] = useState({});
    const {id} = useParams();
    
    //load single data
    useEffect(()=>{
      const  url = `http://localhost:5000/courses/${id}`;
      fetch(url)
      .then(res =>res.json())
      .then(course =>setCourse(course))  
    
    },[])
    const handleNameChnge=e=>{

        const updatedCourseName = e.target.value;
        const updateCourse =  {CourseName:updatedCourseName,InstructorName:course.InstructorName,CoursePrice:course.CoursePrice}
        setCourse(updateCourse);
        
    };
    const handleInstructorChnge=e=>{

        const updatedInstructorName = e.target.value;
        const updateCourse =  {CourseName:course.CourseName,InstructorName:updatedInstructorName,CoursePrice:course.CoursePrice}
        setCourse(updateCourse);
        
    };
    const handlePriceChnge=e=>{

        const updatedPrice = e.target.value;
        const updateCourse =  {CourseName:course.CourseName,InstructorName:course.InstructorName,CoursePrice:updatedPrice}
        setCourse(updateCourse);
        
    };
    const handleUpdateData=e=>{
        const  url = `http://localhost:5000/courses/${id}`;
       fetch(url,{
           method:'PUT',
           headers:{
               'content-type':'application/json'
           },
           body:JSON.stringify(course)
       })
       .then(res => res.json())
       .then(data =>{
           if (data.modifiedCount > 0) {
               alert('updated has been succesfully');
               setCourse({});
           }
       })
       
       
       
        e.preventDefault();
    }



    return (
        <div className="App">
            <h2>Update Course</h2>
            <h4>Course Name : {course.CourseName}</h4>
            <form onSubmit={handleUpdateData} >
                <input type="text" onChange={handleNameChnge}  value={course.CourseName || '' } />
                <input type="text" onChange={handleInstructorChnge}  value={course.InstructorName || ''}/>
                <input type="number" onChange={handlePriceChnge} value={course.CoursePrice || ''} />
                <input type="submit" value="Update" />
            </form>
            

        </div>
    );
};

export default UpdateCourse;