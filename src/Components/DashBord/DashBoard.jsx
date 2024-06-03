import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { MdOutlinePublishedWithChanges } from "react-icons/md"
import { SlGraph } from "react-icons/sl";
import { MdOutlineArticle } from "react-icons/md";
const DashBoard = () => {
  return (
    <div>
      <aside className="flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav className="-mx-3 space-y-6 ">
            <div className="space-y-3 ">
              <label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">
              Admin Route
              </label>

              <a
                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                href="#"
              >
              <SlGraph />
                <Link to="/allUser">
                  <span className="mx-2 text-sm font-medium">DashBoardPage</span>
                </Link>
              </a>

              <a
                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                href="#"
              >
                <MdOutlinePublishedWithChanges />
                <Link to="/addPublisher">
                  <span className="mx-2 text-sm font-medium"> Add Publisher</span>
                </Link>
              </a>
            </div>

            <div className="space-y-3 ">
              <a
                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                href="#"
              >
                <FaRegUser />
               
                <Link to="/allUser">
                  <span className="mx-2 text-sm font-medium">All Users</span>
                </Link>
              </a>

              <a
                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                href="#"
              >
            <MdOutlineArticle />
                <Link to="/">
                  <span className="mx-2 text-sm font-medium">All Articles</span>
                </Link>
              </a>
            </div>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default DashBoard;