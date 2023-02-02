import { Nav, Container, Row, Col } from "react-bootstrap"

import "./home.css";
import offerImage from "../../assets/image/offer-image.gif";
import HomePageBanner from "../../components/home/banner/home-banner.component";
import CategoryListCardComponent from "../../components/home/category/category-list-card.component";
import BrandCardListComponent from "../../components/home/brand/brand-cart-list.component";
import ProductListGrid from "../../components/home/product/list-product-grid.component";
import { useState, useEffect, useCallback } from "react";

import { home_svc } from "../../services/home.service";

const HomePage = () => {
    let [allProduct, setAllProduct] = useState();    

    const getAllProducts = useCallback(async () => {
        try {
            let response = await home_svc.getAllProduct()
            if(response) {
                setAllProduct(response)
            }
        } catch(err){
            console.error(err)
        }
    }, [],)
    

    useEffect(() => {
        getAllProducts()
    }, [])
    return (<>
        
        <HomePageBanner />

        {/* Offer */}
        <Container>
            <Row>
                <Col>
                    <Nav.Link href="/">
                        <img alt="Offer " className="img img-fluid" src={offerImage} />
                    </Nav.Link>
                </Col>
            </Row>
        </Container>
        {/* Offer ends */}

        <div className="bg-light test">
            <Container className="mt-3">
                <Row>
                    <Col>
                        <h4 className="text-center">
                            Categories
                        </h4>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <CategoryListCardComponent />
                </Row>
            </Container>
        </div>

        <Container className="my-5 bg-light py-3">
            <Row className="py-2">
                <Col>
                    <h4 className="text-center">
                        All Brands
                    </h4>
                </Col>
            </Row>
            <hr />
            <Row className="py-3">
                <BrandCardListComponent />
            </Row>
        </Container>


        <Container className="bg-light my-3">
            <Row className="py-3">
                <Col>
                    <h4>Product Lists</h4>
                </Col>
            </Row>
            <hr />

            {
                allProduct && <ProductListGrid 
                        allProduct={allProduct}
                    />
            }



           
                    
        </Container>
    </>)
}

export default HomePage;