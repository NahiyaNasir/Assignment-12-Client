import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProbider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user.photoURL)
  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="navbar h-16">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? " text-cyan-900 underline " : "font-mono p-2 "
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/addArticle"
              className={({ isActive }) =>
                isActive ? " text-cyan-950 underline " : "font-mono  p-2 "
              }
            >
              Add Article
            </NavLink>

            <NavLink
              to="/allArticle"
              className={({ isActive }) =>
                isActive ? " text-cyan-950 underline " : "font-mono  p-2 "
              }
            >
              All Article
            </NavLink>

            <NavLink
              to="/subscribe"
              className={({ isActive }) =>
                isActive ? " text-cyan-950 underline " : "font-mono  p-2 "
              }
            >
              Subscription
            </NavLink>
            <NavLink
              to="/myArticles"
              className={({ isActive }) =>
                isActive ? " text-cyan-950 underline " : "font-mono  p-2 "
              }
            >
              My Articles
            </NavLink>
            <NavLink
              to="/dashBoard"
              className={({ isActive }) =>
                isActive ? " text-cyan-950 underline " : "font-mono  p-2 "
              }
            >
              DashBoard
            </NavLink>

            <NavLink
              to="/premium"
              className={({ isActive }) =>
                isActive ? " text-cyan-950 underline " : "font-mono p-2 "
              }
            >
              Premium Articles
            </NavLink>
          </ul>
        </div>
        <a className=" text-xl text-blue-800">The Intercept </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? " text-cyan-900 underline " : "font-mono p-2 "
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/addArticle"
            className={({ isActive }) =>
              isActive ? " text-cyan-950 underline " : "font-mono  p-2 "
            }
          >
            Add Article
          </NavLink>

          <NavLink
            to="/allArticle"
            className={({ isActive }) =>
              isActive ? " text-cyan-950 underline " : "font-mono  p-2 "
            }
          >
            All Article
          </NavLink>
          <NavLink
            to="/subscribe"
            className={({ isActive }) =>
              isActive ? " text-cyan-950 underline " : "font-mono  p-2 "
            }
          >
            Subscription
          </NavLink>
          <NavLink
            to="/myArticles"
            className={({ isActive }) =>
              isActive ? " text-cyan-950 underline " : "font-mono  p-2 "
            }
          >
            My Articles
          </NavLink>

          <NavLink
            to="/dashBoard"
            className={({ isActive }) =>
              isActive ? " text-cyan-950 underline " : "font-mono  p-2 "
            }
          >
            DashBoard
          </NavLink>

          <NavLink
            to="/premium"
            className={({ isActive }) =>
              isActive ? " text-cyan-950 underline " : "font-mono  p-2 "
            }
          >
            Premium Articles
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
             <div className="w-14 rounded-full mt-4 ">
    <Link to="/myProfile">
    <img alt="" src={user?.photoURL }/></Link>
        </div>
            <button className="btn btn-active btn-link" onClick={handleLogOut}>
              {" "}
              Log Out
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              {" "}
              <button className="btn btn-active btn-link">Sign In</button>
            </Link>
            <Link to="/register">
              {" "}
              <button className="btn btn-active btn-link">Sign Up</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
