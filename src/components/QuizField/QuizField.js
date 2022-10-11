import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from './Question/Question';

const QuizField = () => {
    const quizData = useLoaderData()
    //console.log(quizData.data.questions)
    const questions = quizData.data.questions;
    return (
        <div className='container'>
            <div className='row'>
                {
                    questions.map(que => <Question que={que} key={que.id}></Question>)
                }
            </div>
        </div>
    );
};

export default QuizField;