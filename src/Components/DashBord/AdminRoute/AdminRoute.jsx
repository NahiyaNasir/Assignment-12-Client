/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProbider";
import useAdmin from "../../../Hooks/useAdmin";




const AdminProtected = ({children}) => {
    const [isAdmin,isPending]=useAdmin()
    console.log(isAdmin)
    const { user,  loading } = useContext(AuthContext);
//   console.log(user);
  const location = useLocation();
//   console.log(location.pathname);
  if (loading || isPending) {
    return <div className="flex justify-center items-center mt-6">
     <progress className="progress w-56"></progress>
    </div>
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default AdminProtected;