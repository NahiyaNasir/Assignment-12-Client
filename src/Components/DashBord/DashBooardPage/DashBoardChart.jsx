import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const DashBoardChart = () => {
    const axiosSecure=useAxiosSecure()
    const {data:chartData=[]}=useQuery({
        queryKey:['chartData'],
        queryFn:async()=>{
             const res= await axiosSecure.get('')
             console.log(res.data)
             return res.data
        }
    })
    // const chart=chartData.map((d)=>{
    //     return {name:d.article,value:d.
    //         postedDate}
    // })
    return (
        <div>

        </div>
    );
};

export default DashBoardChart;