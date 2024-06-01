import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import ErrorPage from "../Components/Pages/ErrorPage";
import Home from "../Components/Home/Home";
import Login from "../Components/Pages/Login";
import Register from "../Components/Pages/Register";
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