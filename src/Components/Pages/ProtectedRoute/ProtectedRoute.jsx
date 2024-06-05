/* eslint-disable react/prop-types */





import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProbider";
const ProtectedRoute = ({children}) => {
    const {  user, loading } = useContext(AuthContext);
  console.log(user);
  const location = useLocation();
  console.log(location.pathname);
  if (loading) {
    return <div className="flex justify-center items-center mt-6">
     <progress className="progress w-56"></progress>
    </div>
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default ProtectedRoute;