import React from 'react';
import Tilty from 'react-tilty';
import './Logo.css';
import brain from './brain.png';
const Logo =()=>{
    return (
       <div className='ma4 mt0'>
           <Tilty className="Tilty br2 shadow-2" options={{ max : 25 }} style={{ height: 130, width: 130}} >
        <div className="Tilty-inner pa3"> <img style={{paddingTop: '3px'}} alt='Logo' src={brain}/></div>
        </Tilty>

       </div>
    )
}

export default Logo;