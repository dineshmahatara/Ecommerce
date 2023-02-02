import { useCallback, useEffect, useState } from "react";
import { home_svc } from "../../../services/home.service";
import SingleCardGridComponent from "../../common/single-card-grid.component";
import { Col } from "react-bootstrap";
const BrandCardListComponent = () => {
    const [brands, setBrands] = useState()

    const getAllBrands = useCallback(async() => {
        try {
            let response = await home_svc.listAllBrands();
            if(response){
                setBrands(response);
            }
        } catch(err) {
            console.error(err)
        }
    },[])

    useEffect(() => {
        getAllBrands()
    }, [])

    return (<>
        {
            brands && brands.map((item, index) => (
                <Col key={index} sm={6} md={2}>
                    <SingleCardGridComponent 
                        url={`/brand/${item.slug}`}
                        image={process.env.REACT_APP_API_URL+'/assets/'+item.image}
                    />
                </Col>
            ))
        }
    </>)
}

export default BrandCardListComponent;