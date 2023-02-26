import React, { useEffect, useState } from 'react'

import Thumbs from '../components/Thumbs'
import data from '../data'
import Buttons from '../components/Buttons'
import PictureGuess from '../components/PictureGuess'
import GameOver from '../components/GameOver'

const Game = () => {
    const gameData = [...data]

    const [game, setGame] = useState(gameData)
    const [gameOver, setGameOver] = useState(false)
    const [currentGuess, setCurrentGuess] = useState({})
    const [wrongGuesses, setWrongGuesses] = useState(0)
    const [rightGuesses, setRightGuesses] = useState(0)

    
    const pickRandomImage = () => {
        const image = game.splice(Math.floor(Math.random() * game.length), 1)
        setCurrentGuess((prevImage) => prevImage = image[0])
    }


    const resetGame = () => {
        setGame(gameData)
        pickRandomImage()

    }

    useEffect(() => {
        resetGame()
        
    }, [])
    useEffect(() => {
        setGame(gameData)
    }, [gameOver])

    const guessHandle = (boolean) => {
        if (boolean === false && currentGuess.answer === boolean) {
            setRightGuesses((prevGuess) => prevGuess = prevGuess + 1)
        } else if (boolean === false && currentGuess.answer !== boolean) {
            setWrongGuesses((prevGuess) => prevGuess = prevGuess + 1)
        } else if (boolean === true && currentGuess.answer === boolean) {
            setRightGuesses((prevGuess) => prevGuess = prevGuess + 1)
        } else {
            setWrongGuesses((prevGuess) => prevGuess = prevGuess + 1)
        }
        if (game.length > 0) {
            pickRandomImage()
        } else {
            setGameOver(true)
        }
    }

    return (
        <section>
            <div className='Thumbs'>
                {!gameOver ? <Thumbs wrongGuesses={wrongGuesses} rightGuesses={rightGuesses} /> : null}
            </div>
            <div className='PictureGuess'>
                {!gameOver ? <PictureGuess image={currentGuess.image} /> : <GameOver wrongGuesses={wrongGuesses} setGameOver={setGameOver} setWrongGuesses={setWrongGuesses} setRightGuesses={setRightGuesses} />}
            </div>
            <div className='Buttons'>
                {!gameOver ? <Buttons guessHandle={guessHandle} name={currentGuess.name} /> : null}
            </div>
        </section>
    )
}

export default Game