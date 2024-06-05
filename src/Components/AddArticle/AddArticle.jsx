import { useContext, useState } from "react";
import { Controller, useForm } from "react-hook-form";

import Select from "react-select";
import { RiArticleLine } from "react-icons/ri";
import useAxiosCommon from "../../Hooks/useAxiosCommon";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProbider";

const image_hosting_key=import.meta.env. VITE_IMAGE_HOSTING_API
const image_hosting_api=`https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddArticle = () => {
    const axiosCommon=useAxiosCommon()
    const axiosSecure=useAxiosSecure()
     const {user}=useContext( AuthContext)
  const [selectedOption, setSelectedOption] = useState([]);
//   console.log(" select", selectedOption);

  const options = [
    { value: "news", label: "News" },
    { value: "sports", label: "Sports" },
    { value: "entertainment", label: "Entertainment" },
    { value: "technology", label: "Technology" },
    { value: "health", label: "Health" },

  ];
  const {
    register,
    handleSubmit,
    reset,
    control,
  } = useForm();
  const onSubmit = async (data) => {
    const imageFile={image:data.image[0]}
    // console.log(data);
    const res= await axiosCommon.post(image_hosting_api,imageFile,{
        headers :{
            'content-type':'multipart/form-data'
        }
    })
    // console.log(res.data)
    if(res.data.success){
        const addArticle={
            article:data.article_title,
            description:data.desc,
            image:res.data.data.display_url,
            tags:data.tags.value,
            publisher:data.publisher,
            postedDate:new Date(),
             author_name:user?.displayName,
             author_email:user?.email,
             author_photo:user?.photoURL
            
        }
        console.log(addArticle)
        const article =await axiosSecure.post('/add-article',addArticle)
    console.log(article.data)
    if(article.data.insertedId){
        reset()
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "  The Article  Added .  Wait For Approval",
            showConfirmButton: false,
            timer: 2000
          });
    }
    }
   
  };
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
            />
          </label>
          <label className="form-control w-full my-4">
            <div className="label">
              <span className="label-text">Publisher</span>
            </div>
            <select
              className="select select-bordered w-full  "
              {...register("publisher")}
            >
              <option disabled selected>
                select a publisher
              </option>
              <option value="daily star">The Daily Star</option>
              <option value="Prothom">Prothom Alo</option>
              <option value="bangladesh">Bangladesh Pratidin</option>
              <option value="financial">The Financial Express</option>
              <option value="dhaka"> Dhaka Tribune</option>
              <option value="kakler_konto"> Kaler Kantho</option>
              <option value="new_age"> New Age</option>

            </select>
          </label>
        </div>

        <div className=" flex gap-6 p-2">
          {/* tags */}

          <label className="form-control w-full  p-2">
            <div className="label">
              <span className="label-text">Tags</span>
            </div>
            <Controller
              name="tags"
              control={control}
              defaultValue={selectedOption}
              render={({ field }) => (
                <Select
                  {...register("tags")}
                  options={options}
                  value={field.value}
                  onChange={(selectedOption) => {
                    field.onChange(selectedOption);
                    setSelectedOption(selectedOption);
                  }}
                />
              )}
            ></Controller>

            {/* <Select
              {...register("tags")}
              options={options}
              value={selectedOption}
              onChange={(selectedOption) => {
                setSelectedOption(selectedOption);
              }}
            /> */}
          </label>

          {/* description */}
          <label className="form-control p-2 w-full">
            <div className="label">
              <span className="label-text">Description</span>
            </div>
            <textarea
              {...register("desc")}
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
          <button className="btn btn-wide ">
            {" "}
            Add Article <RiArticleLine className="text-xl" />{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddArticle;
