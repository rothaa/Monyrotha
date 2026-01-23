import React, { useState } from 'react';

const QuizGame = () => {
    const questions = [
        {
            prompt: "What is the correct file extension for Python files?",
            options: ["A. .pt", "B. .py", "C. .python", "D. .txt"],
            answer: "B"
        },
        {
            prompt: "Which keyword is used to create a function in Python?",
            options: ["A. void", "B. function", "C. define", "D. def"],
            answer: "D"
        },
        {
            prompt: "Which of these is used to display text on the screen?",
            options: ["A. print()", "B. output()", "C. echo()", "D. display()"],
            answer: "A"
        },
        {
            prompt: "How do you start a comment in Python?",
            options: ["A. //", "B. /*", "C. #", "D. --"],
            answer: "C"
        }
    ];

    const [currentStep, setCurrentStep] = useState(0);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const handleAnswer = (choice) => {
        setSelectedAnswer(choice);
        const correct = choice === questions[currentStep].answer;

        if (correct) setScore(score + 1);

        setTimeout(() => {
            if (currentStep < questions.length - 1) {
                setCurrentStep(currentStep + 1);
                setSelectedAnswer(null);
            } else {
                setIsFinished(true);
            }
        }, 600);
    };

    const resetQuiz = () => {
        setCurrentStep(0);
        setScore(0);
        setIsFinished(false);
        setSelectedAnswer(null);
    };

    const containerStyles = {
        background: 'rgba(15, 23, 42, 0.9)',
        backdropFilter: 'blur(12px)',
        borderRadius: '20px',
        padding: '2rem',
        border: '1px solid rgba(236, 72, 153, 0.2)',
        textAlign: 'center',
        maxWidth: '500px',
        margin: '2rem auto',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)',
        color: '#fff'
    };

    const optionStyles = (choice) => ({
        padding: '1rem',
        margin: '0.5rem 0',
        borderRadius: '12px',
        background: selectedAnswer === choice
            ? (choice === questions[currentStep].answer ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)')
            : 'rgba(255, 255, 255, 0.05)',
        border: `1px solid ${selectedAnswer === choice
            ? (choice === questions[currentStep].answer ? '#10b981' : '#ef4444')
            : 'rgba(255, 255, 255, 0.1)'}`,
        cursor: selectedAnswer ? 'default' : 'pointer',
        transition: 'all 0.3s ease',
        textAlign: 'left',
        width: '100%',
        color: '#fff',
        fontWeight: '500'
    });

    if (isFinished) {
        return (
            <div style={containerStyles}>
                <h2 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>Quiz Finished!</h2>
                <div style={{ fontSize: '3rem', margin: '1.5rem 0' }}>🏆</div>
                <p style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>
                    Your Score: <span style={{ fontWeight: 'bold', color: '#10b981' }}>{score}</span> / {questions.length}
                </p>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                    {score === questions.length ? "Python Pro! 🐍✨" : score >= 2 ? "Solid Foundation! 👍" : "Keep Learning! 📚"}
                </p>
                <button
                    onClick={resetQuiz}
                    style={{
                        padding: '0.8rem 2rem',
                        background: 'var(--accent-gradient)',
                        border: 'none',
                        borderRadius: '50px',
                        color: '#fff',
                        fontWeight: '700',
                        cursor: 'pointer'
                    }}
                >
                    Try Again
                </button>
            </div>
        );
    }

    return (
        <div style={containerStyles}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                <span>Question {currentStep + 1} of {questions.length}</span>
                <span>Score: {score}</span>
            </div>

            <h3 style={{ marginBottom: '2rem', lineHeight: '1.5' }}>{questions[currentStep].prompt}</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {questions[currentStep].options.map((opt) => {
                    const choice = opt.charAt(0);
                    return (
                        <button
                            key={opt}
                            disabled={!!selectedAnswer}
                            onClick={() => handleAnswer(choice)}
                            style={optionStyles(choice)}
                        >
                            {opt}
                        </button>
                    )
                })}
            </div>
        </div>
    );
};

export default QuizGame;
