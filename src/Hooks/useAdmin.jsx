import { useContext } from "react";
import { AuthContext } from "../Components/AuthProvider/AuthProbider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useAdmin = () => {
    const {user,loading}=useContext(AuthContext)
    // console.log(user)
    const axiosSecure=useAxiosSecure()
    const {data :isAdmin,isPending}=useQuery({
        queryKey:[user?.email,'isAdmin'],
        enabled:!loading,
        queryFn: async()=>{
            const res=await axiosSecure.get(`/users/admin/${user.email}`)
            // console.log(res.data.admin)
            return res.data?.admin
        }
    })
    return [isAdmin,isPending,loading]
};

export default useAdmin;