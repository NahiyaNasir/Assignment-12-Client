import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import useAxiosCommon from "../../../Hooks/useAxiosCommon";
import { RiArticleLine } from "react-icons/ri";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";


const image_hosting_key=import.meta.env. VITE_IMAGE_HOSTING_API
const image_hosting_api=`https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const UpdateArticle = () => {

    const axiosCommon=useAxiosCommon()
    const axiosSecure = useAxiosSecure();

  const { id } = useParams();
//   console.log(id)
  const { register, handleSubmit,reset } = useForm();
  const { data: update = [],isLoading } = useQuery({
    queryKey: ["details"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/all-articles/${id}`
      );
   
      








          return res.data;
    },
  });
  const {
    article,
    // image,
    publisher,
    description,
    
  } = update;

  const onSubmit = async (data) => {
    // console.log(data);
    //  upload image to image bb  get the url
    const imageFile={image:data.image[0]}
    const res= await  axiosCommon.post(image_hosting_api,imageFile,{
      headers :{
          'content-type':'multipart/form-data'
      }
    })
    // console.log(res.data)
    if(res.data.success){
      const updateItem={
        article:data.article_title,
        description:data.desc,
        image:res.data.data.display_url,
  
        publisher:data.publisher,
       
   
      }
      
      const newUpdateItem=await axiosSecure.patch(`/my-articles-update/${id}`,updateItem)
    //   console.log(newUpdateItem.data)
      if(newUpdateItem.data.modifiedCount>0){
        reset()
       Swal.fire({
        position: "top-end",
        icon: "success",
        title: ' Update ',
        showConfirmButton: false,
        timer: 1500
      });
      }
    }
  }
  if(isLoading)
return<LoadingSpinner></LoadingSpinner>
  
    return (
        <div>
           <form onSubmit={handleSubmit(onSubmit)} className="bg-blue-300 my-10">
        {/*  title & publisher */}
        <div className=" md:flex gap-6 p-4">
          <label className="form-control w-full  my-4 p-2">
            <div className="label">
              <span className="label-text"> Article Title</span>
            </div>
            <input
              type="text"
              placeholder="Article Title"
              className="input input-bordered w-full "
              {...register("article_title")}
              defaultValue={article}
            />
          </label>
          <label className="form-control w-full my-4">
            <div className="label">
              <span className="label-text">Publisher</span>
            </div>
            <select
              className="select select-bordered w-full  "
              {...register("publisher")}
              defaultValue={publisher}
            >
              <option disabled selected>
                select a publisher
              </option>
              <option value="Daily Star">The Daily Star</option>
              <option value="Prothom Alo">Prothom Alo</option>
              <option value="Bangladesh Pratidin">Bangladesh Pratidin</option>
              <option value="Financial Express">The Financial Express</option>
              <option value="Dhaka"> Dhaka Tribune</option>
              <option value="kakler_konto"> Kaler Kantho</option>
              <option value="New_Age"> New Age</option>

            </select>
          </label>
        </div>

        <div className=" flex gap-6 p-2">
         
          {/* description */}
          <label className="form-control p-2 w-full">
            <div className="label">
              <span className="label-text">Description</span>
            </div>
            <textarea
              {...register("desc")}
          defaultValue={description}
              className="textarea textarea-accent h-24"
              placeholder="Description"
            ></textarea>
          </label>
        </div>

        <div className="form-control">
          <input
            {...register("image")}
            type="file"
          
            className="file-input file-input-bordered w-full max-w-xs  ml-3 my-4"
          />
        </div>

        <div className=" p-3 flex justify-center items-center">
          <button className="btn btn-wide  border-0 border-b-4 btn-outline hover:bg-[#3061AF] bg-blue-400 ">
            {" "}
           update Article <RiArticleLine className="text-xl" />{" "}
          </button>
        </div>
      </form>
        </div>
    );
};

export default UpdateArticle;



