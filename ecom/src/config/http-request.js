import axios from "axios";
import { toast } from "react-toastify";

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 30000,
    timeoutErrorMessage: "Server timed out...",
    headers: {
        "content-type": "application/json"
    }
});


// api ===> Success, failed
// 2X response status ===> success 
// 400, 422, 403, 404, 401

axiosInstance.interceptors.response.use(
    (response) => {
        return response.data;
}, (error)=>{
    
    if(error.response.status === 401) {
        // needs a logout 
        localStorage.removeItem('mern15_token');
        localStorage.removeItem("mern15_user");
        window.location.href = "/login";
    } else if(
        error.response.status === 404 
        || error.response.status === 403
    ) {
        toast.error(error.response.data.msg);
    } else {
        throw error
    }
});

export default axiosInstance