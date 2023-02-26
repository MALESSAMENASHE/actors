import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <section>
            <h1>Welcome to The Guessing Game</h1>
            <h3>You have to guess whether the actor in the picture played in the written movie.</h3>
            <br></br>
            <Link to={'/game'}>Continue to game...</Link>
        </section>
    )
}

export default Home;