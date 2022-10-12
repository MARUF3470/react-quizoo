import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
    //console.log(topic)
    const { logo, name, id, total } = topic
    return (
        <div className='col my-3'>
            <div className="card h-100">
                <img src={logo} className="card-img-top opacity-100 bg-dark" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <div className='flex-md-column-reverse flex-lg-row d-flex justify-content-between'>
                        <Link to={`home/${id}`}><button className='border-0 py-2 px-4 rounded bg-info text-white fw-semibold'>Start Quiz</button></Link>
                        <p className='fs-5 fw-semibold'>Total Questions: {total}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topic;