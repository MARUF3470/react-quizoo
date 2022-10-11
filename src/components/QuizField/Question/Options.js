import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Options = ({ option, correctAnswer, setCorrect, correct, setIncorrect, incorrect }) => {
    // console.log(option)
    const notify = (ans) => toast(`${ans}`);

    const answerChecker = (selectedAnswer) => {
        // console.log(selectedAnswer)
        //console.log(correctAnswer)
        if (selectedAnswer === correctAnswer) {
            let ans = 'Your ans is correct'
            notify(ans)
            setCorrect(correct + 1)
        }
        else {
            let ans = 'Not correct'
            notify(ans)
            setIncorrect(incorrect + 1)
        }
    }
    //console.log(correctAnswer)
    return (
        <div>
            <div className='border my-2 px-2 rounded py-1 btn btn-outline-secondary'>
                <input type="radio" name="option" id="" onClick={() => answerChecker(option)} /> <label className='text-white'>{option}</label>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Options;