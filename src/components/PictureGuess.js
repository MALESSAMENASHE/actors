
import React from 'react'

const PictureGuess = ({ image, name }) => {
    return (
        <div className='PictureGuess'>
            <img src={image} alt={name} />
            <h3>{name}</h3>
        </div>

    )
}

export default PictureGuess;