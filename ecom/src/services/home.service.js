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

    productsByCatSlug = async (slug) => {
        try {
            let detail = await this.getRequest('/category/'+slug);
            return detail;
        } catch(err) {
            throw err
        }
    }

    getProductBySlug = async (slug) => {
        try {
            let detail = await this.getRequest('/product/byslug/'+slug);
            return detail;
        } catch(err) {
            throw err
        }
    }
    getCartDetail = async(cart) => {
        try {
            let detail = await this.postRequest('/order/detail', {cart});
            return detail;
        } catch(err) {
            throw err;
        }
    }

    createOrder = async(payload) => {
        try{
            let detail = await this.postRequest('/order', payload, {login: true});
            if(detail) {
                return detail
            } else {
                throw detail
            }
        } catch(err) {
            throw err;
        }
    }
}

export const home_svc = new HomeService();
export default HomeService;