import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../Hooks/useAxiosCommon";
import AllPublisher from "./AllPublisher/AllPublisher";
import Plan from "./Plane/Plan";
import Slider from "./Slider/Slider";
import StaticPage from "./Static/StaticPage";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";
import Model from "../Model/Model";
import { Link } from "react-router-dom";



const Home = () => {
    const [showModal, setShowModal] = useState(false);
    useEffect(()=>{
        const timer = setTimeout(() => {
            setShowModal(true);
          }, 10000);
      
         
          return () => clearTimeout(timer);
  
         
    },[])
    const axiosCommon=useAxiosCommon()
    const {data:publisher=[]}=useQuery({
        
          queryKey:['publisher'],
          queryFn:async()=>{
             const res=await axiosCommon.get('/all-publisher')
            //  console.log(res.data)
            //  console.log(publisher)
             return res.data
          }
         
    })
    
    return (
        <div>
            
    
            <div>
                <Slider></Slider>
        </div>
        <div className="p-4  w-1/2 bg-base-100">
            {showModal && (
        <Model onClose={() => setShowModal(false)}>
        
          <p className="text-red-500">Don not miss out on our latest updates.</p>
          <br />
          <Link to='/subscribePage'>
            <p className=" btn btn-wide text-amber-500">Subscribe Now!!!</p>
          </Link>
          <br /> <br />
          <button onClick={() => setShowModal(false)}></button>
        </Model>
      )}
           
     
    </div>
        <div className=" text-center text-3xl my-3">
                <h1
                  style={{
                    paddingTop: "5rem",
                    margin: "auto 0",
                    fontWeight: "normal",
                  }}
                >
                  <span style={{ color: "teal", fontWeight: "bold" }}>
                    <Typewriter
                      words={[' Our Publisher']}
                      loop={5}
                      cursor
                      cursorStyle="_"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </span>{" "}
                </h1>
              </div>

              <div  className=" grid  lg:grid-cols-3 grid-cols-1  gap-6">
{
    publisher.map(p=><AllPublisher key={p._id} p={p}></AllPublisher>)
}

             
              </div>
              <div>
                <StaticPage></StaticPage>
              </div>

              <div className=" text-center text-3xl my-3">
                <h1
                  style={{
                    paddingTop: "5rem",
                    margin: "auto 0",
                    fontWeight: "normal",
                  }}
                >
                  <span style={{ color: "orange", fontWeight: "bold" }}>
                    <Typewriter
                      words={[' Our Features For  Premium Users']}
                      loop={5}
                      cursor
                      cursorStyle="_"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </span>{" "}
                </h1>
              </div>
            <Plan></Plan>
        </div>
    );
};

export default Home;