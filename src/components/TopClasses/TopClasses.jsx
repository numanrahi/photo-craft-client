import React, { useEffect, useRef, useState } from "react";

const TopClasses = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => {
        // Sort the classes based on the number of students
        const sortedClasses = data.sort((a, b) => b.students - a.students);
        // Take only the top 6 classes
        const top6Classes = sortedClasses.slice(0, 6);
        setClasses(top6Classes);
      });
  }, []);

  return (
    <div className="mx-auto mb-5 w-100" style={{ maxWidth: "1200px" }}>
      <div className="text-center display-1 mt-5 pb-1 text-two">
        Visit our top Photography classes
      </div>
      <div className="text-center w-75 mx-auto pb-5">
        Embark on a Journey of Visual Storytelling: Join Our Photography Summer
        Camp and Develop Your Artistic Expression!
      </div>
      <div className=" align-items-center p-5 rounded-3 mx-3">
        <div className="row">
          {classes.map((single) => (
            <div key={single._id} className="col-md-6 col-11 p-3 mx-auto">
              <div className="align-items-center justify-content-between d-flex ">
                <div className="text-two display-6 pt-2">{single.name}</div>
                <div className="text-two display-6">
                  {single.students} students
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopClasses;
