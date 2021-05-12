import React from 'react';
import projects from './projects.js'
import './ProjectsSection.css'

function ProjectsSection (){
    return (
        <div className="projects-section-container">
            <h2>Proyectos</h2>
            <div className='projects-container'>
                {projects.map((proyecto)=>{return (
                    <div className='project-container'>
                        <h3>{proyecto.name}</h3>
                        <img src={proyecto.imageURL} alt={proyecto.name} />
                        <div className="repository-container">
                            <span> {`</>`} </span>
                            <i class="fas fa-eye"></i>
                        </div>
                        
               
                    </div>
                 )}
                )} 
            </div>
        </div>
    )
}

export default ProjectsSection