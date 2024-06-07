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

import ProtectedRoute from "../Components/Pages/ProtectedRoute/ProtectedRoute";
import AdminProtected from "../Components/DashBord/AdminRoute/AdminRoute";
import AllArticlesByUser from "../Components/AllArticle.jsx/AllArticlesByUser";
import AllArticles from "../Components/DashBord/All Articles/AllArticles";
import ArticleDetails from "../Components/Pages/ArticlesDetails/ArticleDetails";
import PremiumArticle from "../Components/PrimiumArticles/PremiumArticle";
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
        element:<AllArticlesByUser></AllArticlesByUser> ,
      },

      {
        path: "/myProfile",
        element:<ProtectedRoute> <MyProfile></MyProfile></ProtectedRoute>,
      },
      
      {
        path: "/articleDetails/:id",
        element:<ProtectedRoute> <ArticleDetails></ArticleDetails></ProtectedRoute>,

      },

      {
        path: "/subscribePage",
        element:<ProtectedRoute> <SubscriptionPage></SubscriptionPage></ProtectedRoute>,
      },
      {
        path: "/premium",
        element:<ProtectedRoute> <PremiumArticle></PremiumArticle></ProtectedRoute>,
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
    element: <AdminProtected><DashBoard></DashBoard></AdminProtected>,
  },
  {
    path: "allUser",
    element:<AdminProtected> <AllUser></AllUser></AdminProtected>,
  },
  {
    path: "addPublisher",
    element:<AdminProtected> <AddPublisher></AddPublisher></AdminProtected>,
  },
  {
    path: "/allArticles",
    element:<AdminProtected><AllArticles></AllArticles></AdminProtected>,
  },
]);
export default router;
