import React from 'react'
import greenThumb from "../assets/images/greenThumb.jpg" 
import redThumb from "../assets/images//redThumb.jpg" 


const Thumbs = ({ rightGuesses, wrongGuesses }) => {
    return (
        <div className='states'>
            <div ><img src={redThumb} alt="redThumb"></img>{wrongGuesses}</div>
            <div  ><img src={greenThumb} alt="greenThumb"></img>{rightGuesses}</div>
        </div>
        
    )
}

export default Thumbs;