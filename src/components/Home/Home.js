import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import logo from '../../quiz-bg.png'
import { useLoaderData } from 'react-router-dom';
import Topic from './Topic/Topic';
import './Home.css'

const Home = () => {
    const loadedData = useLoaderData()
    const topics = loadedData.data;
    return (
        <div >
            <div className="card text-bg-dark header-style">
                <img src={logo} className="card-img" alt="..." />
                <div className="card-img-overlay d-flex flex-column justify-content-end">
                    <div className='text-center'>
                        <p className="card-text  fs-5">Want to be a <span className='text-uppercase'>Web-Developer</span> ? Test your knowledge about some core concept of web-development by perticipating our quizes. We hope this well increase your knowledge and also incourage you to go step forword. </p>
                        <FontAwesomeIcon icon={faCircleChevronDown} type="button" className=' border-0 fs-1 text-info' ></FontAwesomeIcon>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row row-cols-1 row-cols-md-3 '>
                    {
                        topics.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;