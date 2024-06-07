import { useForm } from "react-hook-form";
import useAxiosCommon from "../../../Hooks/useAxiosCommon";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { MdLibraryAdd } from "react-icons/md";
const image_hosting_key=import.meta.env. VITE_IMAGE_HOSTING_API
const image_hosting_api=`https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddPublisher = () => {
     const axiosCommon=useAxiosCommon()
  const { register, handleSubmit,reset} = useForm();
const axiosSecure=useAxiosSecure()
  const onSubmit = async (data) => {
    console.log(data);
    const imageFile={image:data.image[0]}
   
    const res= await axiosCommon.post(image_hosting_api,imageFile,{
        headers :{
            'content-type':'multipart/form-data'
        },
      
    })
    console.log(res.data)
    if(res.data.success){
       const publisher_name={
          name:data.publisher_name,
          image:res.data.data.display_url,
      
    }
    console.log(publisher_name)
     const allPublisher=await axiosSecure.post("/all-publisher",publisher_name)
    console.log(allPublisher)
    if(allPublisher.data.insertedId){
      reset()
      Swal.fire({
          position: "top-end",
          icon: "success",
          title: "  Publisher Added",
          showConfirmButton: false,
          timer: 1500
        });
    }
  }
}
  return (
    <div className=" flex justify-center items-center my-10">
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          Add Publisher
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="username"
              >
                Publisher Name
              </label>
              <input
                id="username"
                type="text"
                {...register("publisher_name")}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200 mb-3"
                htmlFor="emailAddress"
              >
                Publisher Logo
              </label>
              <input
                {...register("image")}
                type="file"
                className="file-input file-input-bordered w-full max-w-xs  ml-3 "
              />
            </div>

            <div className="justify-end ">
              <button className=" btn bg-[#34A4CA] rounded-md hover:bg-gray-400" type="submit">

                {" "}
           <MdLibraryAdd className="text-xl" />     Add
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddPublisher;
