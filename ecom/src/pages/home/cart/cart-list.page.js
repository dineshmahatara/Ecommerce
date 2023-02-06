import { useCallback, useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { addToCart } from "../../../reducers/cart.reducer";
import { home_svc } from "../../../services/home.service";

const CartList = () => {
    let cart = useSelector((store) => {
        return store.cart.cart
    })
    let dispatch = useDispatch();

    let [cartDetail, setCartDetail] = useState();
    let getCartDetail = useCallback(async(cartDetail)=>{
        try{
            let response = await home_svc.getCartDetail(cartDetail);
            setCartDetail(response.result)
        } catch(err) {
            console.error(err);
        }
    },[])
    useEffect(() => {
        if(cart && cart.length){
            getCartDetail(cart);
        }
    },[cart])
    return (<>
        <Container className="bg-light my-3 py-3">
            <Row>
                <Col>
                    <h4>Cart List </h4>
                </Col>
            </Row>
            <hr />
            <Row>
                <Col>
                    <Table size="sm" bordered >
                        <thead className="table-dark">
                            <tr>
                                <th>Product Name</th>
                                <th>Product Price</th>
                                <th>Product Quantity</th>
                                <th>Total Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartDetail && cartDetail.map((item,indx) => (
                                    <tr key={indx}>
                                        <td>{item.product_name}</td>
                                        <td>Npr. {item.actual_price}</td>
                                        <td>
                                        <NavLink to="/" onClick={(e) => {
                                            e.preventDefault();
                                            dispatch(addToCart({product_id: item.product_id, qty: (Number(item.qty)-1)}))
                                        }} className={"btn btn-sm btn-rounded btn-warning me-1"}>
                                                <i className="fa fa-minus"></i>
                                            </NavLink>
                                            {item.qty}
                                            <NavLink to="/"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                dispatch(addToCart({product_id: item.product_id, qty: (Number(item.qty)+1)}))
                                            }}
                                            className={"btn btn-sm btn-rounded btn-warning ms-1"}>
                                                <i className="fa fa-plus"></i>
                                            </NavLink>
                                        </td>

                                        <td>Npr. {item.total_amt}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                    {
                        cart && cart.length >0 ? 
                        <NavLink to="/checkout" className={"btn btn-sm btn-success float-end"}>
                            Proceed to pay
                        </NavLink> : <></>
                    }
                </Col>
            </Row>
        </Container>
    </>)
}

export default CartList;