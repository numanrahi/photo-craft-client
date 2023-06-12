import React from 'react';
import './ClassesCard.css'

const ClassesCard = ({ data }) => {

    const { name, image, instructor_name, students, seats, price } = data;

    return (
        <div className='w-50 col-6 p-3'>
            <div className='p-3 class-card'>
                <div><img src={`${image}`} className='img-fluid class-img p-2 ' alt="" /></div>
                <div>
                    <div className='fs-3'>Class Name: {name}</div>
                    <div>Instructors Name: {instructor_name}</div>
                    <div>Enrolled Students {students}</div>
                    <div>Available Seats: {seats}</div>
                    <div className='btn w-100 mx-auto text-white bg-color'>Enroll</div>
                </div>
            </div>
        </div>
    );
};

export default ClassesCard;