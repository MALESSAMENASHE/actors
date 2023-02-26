import React, { useEffect, useState } from 'react'

const GameOver = ({ wrongGuesses, setGameOver, setWrongGuesses, setRightGuesses }) => {

    const [message, setMessage] = useState('')

    const displayMessage = () => {
        if (wrongGuesses === 6) {
            setMessage((prevMessage) => prevMessage = `Too many mistake:  ${wrongGuesses}/11`)
        } else {
            setMessage((prevMessage) => prevMessage = `You win with only: ${wrongGuesses} mistake`)
        }
    }

    useEffect(() => {
        displayMessage()
    },)

    return (
        <>
            <h1>GameOver</h1>
            <h3>{message}</h3>
            <button onClick={() => {
                setGameOver(false)
                setWrongGuesses(0)
                setRightGuesses(0)
            }}>Replay</button>
        </>
    )
}

export default GameOver