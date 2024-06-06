import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../Hooks/useAxiosCommon";
import AllPublisher from "./AllPublisher/AllPublisher";
import Plan from "./Plane/Plan";



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
              <div  className=" grid  lg:grid-cols-2 grid-cols-1  gap-6">
{
    publisher.map(p=><AllPublisher key={p._id} p={p}></AllPublisher>)
}

             
              </div>
            <Plan></Plan>
        </div>
    );
};

export default Home;