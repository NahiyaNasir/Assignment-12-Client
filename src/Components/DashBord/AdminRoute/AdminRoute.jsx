/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProbider";
import useAdmin from "../../../Hooks/useAdmin";
import LoadingSpinner from "../../Pages/LoadingSpinner/LoadingSpinner";




const AdminProtected = ({children}) => {
    const [isAdmin,isPending]=useAdmin()
    // console.log(isAdmin)
    const { user,  loading } = useContext(AuthContext);
//   console.log(user);
  const location = useLocation();
//   console.log(location.pathname);
  if (loading || isPending) {
    return <LoadingSpinner></LoadingSpinner>
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default AdminProtected;