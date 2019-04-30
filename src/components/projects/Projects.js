import React from 'react';
import './project.css';
import BREW from '../assets/brew2u.png'
import AGILE from '../assets/agileindythumb.png'
import SGGS from '../assets/gardenstore.png'
import POP from '../assets/popnovel.png'
import VIDEO from '../assets/video-player.png'
import DIABLO from '../assets/diablo-logo.jpg'

const Projects = () =>{
    return(
        <div>
            <p className='project-headings'>
                Real World Projects
            </p>
            <p className='heading-abstract'>
                These are projects from real world clients, and are designed and developed to client 
                standards and expectations. 
            </p>
            <div className='card-container'>
                <img src={AGILE} alt='filler' id='cardimage' />
                <div className='project-info'>
                    <p>AgileIndy Conference</p>
                    <p>Designed for Mobile</p>
                    <p>
                        I designed and developed this application for AgileIndy's 2019 conference. It is a mobile version of 
                        the conference speaker information, schedule and also contained maps of the conference. 
                        You can check out it out <a href='https://agileindy-conf.herokuapp.com/' target='new'> here</a>.

                    </p>
                </div>
            </div>
            <p className='project-headings'>
                School Projects
            </p>
            <p className='heading-abstract'>
                These projects were what I accomplished throughout my time at Eleven Fifty Academy. The goal 
                of these projects was to learn, while coding. Each project took the span of about 3-5 weeks and 
                have a different set of goals and expectations. I am slowly revisitng these projects and recreating 
                them to be more complete. All of these projects are considered to be MVP (minimum viable product) projects.
            </p>
            <div className='card-container'>
                <img src={BREW} alt='filler' id='cardimage' />
                <div className='project-info'>
                    <p>Brew2U</p>
                    <p>Designed for Mobile</p>
                    <p>
                        Brew2U is a mobile coffee delivery service not unlike GrubHub or UberEats, the difference is that 
                        Brew2U is exclusively for coffee. The goal and purpose of the application is to provide coffee delivery 
                        from places you wouldn't normally have it, like the little coffee shop that you love that is just out of 
                        the way on your drive to work. We used AngularJS for the front end and NodeJS for the back end. My role 
                        in this group project was focused mainly on the back end, I also handled most of the debugging and 
                        handled most of the Team Git responsibilities. You can check out the web page
                        <a href='https://brew2uclient.herokuapp.com/home' target='new'> here</a>.
                    </p>
                </div>
            </div>
            <div className='card-container'>
                <img src={SGGS} alt='filler' id='cardimage' />
                <div className='project-info'>
                    <p>Summit Grounds Garden Store</p>
                    <p>Designed for Desktop</p>
                    <p>
                        Summit Grounds Garden Store was our first experience working as a group. We were given the back end for 
                        a business and tasked with creating a front end and an admin portal in 24 hours, and then presenting it 
                        to the client. The front end we created was developed in AngularJS after being given a very introductory 
                        rundown of the framework. You can check out the web 
                        page <a href='https://summitggs.herokuapp.com/home' target='new'> here</a>.
                    </p>
                </div>
            </div>
            <div className='card-container'>
                <img src={POP} alt='filler' id='cardimage' />
                <div className='project-info'>
                    <p>PopNovel</p>
                    <p>Designed for Desktop</p>
                    <p>
                        PopNovel is a story telling application that allows users to write a story together. Users have a 
                        shared prompt each month and take turns contributing to the story based on what has been written so far. 
                        The app was created with a ReactJS front end along with a NodeJS back end. It has unique logins, 
                        and individual user accounts. It also has protected and unprotected views. You can check out the web page
                        <a href='https://popnovelclient.herokuapp.com/' target='new'> here</a>.
                    </p>
                </div>
            </div>
            <div className='card-container'>
                <img src={DIABLO} alt='filler' id='cardimage' />
                <div className='project-info'>
                    <p>API Project</p>
                    <p>Designed for Desktop</p>
                    <p>
                        This project was our first experience pulling in data from an API to my own front end. I chose to use 
                        Blizzard's API and pulling in data from a popular game Diablo 3. The app shows a synopsis of each Act 
                        that you can read while watching the Cinematic for each act. You can check out the web page
                        <a href='https://dontdoitwalter.github.io/blizz-api/' target='new'> here</a>.
                    </p>
                </div>
            </div>
            <div className='card-container'>
                <img src={VIDEO} alt='filler' id='cardimage' />
                <div className='project-info'>
                    <p>Tutorial Webpage</p>
                    <p>Designed for Desktop</p>
                    <p>
                        This was the first project we did in school, after our CodePen project. We were to 
                        create a basic web page that was a tutorial about a few JavaScript concepts. The main 
                        goal was to have links to certain parts of the page, as well as a navigation bar.  Along 
                        with the content of the web page. You can check out the web page
                        <a href='https://dontdoitwalter.github.io/tutorial-webpage/' target='new'> here</a>.
                    </p>
                </div>
            </div>


        </div>
    )
}
export default Projects;