import { Row, Col } from "react-bootstrap";
import SingleProductGrid from "./single-product-grid.component";
import prod4 from "../../../assets/image/product-4.jpeg";

const ProductListGrid = ({allProduct}) => {
    console.log("allProduct", allProduct);
    return (<>
        <Row xs={1} md={4} className="g-4">
                {
                allProduct && allProduct.map((item, idx) => (
                    <Col key={idx}>
                        <SingleProductGrid 
                            product={item}
                        />
                    </Col>
                ))}
            </Row>   
    </>)
}

export default ProductListGrid;