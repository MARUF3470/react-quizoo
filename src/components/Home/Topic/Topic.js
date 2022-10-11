import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
    //console.log(topic)
    const { logo, name, id } = topic
    return (
        <div className='col my-3'>
            <div className="card h-100">
                <img src={logo} className="card-img-top opacity-100 bg-dark" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <Link to={`home/${id}`}><button>Start Quiz</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Topic;