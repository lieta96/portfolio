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
                    <p>Soy Julieta, desarrolladora Frontend en proceso. Me entusiasman tanto la lógica como el diseño, y querer combinar ambos fue lo que me motivó a descubrir el mundo del desarrollo web.</p>
                    <p>Soy estudiante de matemática en la UBA y además me dedico al arte.
                        Creo que el trabajo en equipo siempre es enriquecedor</p>
                </div>
            </div>
            <h3 className='skills-title'> Skills</h3>
            <div className='skills-container'>
                
                {skillsLogos.map((skill)=>{return (
                    <div className={`${skill.className} skill-logo-container`}>
                       <div >{skill.svgLogo}</div> 
                <span>{skill.name}</span>
               
                    </div>
                 )}
                )} 
            </div>
        </div>
    )
}

export default AboutMeSection