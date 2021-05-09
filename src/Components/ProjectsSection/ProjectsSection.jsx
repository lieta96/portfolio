import React from 'react';
import projects from './projects.js'

function ProjectsSection (){
    return (
        <div>
            <h2>Proyectos</h2>
            <div className='projects-container'>
                {projects.map((proyecto)=>{return (
                    <div className='project-container'>
                        <h3>{proyecto.name}</h3>
                        <img src={proyecto.imageURL} alt={proyecto.name} />
                        <span>Repo</span>
                        <span>Demo</span>
               
                    </div>
                 )}
                )} 
            </div>
        </div>
    )
}

export default ProjectsSection