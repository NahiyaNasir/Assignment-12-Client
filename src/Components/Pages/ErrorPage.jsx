import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <div className=" flex justify-center items-center  gap-5">
        <div className=" my-12">
           <img src="https://i.ibb.co/tJLbDkh/oops-404-error-with-broken-robot-concept-illustration-114360-1881.jpg" alt="" />
       
          <Link to="/">
            <button className="btn btn-warning"> Go Back</button>
          </Link>
        </div>
      </div>
        </div>
    );
};

export default ErrorPage;