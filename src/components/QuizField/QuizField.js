import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from './Question/Question';

const QuizField = () => {
    const quizData = useLoaderData()
    //console.log(quizData.data.questions)
    const questions = quizData.data.questions;
    const [correct, setCorrect] = useState(0)
    const [incorrect, setIncorrect] = useState(0)
    return (
        <div className='container bg-success bg-opacity-10  '>
            <div className='text-center border rounded w-50 my-0 mx-auto  bg-dark bg-opacity-50 text-white p-3 '>
                <h3>Correct Answers: {correct}</h3>
                <h3>Incorrect Answers: {incorrect}</h3>
            </div>
            <div className='row'>
                {
                    questions.map(que => <Question que={que} key={que.id} setCorrect={setCorrect} correct={correct} setIncorrect={setIncorrect} incorrect={incorrect}></Question>)
                }
            </div>
        </div>
    );
};

export default QuizField;