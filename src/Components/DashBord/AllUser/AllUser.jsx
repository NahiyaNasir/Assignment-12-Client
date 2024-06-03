import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AllUser = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
    //   console.log(res.data);
      return res.data;
    },
  });
  if (isLoading)
    return (
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-blue-600"></div>
    );
  const handleAdmin=(_id)=>{
    // console.log(_id)
    axiosSecure.patch(`/users/admin/${_id}`)
   .then(res=>{
// console.log(res.data)
if(res.data.modifiedCount>0){
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${_id.name} is admin now`,
        showConfirmButton: false,
        timer: 1500
      });
}
   })
  }
  return (
    <div className=" my-16">
      <div className="flex items-center justify-center  gap-x-3">
        <h2 className="text-lg font-medium text-gray-800 dark:text-white">
          Total Users
        </h2>

        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
          {users.length}
        </span>
      </div>

      <div className="flex flex-col mt-6 justify-center mx-80">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <div className="flex items-center gap-x-3 text-orange-600">
                        <input
                          type="checkbox"
                          className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                        />
                        <span>Name</span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <p className="flex items-center text-orange-600">
                        {" "}
                        User Email
                      </p>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <button className="flex items-center gap-x-2 text-orange-600">
                        <span>Role</span>
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                  {users.map((user) => (
                    <tr key={user._id}>
                      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div className="inline-flex items-center gap-x-3">
                          <input
                            type="checkbox"
                            className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                          />

                          <div className="flex items-center gap-x-2">
                            <img
                              className="object-cover w-10 h-10 rounded-full"
                              src={user.profile_photo}
                              alt=""
                            />
                            <div>
                              <h2 className="font-medium text-gray-800 dark:text-white ">
                                {user.name}
                              </h2>
                              <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                                {user.email}
                              </p>
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        {user.email}
                      </td>

                      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        {user.role==='admin'?  <p className="px-6 py-1  text-emerald-500 rounded-full dark:bg-gray-800 bg-indigo-100/60">Admin</p>:<button className="btn rounded-full bg-indigo-100" onClick={()=>handleAdmin(user._id)}>
                          Make Admin{" "}
                        </button>}
                      </td>
                    </tr>
                  ))}
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUser;
