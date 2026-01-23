import React, { useState, useEffect } from 'react';

const NumberGuessingGame = () => {
    const [targetNumber, setTargetNumber] = useState(0);
    const [guess, setGuess] = useState('');
    const [message, setMessage] = useState('Guess a number between 1 and 100');
    const [attempts, setAttempts] = useState(0);
    const [isWon, setIsWon] = useState(false);
    const [shake, setShake] = useState(false);

    useEffect(() => {
        resetGame();
    }, []);

    const resetGame = () => {
        setTargetNumber(Math.floor(Math.random() * 100) + 1);
        setGuess('');
        setMessage('Guess a number between 1 and 100');
        setAttempts(0);
        setIsWon(false);
    };

    const handleGuess = (e) => {
        e.preventDefault();
        const numGuess = parseInt(guess);

        if (isNaN(numGuess) || numGuess < 1 || numGuess > 100) {
            setMessage('Please enter a number between 1 and 100!');
            triggerShake();
            return;
        }

        const newAttempts = attempts + 1;
        setAttempts(newAttempts);

        if (numGuess < targetNumber) {
            setMessage('Too low! Try higher. 📉');
            triggerShake();
        } else if (numGuess > targetNumber) {
            setMessage('Too high! Try lower. 📈');
            triggerShake();
        } else {
            setMessage(`🎉 Correct! The number was ${targetNumber}. You won in ${newAttempts} attempts!`);
            setIsWon(true);
        }
        setGuess('');
    };

    const triggerShake = () => {
        setShake(true);
        setTimeout(() => setShake(false), 500);
    };

    const containerStyles = {
        background: 'rgba(30, 41, 59, 0.7)',
        backdropFilter: 'blur(12px)',
        borderRadius: '20px',
        padding: '2rem',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        textAlign: 'center',
        maxWidth: '400px',
        margin: '2rem auto',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)',
        animation: shake ? 'shake 0.5s ease' : 'none',
        position: 'relative',
        transition: 'all 0.3s ease'
    };

    const inputStyles = {
        width: '100%',
        padding: '1rem',
        background: 'rgba(15, 23, 42, 0.8)',
        border: '1px solid rgba(236, 72, 153, 0.3)',
        borderRadius: '12px',
        color: '#fff',
        fontSize: '1.25rem',
        textAlign: 'center',
        marginBottom: '1rem',
        outline: 'none',
        transition: 'border-color 0.3s'
    };

    const buttonStyles = {
        padding: '0.8rem 2rem',
        background: isWon ? 'linear-gradient(135deg, #10b981, #059669)' : 'var(--accent-gradient)',
        color: '#fff',
        borderRadius: '50px',
        fontWeight: '700',
        width: '100%',
        boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
        transition: 'transform 0.2s',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem'
    };

    return (
        <div style={containerStyles} className="game-container">
            <h3 style={{ marginBottom: '1rem', color: isWon ? '#10b981' : 'var(--text-primary)' }}>
                {isWon ? 'Mission Accomplished!' : 'Number Guessing Game'}
            </h3>

            <p style={{
                marginBottom: '1.5rem',
                color: isWon ? '#fff' : 'var(--text-secondary)',
                fontSize: '1rem',
                minHeight: '2.5rem'
            }}>
                {message}
            </p>

            {!isWon ? (
                <form onSubmit={handleGuess}>
                    <input
                        type="number"
                        value={guess}
                        onChange={(e) => setGuess(e.target.value)}
                        placeholder="??"
                        style={inputStyles}
                        autoFocus
                    />
                    <button
                        type="submit"
                        style={buttonStyles}
                        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        Submit Guess
                    </button>
                </form>
            ) : (
                <button
                    onClick={resetGame}
                    style={buttonStyles}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                >
                    Play Again
                </button>
            )}

            <div style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                Attempts: <span style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}>{attempts}</span>
            </div>
        </div>
    );
};

export default NumberGuessingGame;
