import React from 'react';

const Topic = ({ topic }) => {
    //console.log(topic)
    const { logo, name, id } = topic
    return (
        <div className='col my-3'>
            <div className="card h-100">
                <img src={logo} className="card-img-top opacity-100" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                </div>
            </div>
        </div>
    );
};

export default Topic;