/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const ArticleCard = ({a}) => {
    // console.log(a)
   
    const {article,image,publisher,tags,
        description,_id
        }=a
    return (
        <div>
        

        

<article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm  hover:shadow-lg sm:p-6">
<p className=" absolute  mt-5 bg-white  mr-6 text-orange-400 p-2  rounded-lg">
          {tags}
        </p>
  <img
    alt=""
    src={image}
    className="h-56 w-full object-cover"
  />

  <div className="p-4 sm:p-6">
  <a href="#">
      <h3 className="text-lg font-medium text-yellow-700">
     {publisher}
      </h3>
     
    </a>
    <a href="#">
      <h3 className="text-lg font-medium text-gray-900">
     {article}
      </h3>
    </a>

    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
     {description}
    </p>

   <Link to={`/articleDetails/${_id}`}>

   <a  className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
      Find out more

      <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
        &rarr;
      </span>
    </a>
   </Link>
  </div>
</article>
        </div>
    );
};

export default ArticleCard;