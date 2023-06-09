import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='d-flex justify-content-around py-3 text-bg-dark align-items-center'>
            <div className='fs-2'>PhotoCraft Academy</div>
            <div className='fs-4'>
                <Link to="/" className='px-3 text-decoration-none text-white'>Home</Link>
                <Link to="/instructors" className='px-3 text-decoration-none text-white'>Instructors</Link>
                <Link to="/classes" className='px-3 text-decoration-none text-white'>Classes</Link>
                <Link to="/dashboard" className='px-3 text-decoration-none text-white'>Dashboard</Link>
            </div>
            <div>
                <Link to="/login"><button className='px-3 py-2 btn btn-primary rounded-lg'>Login</button></Link>
            </div>

        </div>

    );
};

export default Navbar;