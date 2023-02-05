import { useCallback, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { home_svc } from "../../../services/home.service";
import ProductListGrid from "../../../components/home/product/list-product-grid.component";

const CategoryDetail = () => {
    let params = useParams();
    let [category, setCategory] = useState();
    let [productList, setProductList] = useState();

    const getProductsByCatSlug = useCallback(async() => {
        try{
            let res = await home_svc.productsByCatSlug(params.slug);
            if(res.status) {
                setCategory(res.result.category);
                setProductList(res.result.products);
            }
        } catch(err) {
            console.error(err);
        }
    }, [])
    useEffect(() => {
        getProductsByCatSlug();
    },[getProductsByCatSlug])
    return (<>
        <Container className="bg-light my-3 py-3">
            {
                category ? <>
                <Row>
                    <Col>
                        <h4>Category Detail of <em>"{category.name}"</em></h4>
                    </Col>
                </Row>
                <ProductListGrid 
                    allProduct={productList}
                />
                </> :  <>....</>
            }
        </Container>
    </>)
}
export default CategoryDetail;