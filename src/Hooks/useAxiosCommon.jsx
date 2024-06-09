import axios from "axios";

const axiosCommon=axios.create({
    baseURL:'https://assignmenr-12-server.vercel.app'
})
const useAxiosCommon = () => {
    return axiosCommon
};

export default useAxiosCommon;