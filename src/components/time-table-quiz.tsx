import React, { useState, useEffect, useRef } from 'react';
import Fireworks from "./fireworks.tsx";

type Feedback = 'correct' | 'incorrect' | 'tryAgain' | 'noAttempt';
type Mode = 'multiplication' | 'division';

const TimesTableQuiz: React.FC = () => {

    const inputRef = useRef<HTMLInputElement | null>(null);

    // State for current question and answer
    const [num1, setNum1] = useState<number>(0);
    const [num2, setNum2] = useState<number>(0);
    const [userAnswer, setUserAnswer] = useState<string>('');
    const [attempts, setAttempts] = useState<number>(0);
    const [feedback, setFeedback] = useState<Feedback>('noAttempt');
    const [showAnswer, setShowAnswer] = useState<boolean>(false);

    // Tally of correct and incorrect answers
    const [correctCount, setCorrectCount] = useState<number>(0);
    const [wrongCount, setWrongCount] = useState<number>(0);

    // State for score streaks
    const [currentStreak, setCurrentStreak] = useState<number>(0);
    const [highestStreak, setHighestStreak] = useState<number>(0);

    // State for game mode
    const [mode, setMode] = useState<Mode>('multiplication');

    // Generate a new question when the component loads or the question is reset
    useEffect(() => {
        generateQuestion();
    }, [mode]);

    // Function to generate a new random question based on the mode
    const generateQuestion = () => {
        const newNum1 = Math.floor(Math.random() * 11) + 2; // Random number from 2 to 12
        const newNum2 = Math.floor(Math.random() * 11) + 2; // Random number from 2 to 12

        if (mode === 'multiplication') {
            setNum1(newNum1);
            setNum2(newNum2);
        } else {
            setNum1(newNum1 * newNum2); // Ensure num1 is a multiple of num2
            setNum2(newNum2);
        }

        setUserAnswer('');
        setAttempts(0);
        setFeedback('noAttempt');
        setShowAnswer(false);
    };

    // Function to handle answer submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const correctAnswer = mode === 'multiplication' ? num1 * num2 : num1 / num2;

        if (parseInt(userAnswer) === correctAnswer) {
            setFeedback('correct');
            setCorrectCount((prev) => prev + 1);
            setCurrentStreak((prev) => {
                const newStreak = prev + 1;
                if (newStreak > highestStreak) {
                    setHighestStreak(newStreak);
                }
                return newStreak;
            });
            // Automatically generate a new question after a brief delay
            setTimeout(() => {
                generateQuestion();
            }, 1000); // 1-second delay to show correct feedback before moving on
        } else {
            setAttempts((prev) => prev + 1);
            setUserAnswer('');
            setCurrentStreak(0); // Reset current streak on wrong answer

            if (attempts >= 1) {
                setFeedback('incorrect');
                setWrongCount((prev) => prev + 1);
                setShowAnswer(true);
            } else {
                setFeedback('tryAgain');
            }

            if (inputRef.current) {
                inputRef.current.focus();
            }
        }
    };

    // Function to reset the question after the user has seen the answer
    const handleNextQuestion = () => {
        generateQuestion();
    };

    // Function to toggle the game mode
    const toggleMode = () => {
        setMode((prevMode) => (prevMode === 'multiplication' ? 'division' : 'multiplication'));
    };

    return (
        <div className="bg-gray-600">
            <div className="min-h-screen flex flex-col items-center justify-center p-4">
                {correctCount === 10 && <Fireworks />}
                <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm text-center">
                    <h2 className="text-2xl text-red-500 font-bold mb-4">Zoe's Times Table Quiz</h2>

                    {/* Toggle button for game mode */}
                    <button
                        onClick={toggleMode}
                        className="mb-4 bg-purple-500 text-white py-2 rounded-lg w-full hover:bg-purple-600 transition duration-200"
                    >
                        Switch to {mode === 'multiplication' ? 'Division' : 'Multiplication'} Mode
                    </button>

                    {/* Display the question based on the mode */}
                    <p className="text-lg mb-4">
                        {mode === 'multiplication' ? `What is ${num1} x ${num2}?` : `What is ${num1} / ${num2}?`}
                    </p>

                    {/* Form for submitting answer */}
                    <form onSubmit={handleSubmit} className="mb-4">
                        <input
                            ref={inputRef}
                            type="number"
                            className="border p-4 rounded-lg w-full text-center mb-2"
                            placeholder="Type your answer"
                            value={userAnswer}
                            onChange={(e) => setUserAnswer(e.target.value)}
                            disabled={showAnswer}
                        />
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                            disabled={showAnswer || !userAnswer}
                        >
                            Submit
                        </button>
                    </form>

                    {/* Feedback to the user */}
                    {feedback === 'correct' && (
                        <p className="text-green-500 font-bold text-lg">Correct! 🎉</p>
                    )}
                    {feedback === 'tryAgain' && (
                        <p className="text-yellow-500 font-bold text-lg">Try Again!</p>
                    )}
                    {feedback === 'incorrect' && showAnswer && (
                        <p className="text-red-500 font-bold text-lg">
                            Wrong! The correct answer is {mode === 'multiplication' ? num1 * num2 : num1 / num2}.
                        </p>
                    )}

                    {/* Button to move to the next question after answer is revealed */}
                    {showAnswer && (
                        <button
                            onClick={handleNextQuestion}
                            className="mt-4 bg-green-500 text-white py-2 rounded-lg w-full hover:bg-green-600 transition duration-200"
                        >
                            Next Question
                        </button>
                    )}
                </div>

                {/* Tally of correct and incorrect answers */}
                <div className="mt-6 text-center text-white">
                    <p className="text-xl font-semibold">
                        Correct: <span className="text-green-500">{correctCount}</span>
                    </p>
                    <p className="text-xl font-semibold">
                        Wrong: <span className="text-red-500">{wrongCount}</span>
                    </p>
                    <p className="text-xl font-semibold">
                        Current Streak: <span className="text-yellow-500">{currentStreak}</span>
                    </p>
                    <p className="text-xl font-semibold">
                        Highest Streak: <span className="text-yellow-500">{highestStreak}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TimesTableQuiz;