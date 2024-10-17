import React, { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Rock() {
    const [userScore, setUserScore] = useState(0);
    const [compScore, setCompScore] = useState(0);
    const [message, setMessage] = useState('Play new Game ');

    const options = ['rock', 'paper', 'scissors'];

    const generateChoice = () => {
        const randomIndex = Math.floor(Math.random() * 3);
        return options[randomIndex];
    };

    const showWinner = (userChoice, compChoice) => {
        if (userChoice === compChoice) {
            setMessage("Match is Draw");
        } else {
            if (
                (userChoice === 'rock' && compChoice === 'scissors') ||
                (userChoice === 'paper' && compChoice === 'rock') ||
                (userChoice === 'scissors' && compChoice === 'paper')
            ) {
                setUserScore(prevScore => prevScore + 1);
                setMessage(`You win! Your ${userChoice} beats ${compChoice}`);
            } else {
                setCompScore(prevScore => prevScore + 1);
                setMessage(`You lost. ${compChoice} beats your ${userChoice}`);
            }
        }
    };

    const playGame = (userChoice) => {
        const compChoice = generateChoice();
        showWinner(userChoice, compChoice);
    };

    const resetGame = () => {
        setUserScore(0);
        setCompScore(0);
        setMessage('Play new Game');
    };
    return (
        <div>
            <div>
                <h1>Rock Paper Scissors</h1>
                <div className="winner">
                    <p className="winner-text hide" style={{ backgroundColor: message.includes('win') ? 'green' : 'red' }}>
                        {message}
                    </p>
                </div>
                <div className="choices">
                    {options.map(option => (
                        <div key={option} className="choice" onClick={() => playGame(option)}>
                            <img src={`https://github.com/shradha-khapra/JavaScriptSeries/blob/main/StonePaperScissors/images/${option}.png?raw=true`} alt={option} />
                        </div>
                    ))}
                </div>
                <div className="score-board">
                    <div className="score">
                        <p id="score-user">{userScore}</p>
                        <p>You</p>
                    </div>
                    <div className="score">
                        <p id="score-comp">{compScore}</p>
                        <p>Comp</p>
                    </div>
                </div>
                <div className="msg-container">
                    <Link className='msg' id="new" onClick={resetGame}>New Game</Link>
                    <Link to="/" className='msg'>Home</Link>
                </div>
            </div>
        </div>
    )
}

export default Rock;
