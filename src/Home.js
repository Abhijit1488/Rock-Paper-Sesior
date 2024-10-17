import React from 'react'
import './HomePage.css';
import { Link } from 'react-router-dom';
function Home() {
    return (
        <div className="home-container">
            <h1 className="game-title">🌟 Adventure Awaits! 🌟</h1>
            <p className="game-description">
                Join us on a magical journey filled with fun and excitement!
            </p>
            <Link className="play-button" to= "Home">🎮 Play Now! 🎮</Link>
            <div className="character-container">
                <img src="https://yt3.ggpht.com/a-/AN66SAzbcpvhMl2f4zsqkRcqLME7AyFktIbNycVsGg%3ds900-mo-c-c0xffffffff-rj-k-no" alt="Game Character" className="game-character" />
            </div>
        </div>
    )
}

export default Home
