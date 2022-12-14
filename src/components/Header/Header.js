import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../favicon.png'
const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <div className='d-flex align-items-center'>
                        <img src={logo} className='img-fluid w-25' alt="" />
                        <h1>Quizoo</h1>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav text-center ">
                            <NavLink className='mx-3 text-decoration-none fw-semibold fs-4' to='/'>Home</NavLink>
                            <NavLink className='mx-3 text-decoration-none fw-semibold fs-4' to='/statistics'>Statistics</NavLink>
                            <NavLink className='mx-3 text-decoration-none fw-semibold fs-4' to='/blog'>Blog</NavLink>
                            <NavLink className='mx-3 text-decoration-none fw-semibold fs-4' to='/registration'>Registration</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;