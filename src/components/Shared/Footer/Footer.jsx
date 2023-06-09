import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className="bg-dark py-3 w-100">
                <div className="display-3 text-center text-white pb-2">
                    PhotoCraft
                </div>
                <div className="text-center w-75 mx-auto text-white">
                    Unleash your creativity at PhotoCraft, the ultimate summer camp for aspiring photographers!
                </div>
            </div>
            <div className="row text-white w-100 p-0 m-0">
                <div className="col-lg-6 col-12 p-5 bg-dark">
                    <div className="ms-auto" style={{ maxWidth: "600px" }}>
                        <div className="row justify-content-around">
                            <div className='col-12 col-sm-6'>
                                <div className="display-6 pb-4">Navigation</div>
                                <div>
                                    <div>
                                        <Link
                                            to="/"
                                            className="text-decoration-none text-white"
                                        >
                                            Home
                                        </Link>
                                    </div>
                                    <div>
                                        <Link
                                            to="/instructors"
                                            className="text-decoration-none text-white"
                                        >
                                            Instructors
                                        </Link>
                                    </div>
                                    <div>
                                        <Link
                                            to="/classes"
                                            className="text-decoration-none text-white"
                                        >
                                            Classes
                                        </Link>
                                    </div>
                                    <div>
                                        <Link
                                            to="/dashboard"
                                            className="text-decoration-none text-white"
                                        >
                                            Dashboard
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-sm-6'>
                                <div className="display-6 pb-4">
                                    Social Links
                                </div>
                                <div>
                                    <div>
                                        <Link
                                            to="https://github.com/numanrahi"
                                            target="_blank"
                                            className="text-decoration-none text-white"
                                        >
                                            Github
                                        </Link>
                                    </div>
                                    <div>
                                        <Link
                                            to="https://web.facebook.com/RahiX2020/"
                                            target="_blank"
                                            className="text-decoration-none text-white"
                                        >
                                            Facebook
                                        </Link>
                                    </div>
                                    <div>
                                        <Link
                                            to="https://www.linkedin.com/in/abdullah-al-numan-rahi-610611249/"
                                            target="_blank"
                                            className="text-decoration-none text-white"
                                        >
                                            LinkedIn
                                        </Link>
                                    </div>
                                    <div>
                                        <Link
                                            to="https://toyverse-rahi.web.app/main"
                                            target="_blank"
                                            className="text-decoration-none text-white"
                                        >
                                            ToyVerse
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-12 p-5 bg-dark">
                    <div className="me-auto " style={{ maxWidth: "600px" }}>
                        <div className="row justify-content-around">
                            <div className='col-12 col-sm-6'>
                                <div className="display-6 pb-4">
                                    Contact Info
                                </div>
                                <div>
                                    <div>
                                        <Link className="text-decoration-none text-white">
                                            support@photocarft.com
                                        </Link>
                                    </div>
                                    <div>
                                        <Link className="text-decoration-none text-white">
                                            +00 142 536 456
                                        </Link>
                                    </div>
                                    <div>
                                        <Link className="text-decoration-none text-white">
                                            photocarft.web.rahi/support
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-sm-6'>
                                <div className="display-6 pb-4">Address</div>
                                <div>
                                    <div>
                                        <Link className="text-decoration-none text-white">
                                            Chhatak, Sunamganj
                                        </Link>
                                    </div>
                                    <div>
                                        <Link
                                            className="text-decoration-none text-white"
                                        >
                                            South Pole , Mars,
                                        </Link>
                                    </div>
                                    <div>
                                        <Link className="text-decoration-none text-white">
                                            Proxima Centauri , Milky Way
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-dark py-2'>
                <div className='text-center text-white'> Copyright &copy; PhotoCraft | All rights reserved</div>
            </div>
        </div>
    );
};

export default Footer;