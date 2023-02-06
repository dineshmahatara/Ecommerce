import { useCallback, useEffect, useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import SliderComponent from "../../../components/home/slider.component";
import { home_svc } from "../../../services/home.service";
import {useDispatch} from "react-redux";
import { addToCart } from "../../../reducers/cart.reducer";
import {toast} from "react-toastify"
const ProductDetailPage = () => {
    let params = useParams();
    const [detail, setDetail] = useState();
    const [slider, setSlider] = useState();
    const [qty, setQty] = useState(0);
    const dispatch = useDispatch();

    const getProductBySlug = useCallback(async() => {
        try {
            let response = await home_svc.getProductBySlug(params.slug);
            if(response){
                setDetail(response.result);
                let images = response.result.images.map((item) => {
                    return {
                        image: item,
                        title: response.result.title
                    }
                })
                setSlider(images);
            }
        } catch(err) {
            console.err(err);
        }
    }, [])

    useEffect(() => {
        getProductBySlug();
    }, [getProductBySlug])

    const addToCartAction = (e) => {
        e.preventDefault();
        let currentCartItem = {
            product_id: detail._id,
            qty: qty
        };
        dispatch(addToCart(currentCartItem))
        toast.success("Your cart has been updated!!")
        
    }
    return (<>
        <Container className="bg-light my-3 py-3">

            {
                detail  && (<>
                <Row>
                    <Col sm={12} md={6}>
                        <SliderComponent 
                            data={slider}
                            loading={false}
                        />
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
                            <Form.Group className="row my-3">
                                <Col sm={12} md={4}>
                                    <Form.Control 
                                        type="number"
                                        name="qty"
                                        min={0}
                                        defaultValue={qty}
                                        size={"sm"}
                                        onChange={(e) => setQty(e.target.value)}
                                        placeholder="Enter product Qty.."
                                    />
                                </Col>
                                <Col sm={12} md={4}>
                                    <Button variant="warning" size="sm" type="button" onClick={addToCartAction}>
                                        Add To Cart
                                    </Button>
                                </Col>
                            </Form.Group>
                        
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