import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Chart } from "react-google-charts";

const DashBoardChart = () => {
    const axiosSecure=useAxiosSecure()
    const {data:chartData=[]}=useQuery({
        queryKey:['chartData'],
        queryFn:async()=>{
             const res= await axiosSecure.get(`/publication-stats?publisher=Prothom Alo&publisher=Daily Star&publisher=Bangladesh Pratidin&publisher=Financial Express`)
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
{/* ,<Chart
  chartType="ScatterChart"
  data={}
  width="100%"
  height="400px"
  legendToggle
/> */}
        </div>
    );
};

export default DashBoardChart;