import React from 'react';
import './project.css';
import BREW from '../assets/brew2u.png'
import AGILE from '../assets/agileindythumb.png'
import SGGS from '../assets/gardenstore.png'
import POP from '../assets/popnovel.png'
import VIDEO from '../assets/video-player.png'

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
                    <p>February-March 2019</p>
                    <p>Project Description</p>
                </div>
            </div>
            <p className='project-headings'>
                School Projects
            </p>
            <p className='heading-abstract'>
                These projects were what I accomplished throughout my time at Eleven Fifty Academy. The goal 
                of these projects was to learn, while coding. Each project took the span of about 3-5 weeks and 
                have a different set of goals and expectations. I am slowly revisitng these projects and recreating 
                them to be more complete.
            </p>
            <div className='card-container'>
                <img src={BREW} alt='filler' id='cardimage' />
                <div className='project-info'>
                    <p>Brew2U</p>
                    <p>December 2018</p>
                    <p>Project Description</p>
                </div>
            </div>
            <div className='card-container'>
                <img src={SGGS} alt='filler' id='cardimage' />
                <div className='project-info'>
                    <p>Summit Grounds Garden Store</p>
                    <p>November 2018</p>
                    <p>Project Description</p>
                </div>
            </div>
            <div className='card-container'>
                <img src={POP} alt='filler' id='cardimage' />
                <div className='project-info'>
                    <p>PopNovel</p>
                    <p>October-November 2018</p>
                    <p>Project Description</p>
                </div>
            </div>
            <div className='card-container'>
                <img src={VIDEO} alt='filler' id='cardimage' />
                <div className='project-info'>
                    <p>Tutorial Webpage</p>
                    <p>September-October 2018</p>
                    <p>Project Description</p>
                </div>
            </div>


        </div>
    )
}
export default Projects;