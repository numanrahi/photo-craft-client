import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { Tooltip } from 'react-tooltip';
import {BsPersonCircle} from 'react-icons/bs';

const Navbar = () => {

    const { logout, user } = useContext(AuthContext)

    const signOut = () => {
        logout();
    };

    return (
        <div className='d-flex justify-content-around py-3 bg-dark align-items-center'>
            <div className='fs-2 text-white'>PhotoCraft</div>
            <div className='fs-4'>
                <Link to="/" className='px-3 text-decoration-none text-white'>Home</Link>
                <Link to="/instructors" className='px-3 text-decoration-none text-white'>Instructors</Link>
                <Link to="/classes" className='px-3 text-decoration-none text-white'>Classes</Link>
                <Link to="/dashboard" className='px-3 text-decoration-none text-white'>Dashboard</Link>
            </div>
            <div>
                {user ? (
                    <div className="d-flex justify-content-center align-items-center gap-3">
                        <Tooltip
                            id="my-tooltip"
                            style={{ zIndex: 100 }}
                        />
                        {user?.photoURL ? (
                            <div
                                data-tooltip-id="my-tooltip"
                                data-tooltip-content={user.displayName}
                                data-tooltip-place="top"
                            >
                                <img
                                    referrerPolicy="no-referrer"
                                    className="profile-img"
                                    src={URL}
                                    alt="profile_photo"
                                />
                            </div>
                        ) : (
                            <div>
                                <BsPersonCircle
                                    data-tooltip-id="my-tooltip"
                                    data-tooltip-content={user.email}
                                    data-tooltip-place="top"
                                    className="display-6 text-white"
                                ></BsPersonCircle>
                            </div>
                        )}
                        <div>
                            <Link
                                onClick={signOut}
                                // className="text-decoration-none btn text-white btn btn-outline-secondary rounded-0 px-5 border-3"
                                className='px-4 btn bg-color text-white rounded-lg'
                            >
                                Logout
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div>
                        <Link
                            to="/login"
                            className='px-4 btn bg-color text-white rounded-lg'
                            // className="text-decoration-none btn text-white btn btn-outline-secondary rounded-0 px-5 border-3"
                        >
                            Login
                        </Link>
                    </div>
                )}
            </div>

            {/* <div>
                <Link to="/login"><button className='px-4 btn bg-color text-white rounded-lg'>Login</button></Link>
            </div> */}

        </div>

    );
};

export default Navbar;