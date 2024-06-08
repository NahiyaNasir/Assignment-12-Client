import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../../Hooks/useAxiosCommon";
import LoadingSpinner from "../../Pages/LoadingSpinner/LoadingSpinner";
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination ,Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
const Slider = () => {
    const axiosCommon=useAxiosCommon()
    //    treading article
    const{data:trendingArticle=[],isLoading}=useQuery({
        queryKey:['treadingArticle'],
        queryFn:async()=>{
            const res=await axiosCommon.get("/trending-article")
            // console.log(res.data)
            return res.data
        }
      })
      if(isLoading)
        return<LoadingSpinner></LoadingSpinner>
    return (
        <div className=" ">
        

            <Swiper
        // pagination={{
        //   type: 'fraction',
        // }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        navigation={true}
        modules={[Pagination, Navigation,Autoplay]}
        className="mySwiper"
      >

        {
            trendingArticle.map(article=>  


                
            <SwiperSlide key={article._id}> <div>
                 <p><strong>Title</strong> {article.article}</p>
                 <img
                alt=""
                src={article.image}
                className=" h-auto w-full object-cover"
              />
               
            </div>
            </SwiperSlide>)
        }
     
      </Swiper>

        


    
        </div>
    );
};

export default Slider;