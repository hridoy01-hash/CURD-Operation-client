import React from 'react';
import { Container,Button, Carousel, Image } from 'react-bootstrap';
import office from '../../office.jpg'
import student1 from '../../student1.jpg'
import student2 from '../../student2.jpg'
import student3 from '../../student3.jpg'
import './AboutUs.css'

const AboutUs = () => {
    return (
        //About us Section
        <div>
            <Container className="mt-5">
            <div className="row">
                <div className="col-md-7 mt-5">
                     <h3>What We are?</h3>
                     <p>Entrepreneurship development is the means of enhancing the knowledge and skill of entrepreneurs through several classroom coaching and programs, and training. The main point of the development process is to strengthen and increase the number of entrepreneurs. 

                    This entrepreneur development process helps new firms or ventures get better in achieving their goals, improve business and the nation’s economy. Another essential factor of this process is to improve the capacity to manage, develop, and build a business enterprise keeping in mind the risks related to it.

                    In simple words, the entrepreneurship development process is about supporting entrepreneurs to advance their skills with the help of training and coaching classes. It encourages them to make better judgments and take a sensible decision for all business activities.</p>
                    <Button variant="outline-secondary">See More About</Button>{' '}

                </div>
                <div className="col-md-5 mt-3">

                 <img style={{width:"550px"}} src={office} alt="" />

                </div>
            </div>
            {/* Student Review Section */}

            <div className="text-center mt-5">
                <h3>Our Students Says About Us</h3>
                <Carousel style={{border:"2px solid green",margin:"5px",padding:"10px"}} className="mt-5">
  <Carousel.Item>
      <Image style={{height:"250px",width:"250px"}} src={student1} alt="" roundedCircle  />
      <h3>Jarin Tasnim Binte</h3>
      <p>" Very interesting course, better done when in an academic context and with an ongoing project to carry out the exercices for. If you don't have access to a university library, you will be very limited, but the course presents some alternatives for us professionals who are still interested in researching and documenting "</p>
  </Carousel.Item>
  <Carousel.Item>
      <Image  style={{height:"250px",width:"250px"}}src={student2} alt="" roundedCircle />
      <h3>Nabil Muhit</h3>
      <p>" The course was very comprehensive and easy to understand. The instructors made sure that they are giving the information in a way that won't make me confused. Thank you so much for this great course! "</p>

  </Carousel.Item>
  <Carousel.Item>
      <Image style={{height:"250px",width:"250px"}} src={student3} alt=""roundedCircle  />
      <h3>Rokibul Hasan</h3>
      <p>" This course will introduce you to the basic elements of academic information seeking - we will explore the search process from defining a strategy to evaluating and documenting your
      search results. Attending the course will make you a proficient information seeker."</p>
  </Carousel.Item>
</Carousel>
                
           </div>
            </Container>
        </div>
    );
};

export default AboutUs;