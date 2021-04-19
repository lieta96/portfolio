import React from 'react'
import './Navbar.css'
function Navbar(){
    return (
        <div>
            <ul className='navbar-container'>
                <li>Inicio</li>
                <li>Sobre mi</li>
                <li>Proyectos</li>
                <li><a href='https://www.instagram.com/lieta.arte' target='_blank'>Arte</a></li>
            </ul>
        </div>
    )
}

export default Navbar