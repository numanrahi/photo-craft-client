import React from 'react';
import './InstructorCard.css'

const InstructorCard = ({ data }) => {

    const { image, email, name } = data;

    return (
        < div className="p-2" >
            <div className="row justify-content-between i-card bg-color w-100  align-items-center ">
                <div className='col-4'>
                    <img src={image} className='img-fluid custom-img' alt="image" />
                </div>
                <div className="col-8 text-end text-white">
                    <div className="fs-1 fw-light">{name}</div>
                    <div className="fs-6">Email : {email}</div>
                </div>
            </div>
        </div >
    );
};

export default InstructorCard;