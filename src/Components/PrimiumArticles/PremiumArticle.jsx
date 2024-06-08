import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import PremiumCard from "./PremiumCard";
import LoadingSpinner from "../Pages/LoadingSpinner/LoadingSpinner";


const PremiumArticle = () => {
    const axiosSecure=useAxiosSecure()
    const {data: premiumArticles=[],isLoading}=useQuery({
        queryKey:['premium'],
        queryFn: async()=>{
     const res=await axiosSecure.get(`/article-premium?status=premium`)
    //  console.log(res.data)
     return res.data
        }
    })
    if(isLoading)
        return <LoadingSpinner></LoadingSpinner>
    return (
        <div>
          
            <div className=" grid lg:grid-cols-3 md: grid-cols-2 gap-6">
                {
                    premiumArticles.map(p=><PremiumCard key={p._id} p={p}></PremiumCard>)
                }
            </div>
        </div>
    );
};

export default PremiumArticle;