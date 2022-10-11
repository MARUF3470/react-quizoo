import React from 'react';

const Options = ({ option, correctAnswer }) => {
    // console.log(option)
    const answerChecker = (selectedAnswer) => {
        // console.log(selectedAnswer)
        console.log(correctAnswer)
    }
    console.log(correctAnswer)
    return (
        <div>
            <input type="radio" name="option" id="" onClick={() => answerChecker(option)} /> <label htmlFor="">{option}</label>

        </div>
    );
};

export default Options;