import React,{useState} from 'react'
import './Navbar.css'

function Navbar(){
    const [navbar,setNavbar]=useState(false);
    let prevScrollpos = window.pageYOffset;

    const showNavbar =()=>{
        let currentScrollPos = window.pageYOffset;
        
        if (prevScrollpos > currentScrollPos) {
            setNavbar(true)
         
        } else {
          setNavbar(false)
        }
        prevScrollpos = currentScrollPos;
      }
    window.addEventListener('scroll',showNavbar)
    return (
        <div className={navbar? 'active navbar': 'navbar'}>
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