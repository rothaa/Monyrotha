import React, { useState, useEffect } from 'react';

const ALL_QUESTIONS = [
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
    },
    {
        prompt: "What is the output of print(2 ** 3)?",
        options: ["A. 6", "B. 8", "C. 9", "D. 5"],
        answer: "B"
    },
    {
        prompt: "Which data type is used to store multiple items in a single variable?",
        options: ["A. str", "B. int", "C. list", "D. float"],
        answer: "C"
    },
    {
        prompt: "How do you create a variable with the numeric value 5?",
        options: ["A. x = 5", "B. x = int(5)", "C. Both work", "D. None"],
        answer: "C"
    },
    {
        prompt: "What is the correct way to create a function in Python?",
        options: ["A. def myFunction():", "B. create myFunction():", "C. function myFunction():", "D. def:myFunction()"],
        answer: "A"
    },
    {
        prompt: "How do you insert items into a list?",
        options: ["A. add()", "B. insert()", "C. append()", "D. Both B & C"],
        answer: "D"
    },
    {
        prompt: "Which method can be used to remove any whitespace from both the beginning and the end of a string?",
        options: ["A. strip()", "B. trim()", "C. pstrip()", "D. cut()"],
        answer: "A"
    },
    {
        prompt: "Which method can be used to return a string in upper case case?",
        options: ["A. upperCase()", "B. toUpperCase()", "C. uppercase()", "D. upper()"],
        answer: "D"
    },
    {
        prompt: "Which operator is used to multiply numbers?",
        options: ["A. x", "B. *", "C. #", "D. %"],
        answer: "B"
    },
    {
        prompt: "Which operator can be used to compare two values?",
        options: ["A. =", "B. < >", "C. ==", "D. <>"],
        answer: "C"
    },
    {
        prompt: "What is a correct syntax to return the first character in a string?",
        options: ["A. x[0]", "B. x.sub(0, 1)", "C. x.get(0)", "D. x{0}"],
        answer: "A"
    },
    {
        prompt: "Which collection is ordered, changeable, and allows duplicate members?",
        options: ["A. SET", "B. DICTIONARY", "C. TUPLE", "D. LIST"],
        answer: "D"
    },
    {
        prompt: "Which collection which is unchangeable?",
        options: ["A. LIST", "B. TUPLE", "C. DICTIONARY", "D. None"],
        answer: "B"
    },
    {
        prompt: "How do you start a WHILE loop in Python?",
        options: ["A. while x > y:", "B. while (x > y)", "C. while x > y {", "D. x > y while:"],
        answer: "A"
    },
    {
        prompt: "How do you start a FOR loop in Python?",
        options: ["A. for x in y:", "B. for each x in y:", "C. for x > y:", "D. loop x in y:"],
        answer: "A"
    },
    {
        prompt: "How do you write a conditional statement in Python?",
        options: ["A. if x == 5 then:", "B. if x == 5:", "C. if (x == 5)", "D. if x = 5:"],
        answer: "B"
    },
    {
        prompt: "What is the correct syntax to output the type of a variable or object in Python?",
        options: ["A. print(typeof(x))", "B. print(type(x))", "C. print(typeOf(x))", "D. print(x.type())"],
        answer: "B"
    }
];

const QuizGame = () => {
    const [questions, setQuestions] = useState([]);
    const [currentStep, setCurrentStep] = useState(0);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    // Shuffle and pick 10 questions
    const initializeQuiz = () => {
        const shuffled = [...ALL_QUESTIONS].sort(() => 0.5 - Math.random());
        setQuestions(shuffled.slice(0, 10));
        setCurrentStep(0);
        setScore(0);
        setIsFinished(false);
        setSelectedAnswer(null);
    };

    useEffect(() => {
        initializeQuiz();
    }, []);

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
        initializeQuiz();
    };

    const containerStyles = {
        background: 'rgba(15, 23, 42, 0.9)',
        backdropFilter: 'blur(12px)',
        borderRadius: '20px',
        padding: 'clamp(1rem, 5vw, 2rem)',
        border: '1px solid rgba(236, 72, 153, 0.2)',
        textAlign: 'center',
        maxWidth: '100%',
        width: '500px',
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

    if (questions.length === 0) return null;

    if (isFinished) {
        return (
            <div style={containerStyles}>
                <h2 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>Quiz Finished!</h2>
                <div style={{ fontSize: '3rem', margin: '1.5rem 0' }}>🏆</div>
                <p style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>
                    Your Score: <span style={{ fontWeight: 'bold', color: '#10b981' }}>{score}</span> / {questions.length}
                </p>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                    {score === questions.length ? "Python Pro! 🐍✨" : score >= 7 ? "Solid Foundation! 👍" : score >= 5 ? "Good start! 📚" : "Keep Learning! 📖"}
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
