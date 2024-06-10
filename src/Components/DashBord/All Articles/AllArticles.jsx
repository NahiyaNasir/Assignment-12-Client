import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { AiOutlineDelete } from "react-icons/ai";
import { FcApproval } from "react-icons/fc";
import { RiFileForbidLine } from "react-icons/ri";
import { LuCrown } from "react-icons/lu";

import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";


const AllArticles = () => {
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset
  } = useForm()
  const onSubmit = async (data) => {
    console.log(data)
    axiosSecure.put(`/add-article/decline/reason`).then((res) => {
      // console.log(res.data);
      if (res.data.modifiedCount > 0) {
       
       reset()
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "  The Article   is decline ",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  
  }
  const { data: allArticles = [], refetch } = useQuery({
    queryKey: ["allArticles"],
    queryFn: async () => {
      const res = await axiosSecure.get("add-article");
      //   console.log(res.data);
      return res.data;
    },
  });

  // ;
  const handleDelete = (_id) => {
    // console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/add-article/${_id}`).then((res) => {
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
  };
  const handleApprove = (_id) => {
    // console.log(_id);
    axiosSecure.put(`/add-article/${_id}/approved `).then((res) => {
      // console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "  The Article   is  Approval",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };
  const handleMakePremium = (_id) => {
    // console.log(_id)
    axiosSecure.put(`/add-article/${_id}/premium`).then((res) => {
      // console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "  The Article   is  premium",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };
  const handleDecline = (_id) => {

  
    axiosSecure.put(`/add-article/${_id}/decline/reason`).then((res) => {
      // console.log(res.data);
      if (res.data.modifiedCount > 0) {
       
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "  The Article   is decline ",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };
  
  return (
    <div>
      <section className="container px-4 mx-auto my-8">
        <div className="flex items-center gap-x-3">
          <h2 className="text-lg font-medium text-gray-800 dark:text-white">
            All Articles
          </h2>

          <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
            {allArticles.length}
          </span>
        </div>

        <div className="flex flex-col mt-6">
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
                        <div className="flex items-center gap-x-3">
                          <span>Name</span>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <button className="flex items-center gap-x-2">
                          <span>Status</span>
                        </button>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <button className="flex items-center gap-x-2">
                          <span>Article Title</span>
                        </button>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Posted Date
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Publisher
                      </th>

                      <th scope="col" className="relative py-3.5 px-4">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {allArticles.map((article) => (
                      <tr key={article._id}>
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div className="inline-flex items-center gap-x-3">
                            <div className="flex items-center gap-x-2">
                              <img
                                className="object-cover w-10 h-10 rounded-full"
                                src={article.author_photo}
                                alt=""
                              />
                              <div>
                                <h2 className="font-medium text-gray-800 dark:text-white ">
                                  {article.author_name}
                                </h2>
                                <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                                  {article.author_email}
                                </p>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>

                            <h2 className="text-sm font-normal text-emerald-500">
                              Active
                            </h2>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {article.article}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {article.postedDate}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {article.publisher}
                        </td>

                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <div className="flex items-center gap-x-6">
                            <button
                              className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500  hover:text-red-500 focus:outline-none"
                              onClick={() => handleDelete(article._id)}
                            >
                              <AiOutlineDelete className="text-xl" />
                            </button>
                            {article.status === "approved" ? (
                              <h2 className="text-sm font-bold text-emerald-500">
                                Approved
                              </h2>
                            ) : (
                              <button
                                className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500  hover:text-green-500 focus:outline-none"
                                onClick={() => handleApprove(article._id)}
                              >
                                <FcApproval className="text-xl" />
                              </button>
                            )}
                            {article.status == "declined" ? (
                              <>
                                {/* Open the modal using document.getElementById('ID').showModal() method */}
                                <button
                                  className="btn"
                                  onClick={() =>
                                    document
                                      .getElementById("my_modal_2")
                                      .showModal()
                                  }
                                >
                                  open modal
                                </button>
                                <dialog id="my_modal_2" className="modal">
                                  <div className="modal-box">
                     <form action="" onSubmit={handleSubmit(onSubmit)} >
                     <label className="form-control p-2 w-full">
            <div className="label">
              <span className="label-text">Decline Reason</span>
            </div>
            <textarea
              {...register("reason")}
              className="textarea textarea-accent h-24"
              placeholder="Description"
            ></textarea>
          </label>
          <button className="btn  border-0 border-b-4 btn-outline hover:bg-[#3061AF] bg-blue-400 ">
            {" "}
         submit {" "}
          </button>
                     </form>
                                  </div>
                                  <form
                                    method="dialog"
                                    className="modal-backdrop"
                                  >
                                    <button>close</button>
                                  </form>
                                </dialog>
                              </>
                            ) : (
                              <button
                                className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500  hover:text-red-500 focus:outline-none"
                                onClick={() => handleDecline(article._id)}
                              >
                                <RiFileForbidLine className="text-xl" />
                              </button>
                            )}
                            {article.status === "premium" ? (
                              <h2 className="text-sm font-bold text-orange-400">
                                Premium
                              </h2>
                            ) : (
                              <button
                                className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none"
                                onClick={() => handleMakePremium(article._id)}
                              >
                                <LuCrown className="text-xl" />
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllArticles;
