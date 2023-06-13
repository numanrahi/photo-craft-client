import React, { Children, useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
  const { user, loading } = useContext(AuthContext);
  const { isAdmin, isAdminLoading } = useAdmin();
  const location = useLocation();

  if (loading) {
    return (
      <div>
        {/* TODO : loading spinner */}
        <div>Loading...........</div>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
