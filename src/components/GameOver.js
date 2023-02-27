import React, { useEffect, useState } from 'react'

const GameOver = ({ wrongGuesses, setGameOver, setWrongGuesses, setRightGuesses }) => {

    const [message, setMessage] = useState('')

    const displayMessage = () => {
        if (wrongGuesses === 6) {
            setMessage((prevMessage) => prevMessage = `Too many mistake:  ${wrongGuesses}/11`)
        } else {
            setMessage((prevMessage) => prevMessage = `You win with ${11-wrongGuesses} right guesses` )
        }
    }

    useEffect(() => {
        displayMessage()
    },)

    return (
    
        <div className='gameOver'>
            <h1>GameOver</h1>
            <br></br>
            <h3>{message}</h3>
            <br></br>
            <button onClick={() => {
                setGameOver(false)
                setWrongGuesses(0)
                setRightGuesses(0)
            }}> play Again</button>
        </div>
        
    )
}

export default GameOver