import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import logo from '../../quiz-bg.png'

const Home = () => {
    return (
        <div>
            <div className=' border rounded p-3 d-flex align-items-center mx-3 my-4 gap-3'>
                <img src={logo} className='w-50 rounded' alt="" />
                <div>
                    <h3 className='text-secondary fs-5'>Want to be a <span className='text-uppercase'>Web-Developer</span> ? Test your knowledge about some core concept of web-development by perticipating our quizes. We hope this well increase your knowledge and also incourage you to go step forword. </h3>
                    <div className=' text-center my-5'>
                        <FontAwesomeIcon icon={faCircleChevronDown} type="button" className=' border-0 fs-1 text-info' ></FontAwesomeIcon>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;