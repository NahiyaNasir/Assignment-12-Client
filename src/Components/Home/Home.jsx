import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../Hooks/useAxiosCommon";
import AllPublisher from "./AllPublisher/AllPublisher";
import Plan from "./Plane/Plan";
import Slider from "./Slider/Slider";
import StaticPage from "./Static/StaticPage";



const Home = () => {
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



              <div  className=" grid  lg:grid-cols-3 grid-cols-1  gap-6">
{
    publisher.map(p=><AllPublisher key={p._id} p={p}></AllPublisher>)
}

             
              </div>
              <div>
                <StaticPage></StaticPage>
              </div>
            <Plan></Plan>
        </div>
    );
};

export default Home;