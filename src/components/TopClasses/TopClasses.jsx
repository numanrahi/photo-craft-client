import React, { useEffect, useState } from 'react';

const TopClasses = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('classes.json')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])
    console.log(classes);
    return (
        <div className="mx-auto mb-5 w-100" style={{ maxWidth: "1200px" }}>
            <div className="text-center display-1 mt-5 pb-1 text-two">
                Visit our top Photography classes
            </div>
            <div className="text-center w-75 mx-auto pb-5">
                Embark on a Journey of Visual Storytelling: Join Our Photography Summer Camp and Develop Your Artistic Expression!
            </div>
            <div className=" align-items-center p-5 rounded-3 mx-3">
                <div className='row'>
                    {classes.map((single) => (
                        <div key={single.id} className="col-md-6 col-11 p-3 mx-auto">
                            <div className="align-items-center justify-content-between d-flex ">
                                <div className="text-two display-6 pt-2">
                                    {single.name}
                                </div>
                                <div className="text-two display-6">
                                    {single.student} students
                                </div>
                            </div>
                            <div>
                                <img
                                    src={single.image}
                                    alt="photo"
                                    className="img-fluid w-100 custom-img rounded-3"
                                />
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>

            {/* <div className="row align-items-center card-toy p-5 rounded-3 mx-3">
                <div className="col-11 col-md-6 mx-auto">
                    {classes.map((single) => (
                        <div key={single.id} className="top-card">
                            <div className="d-flex align-items-center justify-content-between px-2">
                                <div className="text-two display-5 pt-2">
                                    {single.name}
                                </div>
                                <div className="text-two display-6">
                                    {single.student} students
                                </div>
                            </div>
                            <div className='col-11 col-md-6 mx-auto'>
                                <img
                                    src={single.image}
                                    alt="photo"
                                    className="img-fluid rounded-3"
                                />
                            </div>

                        </div>
                    ))}
                </div>
            </div> */}
        </div>
    );
};

export default TopClasses;