/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
// eslint-disable-next-line react/prop-types
const AllPublisher = ({ p }) => {
//   console.log(p);

  return (
    <div className=" ">
     

      <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
        <div
          className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
          style={{
            backgroundImage: `url(${p.image})`,
          }}
        ></div>

        <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
          <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
            {p.name}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default AllPublisher;
