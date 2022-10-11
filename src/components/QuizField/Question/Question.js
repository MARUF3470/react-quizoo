import React from 'react';
import Options from './Options';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Question = ({ que, setCorrect, correct, setIncorrect, incorrect }) => {
    const { question, options, correctAnswer } = que
    console.log(que)
    let queDesign = question.split('<p>')
    queDesign = queDesign[1].split('</p>')[0]

    const notify = () => toast(`Correct answer is: ${correctAnswer}`);
    const showAnswer = () => {
        notify(true)
    }

    // console.log(que)
    return (
        <div className='my-2'>
            <div className='border rounded m-2 p-3 bg-dark bg-opacity-75 text-white h-100'>
                <h4>{queDesign} <FontAwesomeIcon icon={faEye} onClick={showAnswer} /> </h4>
                <ToastContainer></ToastContainer>
                <div >
                    {
                        options.map(option => <Options key={option.id} option={option} setCorrect={setCorrect} correct={correct} setIncorrect={setIncorrect} incorrect={incorrect} correctAnswer={correctAnswer}></Options>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Question;