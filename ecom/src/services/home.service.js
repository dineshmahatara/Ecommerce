import HttpService from "./http-service";

class HomeService extends HttpService{
    listAllBanners = async () => {
        try{
            let response = await this.getRequest('/banner/active');
            if(response.status){
                return response.result
            } else {
                throw response.msg;
            }
        } catch(err) {
            throw err;
        }
    }

    listAllBrands = async () => {
        try{
            let response = await this.getRequest('/brand/active');
            if(response.status){
                return response.result
            } else {
                throw response.msg;
            }
        } catch(err) {
            throw err;
        }
    }

    getActiveCategories = async() => {
        try{
            let response = await this.getRequest('/category');
            if(response.status){
                let cat_res = response.result.filter((item) => (item.status === 'active'));
                return cat_res
            } else {
                throw response.msg;
            }
        } catch(err) {
            throw err;
        }
    }

    getAllProduct= async () => {
        try{
            let response = await this.getRequest('/product');
            if(response.status){
                let products_res = response.result.filter((item) => (item.status === 'active'));
                return products_res
            } else {
                throw response.msg;
            }
        } catch(err) {
            throw err;
        }
    }
}

export const home_svc = new HomeService();
export default HomeService;