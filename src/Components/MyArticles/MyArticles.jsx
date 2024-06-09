import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProbider";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import LoadingSpinner from "../Pages/LoadingSpinner/LoadingSpinner";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import Swal from "sweetalert2";
const MyArticles = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
//   console.log(user?.email)
  const { data: myArticles = [],isLoading,refetch } = useQuery({
    queryKey: ["my-articles", user?.email],
    
    queryFn: async () => {
     const res=await axiosSecure.get(`/my-articles-byEmail?author_email=${user?.email}`);

    //   console.log(res.data);
      return res.data;
    },
  });
  

  const handleDelete=(_id)=>{
    // console.log(_id)
    Swal.fire({
     title: "Are you sure?",
     text: "You won't be able to revert this!",
     icon: "warning",
     showCancelButton: true,
     confirmButtonColor: "#3085d6",
     cancelButtonColor: "#d33",
     confirmButtonText: "Yes, delete it!",
   })
   .then((result) => {
     if (result.isConfirmed) {
       axiosSecure.delete(`/my-articles-delete/${_id}`).then((res) => {
        //  console.log(res)
         if (res.data.deletedCount > 0) {
           refetch();
           Swal.fire({
             title: "Deleted!",
             text: "Your file has been deleted.",
             icon: "success",
           });
         }
       });
     }
   });

}
 if(isLoading)
    return<LoadingSpinner></LoadingSpinner>

   
  return <div>
   
    <div className="container p-2 mx-auto sm:p-4 text-gray-100">
	<div className=" flex items-center ">
    <h2 className="mb-4 text-2xl font-semibold leading-tight text-orange-400">My Articles</h2>
    <span className="px-3 py-1 text-xs mb-6 text-blue-600 bg-blue-100 rounded-full  dark:text-blue-400">{myArticles.length}</span>
    </div>
	<div className="overflow-x-auto">
		<table className="min-w-full text-xs">
			<colgroup>
				<col />
				<col />
				<col />
				<col />
				<col />
				<col className="w-24" />
			</colgroup>
			<thead className="bg-gray-700">
				<tr className="text-left">
					<th className="p-3">Serial No</th>
					<th className="p-3">Article title</th>
					<th className="p-3">Status</th>
          <th className="p-3">Is Premium</th>
					<th className="p-3 ">Details</th>
					<th className="p-3">Update</th>
                    <th className="p-3">Delate</th>
				</tr>
			</thead>
			<tbody>

                {
                    myArticles.map((m,idx)=><tr key={m._id} className="border-b border-opacity-20 border-gray-700 ">
                        <td className="p-3 text-slate-700">
                            <p>{idx+1}</p>
                        </td>
                        <td className="p-3 text-yellow-700">
                            <p>{m.article}</p>
                        </td>
                        <td className="p-3">
                 
                        { m.status?     <p className="text-orange-500 uppercase">{m.status}</p> : <p className="text-slate-800">Pending</p>  }
                        </td>
                       
                        <td className="p-3">
                 
                 { m.status ==='premium'?     <p className="text-emerald-400">Yes</p> : <p className="text-red-500">No</p>  }
                 </td>


                        <Link to={`/articleDetails/${m._id}`}>
                        <td className="p-3 text-right">
                            <p><FaArrowRight className=" text-gray-900 text-xl" /></p>
                        </td>
                        </Link>
                      

                       <td className="p-3 text-right">
                       <Link to={`/update/${m._id}`}>
                          <span><CiEdit  className="text-xl text-green-400"/></span>
                          </Link>
                  </td>
          

                        
                       <button onClick={()=>handleDelete(m._id)}>
                         
                       <td className="p-3 text-right">
                            
                            <span><MdDeleteOutline  className="text-xl text-red-400"/></span>
                        
                    </td>
               
                       </button>

                    </tr>)
                }
				
				
			</tbody>
		</table>
	</div>
</div>
    
    
    </div>;
};

export default MyArticles;
