import React from 'react';
import { Link } from 'react-router-dom';

const Banner = ({ img, text }) => {
    return (
        <div className="row align-items-center w-100">
            <div className="col-12 col-md-8">
                <img src={img} className="img-fluid" alt="banner" />
            </div>
            <div className="col-12 col-md-4 px-4">
                <div className="display-1 banner-text-head text-dark py-2">
                    PhotoCraft
                </div>
                <div className="fs-5 pe-2">{text}</div>
                <div>
                    <Link
                        to={"/classes"}
                        className="btn text-white bg-color my-2 rounded-2 px-5 py-2"
                    >
                        Explore Classes
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Banner;