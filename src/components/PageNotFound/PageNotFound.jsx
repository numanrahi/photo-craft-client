import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className='text-center justify-content-center'>
            <div>
                <img src="https://media.istockphoto.com/id/1404059706/vector/website-page-not-found-error-404-oops-worried-robot-character-peeking-out-of-outer-space.jpg?s=612x612&w=0&k=20&c=DvPAUof9UsNuNqCJy2Z7ZLLk75qDA3bbLXOOW_50wAk=" alt="" />
            </div>
            <div>
                <button className='btn btn-secondary'>
                    <Link to="/" className='text-decoration-none text-white'>Back to Home</Link>
                </button>
            </div>
        </div>
    );
};

export default PageNotFound;