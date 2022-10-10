import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../favicon.png'
const Header = () => {
    return (
        <div>
            <nav className="navbar bg-light text-secondary">
                <div className="container">
                    <div className='d-flex align-items-center'>
                        <img src={logo} className='img-fluid w-25' alt="" />
                        <h1>Quizoo</h1>
                    </div>
                    <div>
                        <Link className='mx-3 text-decoration-none fw-semibold fs-4' to='/'>Home</Link>
                        <Link className='mx-3 text-decoration-none fw-semibold fs-4' to='/statistics'>Statistics</Link>
                        <Link className='mx-3 text-decoration-none fw-semibold fs-4' to='/blog'>Blog</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;