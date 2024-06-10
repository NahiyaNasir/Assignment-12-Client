/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const PremiumCard = ({ p }) => {
  //   console.log(p);

  
  const { image, article, description, publisher, _id } = p;
  return (
    <div>
      <img
        alt=""
        src={image}
        className="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72 "
      />

      <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4 ">
        <strong className="font-medium">{publisher}</strong>

        <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

        <p className="mt-0.5 opacity-50 sm:mt-0 hover:text-orange-500 cursor-none">
          {article}
        </p>
      </div>
      <div className="    cursor-pointer ">
        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-600">
          {description}
        </p>
      </div>
      <Link to={`/articleDetails/${_id}`}>
        <button className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-red-400">
          Find Out More
          <span
            aria-hidden="true"
            className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
          >
            &rarr;
          </span>
        </button>
      </Link>
    </div>
  );
};

export default PremiumCard;
