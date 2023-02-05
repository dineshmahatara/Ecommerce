import { useCallback, useEffect, useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { home_svc } from "../../../services/home.service";

const ProductDetailPage = () => {
    let params = useParams();
    const [detail, setDetail] = useState();

    const getProductBySlug = useCallback(async() => {
        try {
            let response = await home_svc.getProductBySlug(params.slug);
            if(response){
                setDetail(response.result);
            }
        } catch(err) {
            console.err(err);
        }
    }, [])

    useEffect(() => {
        getProductBySlug();
    }, [getProductBySlug])
    return (<>
        <Container className="bg-light my-3 py-3">

            {
                detail  && (<>
                <Row>
                    <Col sm={12} md={6}>
                        
                    </Col>
                    <Col sm={12} md={6}>
                        <h4>{detail.name}</h4>
                        <hr/>

                        <Row>
                            <Col sm={12}>
                                {
                                    (detail.category_id?.map((item) => item.name)).join(", ")
                                }
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                {
                                    detail?.brand?.title
                                }
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} className={"text-danger"}>
                                Npr. {
                                    detail?.actual_price
                                }
                                &nbsp;&nbsp;&nbsp;
                                {
                                    detail.discount > 0 ? <>
                                        <del>Npr. {detail.price}</del> (-{detail.discount}%)
                                    </>  : ""
                                }
                            </Col>
                        </Row>
                        <Row>
                            <Form>
                                <Form.Group className="row my-3">
                                    <Col sm={12} md={4}>
                                        <Form.Control 
                                            type="number"
                                            name="qty"
                                            min={0}
                                            size={"sm"}
                                            placeholder="Enter product Qty.."
                                        />
                                    </Col>
                                    <Col sm={12} md={4}>
                                        <Button variant="warning" size="sm" type="button">
                                            Add To Cart
                                        </Button>
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Row>
                    </Col>
                </Row>
                
                <Row className="my-3">

                    <Col sm="12">
                        <h4>
                            Description
                        </h4>
                    </Col>
                    <Col sm="12" dangerouslySetInnerHTML={{__html: detail.description}}></Col>
                </Row>
                
                </>
                )
            }

        </Container>
        </>)
}

export default ProductDetailPage;