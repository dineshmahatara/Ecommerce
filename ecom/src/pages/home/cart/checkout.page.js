import { useEffect, useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { home_svc } from "../../../services/home.service"
import {toast} from "react-toastify"
import { useNavigate } from "react-router-dom"
import { initilizeCart } from "../../../reducers/cart.reducer"
const Checkout = () => {
    let cart = useSelector((store) => {
        if(store.cart.cart) {
            return store.cart.cart
        }
    })
    
    let dispatch = useDispatch();
    let navigate = useNavigate();

    const createAnOrder = useCallback(async (cartdetail) => {
        try{
            let payload = {
                cart: cartdetail,
                discount: {
                    "discount_type": "percent",
                    "amount": 0
                },
                "service_charge": 0,
                "delivery_charge": 0,
                "is_paid": false,
                "transaction_code": null
            }
            let order_response = await home_svc.createOrder(payload);
            if(order_response){
                // trigger payment gateway 

                toast.success(order_response.msg)
                localStorage.removeItem("cart");
                dispatch(initilizeCart());
                navigate('/customer')
            } else {
                toast.error("Sorry! Your order could not be placed.")
                navigate("/cart")
            }
            // payment gateway => Sucess url 
            // from success response receive transaction_code 
            // current order update 
        } catch(err){

        }
    },[])
    
    useEffect(() => {
        if(cart && cart.length) {
            createAnOrder(cart)
        }
    }, [cart])
    
    return (<>
    
    </>)
}
export default Checkout