import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='d-flex justify-content-around p-3'>
            <div className=''>name</div>
            <div >
                <Link className='px-3 text-decoration-none'>Home</Link>
                <Link className='px-3 text-decoration-none'>Instructors</Link>
                <Link className='px-3 text-decoration-none'>Classes</Link>
                <Link className='px-3 text-decoration-none'>Dashboard</Link>
            </div>
            <div>Login</div>
        </div>
    );
};

export default Navbar;