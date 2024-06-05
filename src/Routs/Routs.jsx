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
import AllArticle from "../Components/DashBord/AllArticle.jsx/AllArticle";
import ProtectedRoute from "../Components/Pages/ProtectedRoute/ProtectedRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addArticle",
        element: <ProtectedRoute><AddArticle></AddArticle></ProtectedRoute>,
      },
      
      {
        path: "/all-Article",
        element: <AllArticle></AllArticle>,
      },

      {
        path: "/myProfile",
        element:<ProtectedRoute> <MyProfile></MyProfile></ProtectedRoute>,
      },
      {
        path: "/subscribePage",
        element:<ProtectedRoute> <SubscriptionPage></SubscriptionPage></ProtectedRoute>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashBoard",
    element: <DashBoard></DashBoard>,
  },
  {
    path: "allUser",
    element: <AllUser></AllUser>,
  },
  {
    path: "addPublisher",
    element: <AddPublisher></AddPublisher>,
  },
  {
    path: "/allArticles",
    element: <AllArticle></AllArticle>,
  },
]);
export default router;
