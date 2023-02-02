import { useCallback, useEffect, useState } from "react";
import { Col } from "react-bootstrap"
import cat1 from "../../../assets/image/cat-1.jpeg";
import { home_svc } from "../../../services/home.service";
import SingleCardGridComponent from "../../common/single-card-grid.component";

const CategoryListCardComponent = () => {
    let [category, setCategory] = useState();
    
    const getAllCats = useCallback(async() => {
        try{
            let response = await home_svc.getActiveCategories();
            if(response) {
                setCategory(response);
            }
        } catch(err) {
            console.error(err);
        }
    }, [])

    useEffect(() => {
        getAllCats();
    }, [])
    return (<>
        {
            category && category.map((item, index) => (
                <Col key={index} sm={6} md={2} className={"my-3"}>
                    <SingleCardGridComponent 
                        url={`/category/${item.slug}`}
                        title={item.name}
                        image={process.env.REACT_APP_API_URL+'/assets/'+item.image}
                    />
                </Col>
            ))
        }

    </>)
}

export default CategoryListCardComponent