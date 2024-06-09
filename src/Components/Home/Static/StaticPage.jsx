
import { FaUserFriends } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa6";

import { BiSolidCrown } from "react-icons/bi";
import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../../Hooks/useAxiosCommon";
import CountUp from 'react-countup';
const StaticPage = () => {
const axiosCommon=useAxiosCommon()
    const {data:usersStatic=[]}=useQuery({
        queryKey:["user"],
        queryFn:async()=>{
         const res=await axiosCommon.get("/users-static")
         console.log(res.data)
         return res.data
        }
    })
    return (
        <div className=" my-10 grid lg:grid-cols-3  grid-cols-1  gap-8 ">
         
  
          <div className="card w-96 bg-base-300 shadow-xl hover:shadow-2xl  border border-indigo-500">
  <div className="card-body ">
    <h2 className="card-title text-sky-600"> All Users <FaUserFriends className="text-sky-400 text-xl"></FaUserFriends></h2>
        
   <CountUp start={0}     duration={3}   end={usersStatic.allUser} className="text-emerald-300 text-7xl"></CountUp>
  </div>
</div>

<div className="card w-96 bg- bg-base-300 shadow-xl hover:shadow-2xl border border-teal-300">
  <div className="card-body">
    <h2 className="card-title text-blue-700">Normal User  <FaUserCheck className="text-xl text-blue-500"></FaUserCheck></h2>
    <CountUp start={0} duration={3} end={usersStatic.normalUser} className="text-7xl text-red-400">

    </CountUp>
    
  </div>
</div>
<div className="card w-96 bg-base-300 shadow-xl hover:shadow-2xl border  border-lime-400 ">
  <div className="card-body">
    <h2 className="card-title text-yellow-600"> Premium User <BiSolidCrown className=" text-xl text-orange-500"></BiSolidCrown></h2>
<CountUp start={ 0} end={usersStatic.premiumUser} duration={2} className=" text-7xl text-lime-500">

</CountUp>
   
  </div>
</div>
        </div>
    );
};

export default StaticPage;