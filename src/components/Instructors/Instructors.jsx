import React, { useEffect, useState } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import InstructorCard from '../InstructorCard/InstructorCard';

const Instructors = () => {

    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch('https://assgignment-12-server.vercel.app/instructors')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])
    console.log(instructors);

    return (
        <div>
            <Navbar></Navbar>
            <div className="mx-auto" style={{ maxWidth: "1200px" }}>
                <div>
                    <div className="display-4 text-center my-5 text-char">
                        Our Honorable hard working instructors
                    </div>
                </div>
                <div className="row mb-5">
                    {instructors.map((data) => (
                        <InstructorCard
                            data={data}
                            key={data._id}
                        ></InstructorCard>
                    ))}
                </div>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default Instructors;