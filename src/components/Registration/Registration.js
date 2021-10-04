import React from 'react';
import { Container, Form,Button, Image} from 'react-bootstrap';
import login from '../../login.jpg'
import './Registration.css'
const Registration = () => {
    return (
        <div>
            <div className="text-center mt-5">
            <h1>Feel Free to Stay With Us</h1>
            <p>Please Registration</p>
            </div>
            <Container>
            <div className="registration mt-5">
                <div className="row">
                    <div className="col-md-7">
                    <Form>
                        <Form.Group className="mb-3" controlId="">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your First Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Last Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Your Message</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Agree With Term And Condition" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        </Form>
                    </div>
                    <div className="col-md-5">
                     <Image style={{height:"500px",paddingLeft:"80px"}} src={login}></Image>
                    </div>
                </div>
            </div>
            </Container>
        </div>
    );
};

export default Registration;