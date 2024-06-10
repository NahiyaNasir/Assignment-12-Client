import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Chart from "react-google-charts";




const DashBoardChart = () => {
    const axiosSecure=useAxiosSecure()
    const {data:chartData=[]}=useQuery({
        queryKey:['chartData'],
        queryFn:async()=>{
             const res= await axiosSecure.get('/publication-stats')
            //  console.log(res.data)
             return res.data
        }
    })
  const picChart=chartData.map(data=>{
    // console.log(data._id)
 return [ data._id,  data.count]
  })
//   console.log(picChart)
 picChart.unshift(['Publisher','count'])
 const data = [
    ["Year", "Articles", "payment"],
    ["2024", 1000, 400],
    ["2022", 1170, 460],
    ["2021", 660, 1120],
    ["2020", 1030, 540],
  ];
  const options={
    title:"Article By Publication"
  }
  const options2 = {
    title: "Company Performance",
    curveType: "function",
    legend: { position: "bottom" },
  };
    return (
        <div className=" flex">
<div className="w-1/2">
<Chart
  chartType="PieChart"
  data={picChart}
  width="100%"
  height="500px"
  options={
   options
  }
  legendToggle
/>
</div>
               <div className="w-1/2">
               <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={options2}
    />
                </div>        
        </div>
    );
};

export default DashBoardChart;