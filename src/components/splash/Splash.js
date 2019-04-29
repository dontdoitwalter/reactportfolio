import React from 'react';
import './splash.css';
import {Container, Col} from 'reactstrap';
import mypic from '../assets/mypic.jpeg';

const Splash = () =>{
    return(
        <Container id='splash-div'>
                <Col className='jumbotron'>
                    <p className='heading'>
                        Hello! My name is Walter and I am a Front End Developer based out of Indianapolis, IN. 
                    </p>
                    <img src={mypic} alt='My Pic' id='mypic' />
                    <p className='aboutmetitle'>
                        A little about me:
                    </p>
                    <p className='aboutme'>
                        I am currently working as a Applications Analyst at Community Health Network, and will be certified in 
                        Epic Ambulatory, Epic MyChart and EpicCare Link as well as working with MyChart's patient appearance 
                        through Community. You can check out my 
                        <a href='https://www.linkedin.com/in/walter-van-hooser-81a2a116a/' target='new'> LinkedIn</a> if you 
                        are curious about the rest of my work history.
                    </p>
                    <p className='aboutme'>
                        When I am not working I love spending time with my wonderful girlfriend, our dog and our cat. I am an avid gamer, 
                        I love food and I am always looking to learn more about my trade, either by study or practice.
                    </p>
                    <p className='aboutme'> 
                        I was born and raised just north of Portland, OR in Washington State, in the city of Vancouver.
                        Most of my childhood was spent outside, playing sports, camping, hiking, snowboarding, going to the
                        the beach and spending time with friends and family. Growing up I was (and still am) the "IT Guy" 
                        for my family and have always been more captivated by how and why things work, than the output. 
                        So it was an easy transition into becoming an IT professional.
                    </p>
                    <p className='aboutme'>
                        Currently am I only looking for freelance work some projects that I am able to work on outside of work hours. However, 
                        I would love to connect with you, and talk about your next project!
                    </p>
                </Col>
        </Container>
    )
}
export default Splash;