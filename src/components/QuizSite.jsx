import React, { useState } from 'react';
import HistoricalFacts from './HistoricalFacts';

const quizQuestions = [
    {
        question: 'У якому році Україна оголосила свою незалежність від Радянського Союзу?',
        options: ['1989', '1990', '1991', '1992'],
        answer: '1991'
    },
    {
        question: 'Хто був першим Президентом незалежної України?',
        options: ['Леонід Кравчук', 'Віктор Ющенко', 'Леонід Кучма', 'Віктор Янукович'],
        answer: 'Леонід Кравчук'
    },
    {
        question: 'Де знаходиться найбільший державний прапор України?',
        options: ['На Хрещатику в Києві', 'На Софійській площі в Києві', 'На Майдані Незалежності в Києві', 'На Михайлівській площі в Києві'],
        answer: 'На Майдані Незалежності в Києві'
    },
    {
        question: 'Яка з наведених осіб є головою Української Держави в 1918 році?',
        options: ['Петро Порошенко', 'Володимир Зеленський', 'Павло Скоропадський', 'Арсеній Яценюк'],
        answer: 'Павло Скоропадський'
    },
];

const QuizSite = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [showFacts, setShowFacts] = useState(false);

    const handleAnswerOptionClick = (selectedAnswer) => {
        if (selectedAnswer === quizQuestions[currentQuestion].answer) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < quizQuestions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
    };

    const toggleFacts = () => {
        setShowFacts(!showFacts);
    };

    return (
        <div>
            {showScore ? (
                <div className="score-section">
                    <h2>Ваш результат: {score} із {quizQuestions.length}</h2>
                    <button onClick={restartQuiz}>Почати знову</button>
                </div>
            ) : (
                <div className="quiz-section">
                    <h2>{quizQuestions[currentQuestion].question}</h2>
                    <div className="options">
                        {quizQuestions[currentQuestion].options.map((option, index) => (
                            <button key={index} onClick={() => handleAnswerOptionClick(option)}>
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            )}
            <button onClick={toggleFacts}>
                {showFacts ? 'Приховати факти' : 'Показати цікаві факти'}
            </button>
            {showFacts && <HistoricalFacts />}
        </div>
    );
};

export default QuizSite;
