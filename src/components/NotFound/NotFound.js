import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    //this is not found componet
    return (
        <div className="text-center text-danger mt-5">
            <h1>404</h1>
            <h3>This Page is Not Available</h3>
            <Link to="/home"><Button variant="success">Back Home</Button>{' '}
 </Link>
        </div>
    );
};

export default NotFound;