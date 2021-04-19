import React from 'react';
import Avatar from './avatar.png';
import './ArtDevSection.css'

function ArtDevSection (){
    return (
        <div className='art-dev-container'>
            <img src={Avatar} alt="avatar" className='art-dev-avatar'/>
            <div className='buttons-container'>
                <button className='button'><a href='https://www.instagram.com/lieta.arte' target='_blank'>Art</a></button>
                <button className='button'>Dev</button>
            </div>
            
        </div>
    )
}
export default ArtDevSection