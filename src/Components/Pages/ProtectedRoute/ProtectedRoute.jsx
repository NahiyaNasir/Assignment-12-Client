/* eslint-disable react/prop-types */





import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProbider";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
const ProtectedRoute = ({children}) => {
    const {  user, loading } = useContext(AuthContext);
  // console.log(user);
  const location = useLocation();
  // console.log(location.pathname);
  if (loading) {
    return <LoadingSpinner></LoadingSpinner>
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default ProtectedRoute;