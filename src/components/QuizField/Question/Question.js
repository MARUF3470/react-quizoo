import React from 'react';
import Options from './Options';

const Question = ({ que }) => {
    const { question, options, correctAnswer } = que
    console.log(que)
    let queDesign = question.split('<p>')
    queDesign = queDesign[1].split('</p>')[0]

    // console.log(que)
    return (
        <div className='col-lg-6 gap-3'>
            <div className='border rounded m-2 p-3 bg-dark text-white h-100'>
                <h4>{queDesign}</h4>
                <div >
                    {
                        options.map(option => <Options key={option.id} option={option} correctAnswer={correctAnswer}></Options>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Question;