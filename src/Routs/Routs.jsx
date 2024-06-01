import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import ErrorPage from "../Components/Pages/ErrorPage";
import Home from "../Components/Home/Home";
import Login from "../Components/Pages/Login";
import Register from "../Components/Pages/Register";
import AddArticle from "../Components/AddArticle/AddArticle";
import MyProfile from "../Components/MyProfile/MyProfile";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage/>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"/addArticle",
          element:<AddArticle></AddArticle>
      },
        {
          path:"/myProfile",
          element:<MyProfile></MyProfile>

      },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/register",
            element:<Register></Register>
        }

      ]
    },
  ]);
  export default router