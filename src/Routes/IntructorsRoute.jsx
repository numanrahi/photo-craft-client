import React, { Children, useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useInstructor from "../hooks/useInstructor";

const InstructorRoute = ({children}) => {
  const { user, loading } = useContext(AuthContext);
  const { isInstructor, isInstructorLoading } = useInstructor();
  const location = useLocation();

  if (loading || isInstructorLoading) {
    return (
      <div>
        {/* TODO : loading spinner */}
        <div>Loading...........</div>
      </div>
    );
  }
  else if (isInstructor) {
    // console.log('children',children);
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default InstructorRoute;
