import SliderComponent from "../slider.component"
import { useState, useEffect } from "react";
import { home_svc } from "../../../services/home.service";
const HomePageBanner = () => {
    let [banner, setBanner] = useState();   

    const getActiveBanners = async () => {
        // TODO: API Call to get banners
        try{
            let response = await home_svc.listAllBanners();
            setBanner(response);
        } catch(err) {
            console.error(err);
        }
    }


    useEffect(() => {
        getActiveBanners();
    }, [])
    return (<>
        <SliderComponent 
            data={banner}
            loading={false}
        />
    </>)
}
export default HomePageBanner