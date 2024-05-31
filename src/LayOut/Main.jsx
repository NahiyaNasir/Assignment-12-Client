import { Outlet } from "react-router-dom";
import NavBar from "../Components/Home/NavBar/NavBar";
import Footer from "../Components/Home/Footer/Footer";


const Main = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;