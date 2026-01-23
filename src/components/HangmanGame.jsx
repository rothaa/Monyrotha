import React, { useState, useEffect } from 'react';

const WORDS = ["PYTHON", "REACT", "DEBUG", "CODING", "GITHUB", "PORTFOLIO", "PROGRAM", "ENGINEER"];

const HangmanGame = () => {
    const [word, setWord] = useState('');
    const [guessed, setGuessed] = useState([]);
    const [lives, setLives] = useState(6);
    const [status, setStatus] = useState('playing'); // playing, won, lost

    const initGame = () => {
        const randomWord = WORDS[Math.floor(Math.random() * WORDS.length)];
        setWord(randomWord);
        setGuessed([]);
        setLives(6);
        setStatus('playing');
    };

    useEffect(() => {
        initGame();
    }, []);

    const handleGuess = (letter) => {
        if (status !== 'playing' || guessed.includes(letter)) return;

        const newGuessed = [...guessed, letter];
        setGuessed(newGuessed);

        if (!word.includes(letter)) {
            const newLives = lives - 1;
            setLives(newLives);
            if (newLives === 0) setStatus('lost');
        } else {
            const isWon = word.split('').every(char => newGuessed.includes(char));
            if (isWon) setStatus('won');
        }
    };

    const containerStyles = {
        background: 'rgba(15, 23, 42, 0.9)',
        backdropFilter: 'blur(12px)',
        borderRadius: '24px',
        padding: '2rem',
        border: '1px solid rgba(236, 72, 153, 0.2)',
        textAlign: 'center',
        maxWidth: '600px',
        margin: '2rem auto',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)',
        color: '#fff'
    };

    const letterBoxStyles = {
        display: 'flex',
        justifyContent: 'center',
        gap: '0.75rem',
        margin: '2rem 0',
        flexWrap: 'wrap'
    };

    const letterStyles = {
        fontSize: '1.5rem',
        fontWeight: '700',
        paddingBottom: '0.5rem',
        borderBottom: '3px solid var(--accent-primary)',
        width: '30px',
        textAlign: 'center',
        minHeight: '40px'
    };

    const keyboardStyles = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(40px, 1fr))',
        gap: '8px',
        marginTop: '2rem'
    };

    const keyBtnStyles = (letter) => ({
        padding: '0.8rem 0.5rem',
        background: guessed.includes(letter)
            ? (word.includes(letter) ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.1)')
            : 'rgba(255, 255, 255, 0.05)',
        border: `1px solid ${guessed.includes(letter)
            ? (word.includes(letter) ? '#10b981' : '#475569')
            : 'rgba(255, 255, 255, 0.1)'}`,
        borderRadius: '8px',
        color: guessed.includes(letter) ? '#94a3b8' : '#fff',
        cursor: guessed.includes(letter) ? 'default' : 'pointer',
        fontWeight: 'bold',
        transition: 'all 0.2s'
    });

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    return (
        <div style={containerStyles}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
                <h3 style={{ margin: 0 }}>Hangman Master</h3>
                <div style={{ color: lives <= 2 ? '#ef4444' : '#10b981', fontWeight: 'bold' }}>
                    ❤️ {lives} Lives Left
                </div>
            </div>

            {status === 'playing' ? (
                <>
                    <div style={letterBoxStyles}>
                        {word.split('').map((char, i) => (
                            <span key={i} style={letterStyles}>
                                {guessed.includes(char) ? char : ''}
                            </span>
                        ))}
                    </div>

                    <div style={keyboardStyles}>
                        {alphabet.map(l => (
                            <button
                                key={l}
                                onClick={() => handleGuess(l)}
                                style={keyBtnStyles(l)}
                                disabled={guessed.includes(l)}
                            >
                                {l}
                            </button>
                        ))}
                    </div>
                </>
            ) : (
                <div style={{ padding: '2rem 0' }}>
                    <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>
                        {status === 'won' ? '🎉' : '💀'}
                    </div>
                    <h2 style={{ color: status === 'won' ? '#10b981' : '#ef4444' }}>
                        {status === 'won' ? 'YOU WIN!' : 'GAME OVER!'}
                    </h2>
                    <p style={{ margin: '1rem 0' }}>The word was: <strong>{word}</strong></p>
                    <button
                        onClick={initGame}
                        style={{
                            padding: '1rem 2.5rem',
                            background: 'var(--accent-gradient)',
                            border: 'none',
                            borderRadius: '50px',
                            color: '#fff',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            marginTop: '1rem'
                        }}
                    >
                        Play Again
                    </button>
                </div>
            )}
        </div>
    );
};

export default HangmanGame;
