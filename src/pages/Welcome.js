import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <section>
            <div className='welcome'>
            <h1>Welcome to The Guessing Game</h1>
            <br></br>
            <h3>You have to guess whether the actor in the picture played in the written movie.
            <br></br>
            You need 6 correct answers to win.
            </h3>
            <br></br>
            <Link to={'/game'}>Click to Play...</Link>
            </div>
        </section>
    )
}

export default Home;