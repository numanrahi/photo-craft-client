import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import { Navigate, useLocation } from "react-router-dom";

// const AdminRoute = ({children}) => {
//   const { user, loading } = useContext(AuthContext);
//   const { isAdmin, isAdminLoading } = useAdmin();
//   const location = useLocation();

//   if (loading || isAdminLoading) {
//     return (
//       <div>
//         {/* TODO : loading spinner */}
//         <div>Loading...........</div>
//       </div>
//     );
//   }
//   if ( isAdmin) {
//     return children;
//   }
//   return <Navigate to="/" state={{ from: location }} replace></Navigate>;
// };
const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const { isAdmin, isAdminLoading } = useAdmin();
  const location = useLocation();
  console.log(isAdmin);

  if (loading || isAdminLoading) {
    return (
      <div>
        {/* TODO : loading spinner */}
        <div>Loading...........</div>
      </div>
    );
  }
  if (isAdmin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
