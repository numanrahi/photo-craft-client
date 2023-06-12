import React, { useEffect, useState } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import ClassesCard from '../ClassesCard/ClassesCard';

const Classes = () => {

    const [classes, setClasses] = useState([])

    useEffect(() => {
        fetch('classes.json')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])
    console.log(classes);



    return (
        <div>
            <Navbar></Navbar>
            <div className="mx-auto" style={{ maxWidth: "1200px" }}>
                <div>
                    <div className="display-4 text-center my-5 text-char">
                        Our All Classes
                    </div>
                </div>
                <div className="row mb-5">
                    {classes.map((data) => (
                        <ClassesCard
                            data={data}
                            key={data.id}
                        ></ClassesCard>
                    ))}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Classes;