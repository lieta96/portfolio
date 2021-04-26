import React from 'react';
import personalPhoto from '../../personal-photo.jpg'
import './AboutMeSection.css';
import skillsLogos from './skills.js';

function AboutMeSection (){
    return (
        <div className='about-me-section-container'>
            <div className='about-me-container'>
                
                <div className='personal-photo-container'>
                    <img src={personalPhoto} alt="personal photo" className='personal-photo'/>
                </div>
                
                <div className='about-me-text'>
                    <h2>Hola mundo!</h2>
                    <p>Soy Julieta, desarrolladora Frontend en proceso. Me entusiasman tanto la lkógicacomoel diseño, y querer combinarlos fue lo que me motivó a descubirir el desarrollo web.</p>
                    <p>Soy estudiante de matemática en la UBA y además me dedico al arte.
                        Creo que el trabajo en equipo siempre es enriquecedor</p>
                </div>
            </div>
            <h3 className='skills-title'> Skills</h3>
            <div className='skills-container'>
                
                {skillsLogos.map((skill)=>{return (<div className='skill-logo-container'>{skill.svgLogo}</div>)} )}
            </div>
        </div>
    )
}

export default AboutMeSection