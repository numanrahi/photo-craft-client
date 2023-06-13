import React, { useEffect, useState } from "react";
import "./TopInstructors.css";

const TopInstructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("https://assgignment-12-server.vercel.app/instructors")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);
  console.log(instructors);

  const slicedInstructors = instructors.slice(0, 6);

  return (
    <div
      className="mx-auto mb-5 w-100 bg-gray rounded-4"
      style={{ maxWidth: "1200px" }}
    >
      <div className="text-center display-2 mt-5 pb-1">
        Our best Instructors
      </div>
      <div className="text-center w-75 mx-auto pb-5">
        Meet the Passionate Leaders Guiding Our Summer School Camp Journey
      </div>
      <div className=" align-items-center p-3 rounded-3 mx-3">
        <div className="row">
          {slicedInstructors.map((single) => (
            <div
              key={single._id}
              className="col-md-6 rounded-4 col-11 p-3 m-3 mx-auto"
            >
              <div className="align-items-center justify-content-between d-flex ">
                <div className="text-white display-6 pt-2">{single.name}</div>
              </div>
              <div>
                <img
                  src={single.image}
                  alt="photo"
                  className="img-fluid w-100 custom-img rounded-3"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopInstructors;
