import HttpService from "./http-service";

class HomeService extends HttpService{
    listAllBanners = async () => {
        // api call
    }
}

export const home_svc = new HomeService();
export default HomeService;