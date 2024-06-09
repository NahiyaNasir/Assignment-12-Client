import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Components/AuthProvider/AuthProbider";

 const axiosSecure=axios.create({
    baseURL: "https://assignmenr-12-server.vercel.app"
 })
const useAxiosSecure = () => {
    const navigate=useNavigate()
  const {logOut}=useContext(AuthContext)
     axiosSecure.interceptors.request.use(function(config){
        const token=localStorage.getItem('access-token')
      
        //   console.log('rejected by inceptors',token)
        config.headers.authorization=`Bearer ${token}`
        return config
     },function(error){
        return Promise.reject(error)
      }
    
    )

//  add a response interceptor

  axiosSecure.interceptors.response.use(function(response){
    return response
  },async (error)=>{
   // console.log(error)
    const status=error.response.status
    console.log(error)
     if(status== 401 || status== 403){
        await logOut()
        navigate('/login')
     }
  }

)






    return axiosSecure
};

export default useAxiosSecure;