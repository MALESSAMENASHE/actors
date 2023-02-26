import React from 'react'
// import No from "../assets/images/no.png" 
// import Yes from "../assets/images/yes.png" 


const Buttons = ({ guessHandle, name }) => {
    return (
        <>
            <div className='Buttons'>
                <button onClick={() => { guessHandle(false) }}>No</button>
                <h3>{name}</h3>
                <button onClick={() => { guessHandle(true) }}>yes</button>
            </div>
        </>
    )
}

export default Buttons