import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const ArticleDetails = () => {
  // const details=useLoaderData()
  const axiosSecure = useAxiosSecure();

  const { id } = useParams();

  const { data: details = [],isLoading } = useQuery({
    queryKey: ["details"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/all-articles/${id}`
      );
    //   console.log(res.data);
      return res.data;
    },
  });
   
  const {
    article,
    image,
    publisher,
    description,
    author_photo,
    author_name,
    postedDate,
  } = details;
  // eslint-disable-next-line no-unused-vars
  const { data } = useQuery({
    queryKey: ["viewCount"],
    queryFn: async () => {
      const res = await axiosSecure.patch(
        `/all-articles/${id}`
      );
    //   console.log(res.data);
      return res.data;
    },
  });
  if(isLoading)
    return <LoadingSpinner></LoadingSpinner>
  return (
    <div className=" my-12">
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white"></h1>

          <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
            <img
              className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
              src={image}
              alt=""
            />

            <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
              <p className="text-sm text-blue-500 uppercase">{publisher}</p>

              <a
                href="#"
                className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white"
              >
                {article}
              </a>

              <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                {description}
                <br />
                Welcome to our repository of insightful articles, where we delve
                into a wide spectrum of topics with depth and expertise. Our
                collection features meticulously researched and thoughtfully
                written pieces designed to inform, educate, and inspire readers
                from all walks of life. Each article is crafted by knowledgeable
                authors who bring a wealth of experience and a passion for their
                subjects. Whether you are looking to stay updated on the latest
                trends, gain deeper understanding of complex issues, or explore
                new ideas and perspectives, our articles offer valuable content
                tailored to meet your needs.
              </p>

              <div className="flex items-center mt-6">
                <img
                  className="object-cover object-center w-10 h-10 rounded-full"
                  src={author_photo}
                  alt=""
                />

                <div className="mx-4">
                  <h1 className="text-sm text-gray-700 dark:text-gray-200">
                    {author_name}
                  </h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {postedDate}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticleDetails;
