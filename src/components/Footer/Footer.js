import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    // Footer section start
    return (
        <div className="footer">
            <Container className="mt-3">
            <div className="row">
                <div className="col-md-5">
                   <h4>Be Success Be Enterprenure</h4>
                   <p>Entrepreneurship development is the means of enhancing the knowledge and skill of entrepreneurs through several classroom coaching and program development process helps new firms or ventures get better in achieving their goals, improve business and the nation's economy.</p>
                </div>
                <div className="col-md-2">
                   <h5>Usefull Link</h5> 
                   
                       <li>Your Account</li>
                       <li>Become a affiliate</li>
                       <li>About policy</li>
                       <li>Sponscord</li>
                       <li>Help?</li>
                   
                </div>
                <div className="col-md-2">
                    <h5>Most Sell Course</h5>
                      <li>Event management</li>
                       <li>Software Design</li>
                       <li>Hotel Management</li>
                       <li>Digital marketing</li>
                       <li>Social engineering</li>

                </div>
                <div className="col-md-3">
                  <h5>Address</h5>
                  <p>Phone: +598009</p>
                  <p>Email: admin@entreprenure.com</p>
                  <p>Location: Bannai,Dhaka-1218</p>
                </div>
            </div>
            </Container>
        </div>
    );
};

export default Footer;