import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import ErrorPage from "../Components/Pages/ErrorPage";
import Home from "../Components/Home/Home";
import Login from "../Components/Pages/Login";
import Register from "../Components/Pages/Register";
import AddArticle from "../Components/AddArticle/AddArticle";
import MyProfile from "../Components/MyProfile/MyProfile";
import SubscriptionPage from "../Components/Pages/SubscriptionPage";
import DashBoard from "../Components/DashBord/DashBoard";
import AllUser from "../Components/DashBord/AllUser/AllUser";
import AddPublisher from "../Components/DashBord/AddPublisher/AddPublisher";
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
          path:"/subscribePage",
          element:<SubscriptionPage></SubscriptionPage>

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
    {
    path:"dashBoard",
    element:<DashBoard></DashBoard>

    },
    {
      path:"allUser",
      element:<AllUser></AllUser>
    },
{
  path:'addPublisher',
  element:<AddPublisher></AddPublisher>

}
  ]);
  export default router