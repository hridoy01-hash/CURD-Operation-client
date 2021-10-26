import { useForm } from "react-hook-form";

import './Registration.css'
const Registration = () => {
    
    const { register, handleSubmit,reset} = useForm();
    const onSubmit = data =>{
        fetch('http://localhost:5000/courses',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
            if(result.insertedId){
                alert('Course Added Successfully');
                reset();
            }
        })
        
    }
    return (
        <div>
           <form className="form-style" onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="courseName" {...register("courseName")} />
            <input placeholder="InstructorName" {...register("InstructorName")} />
            <input placeholder="CourseDescription" {...register("CourseDescription")} />
            <input placeholder="Price" type="number" {...register("CoursePrice")} />
            <input placeholder="img url" {...register("img")} />
            <input type="submit" />
         </form>
      

        </div>
    );
};

export default Registration;