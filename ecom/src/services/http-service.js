import axiosInstance from "../config/http-request";

class HttpService{
    headers = {};
    getHeaders = (config) => {
        if(config.login){
            let token = localStorage.getItem("mern15_token");
            this.headers = {
                "authorization": "Bearer "+token,
                "content-type": "application/json"
            }
        }
        if(config.files){
            this.headers ={
                ...this.headers,
                "content-type": "multipart/form-data"
            }
        }
    }
    postRequest =async (url,data,config={}) => {
        try{
            this.getHeaders(config);
            let response = await axiosInstance.post(url, data, {
                headers: this.headers
            });
            return response;
        } catch(error) {
            throw error;
        }
    }

    putRequest =async (url,data,config={}) => {
        try{
            this.getHeaders(config);
            let response = await axiosInstance.put(url, data, {
                headers: this.headers
            });
            return response;
        } catch(error) {
            throw error;
        }
    }

    getRequest = async (url, config={}) => {
        try{
            this.getHeaders(config);

            let response = await axiosInstance.get(url, {
                headers: this.headers
            });
            return response;
        } catch(error) {
            throw error;
        }
    }
    
    deleteRequest = async (url, config={}) => {
        try{
            this.getHeaders(config);

            let response = await axiosInstance.delete(url, {
                headers: this.headers
            });
            return response;
        } catch(error) {
            throw error;
        }
    }
}
export default HttpService;