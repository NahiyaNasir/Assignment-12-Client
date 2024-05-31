import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import ErrorPage from "../Components/Pages/ErrorPage";
import Home from "../Components/Home/Home";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage/>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        }
      ]
    },
  ]);
  export default router