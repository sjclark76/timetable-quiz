import React, {useState, useEffect, useRef} from 'react';

type Feedback = 'correct' | 'incorrect' | 'tryAgain' | 'noAttempt';

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

    // Generate a new question when the component loads or the question is reset
    useEffect(() => {
        generateQuestion();
    }, []);

    // Function to generate a new random multiplication question
    const generateQuestion = () => {
        const newNum1 = Math.floor(Math.random() * 11) + 2; // Random number from 2 to 12
        const newNum2 = Math.floor(Math.random() * 11) + 2; // Random number from 2 to 12
        setNum1(newNum1);
        setNum2(newNum2);
        setUserAnswer('');
        setAttempts(0);
        setFeedback('noAttempt');
        setShowAnswer(false);
    };

    // Function to handle answer submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const correctAnswer = num1 * num2;

        if (parseInt(userAnswer) === correctAnswer) {
            setFeedback('correct');
            setCorrectCount((prev) => prev + 1);
            // Automatically generate a new question after a brief delay
            setTimeout(() => {
                generateQuestion();
            }, 1000); // 1-second delay to show correct feedback before moving on
        } else {
            setAttempts((prev) => prev + 1);
            setUserAnswer('')

            if (attempts >= 1) {
                setFeedback('incorrect');
                setWrongCount((prev) => prev + 1);
                setShowAnswer(true);
            } else {
                setFeedback('tryAgain');
            }

            if(inputRef.current){
                inputRef.current.focus();
            }
        }
    };

    // Function to reset the question after the user has seen the answer
    const handleNextQuestion = () => {
        generateQuestion();
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm text-center">
                <h2 className="text-2xl text-red-500 font-bold mb-4">Zoe's Times Table Quiz</h2>

                {/* Display the multiplication question */}
                <p className="text-lg mb-4">
                    What is {num1} x {num2}?
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
                        Wrong! The correct answer is {num1 * num2}.
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
            <div className="mt-6 text-center">
                <p className="text-xl font-semibold">
                    Correct: <span className="text-green-500">{correctCount}</span>
                </p>
                <p className="text-xl font-semibold">
                    Wrong: <span className="text-red-500">{wrongCount}</span>
                </p>
            </div>
        </div>
    );
};

export default TimesTableQuiz;