import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../favicon.png'
const Header = () => {
    return (
        <div>
            {/* <nav className="navbar bg-light text-secondary">
                <div className="container">
                    <div className='d-flex align-items-center'>
                        <img src={logo} className='img-fluid w-25' alt="" />
                        <h1>Quizoo</h1>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </nav> */}
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <div className='d-flex align-items-center'>
                        <img src={logo} className='img-fluid w-25' alt="" />
                        <h1>Quizoo</h1>
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ">
                            <Link className='mx-3 text-decoration-none fw-semibold fs-4' to='/'>Home</Link>
                            <Link className='mx-3 text-decoration-none fw-semibold fs-4' to='/statistics'>Statistics</Link>
                            <Link className='mx-3 text-decoration-none fw-semibold fs-4' to='/blog'>Blog</Link>
                            <Link className='mx-3 text-decoration-none fw-semibold fs-4' to='/registration'>Registratiion</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;