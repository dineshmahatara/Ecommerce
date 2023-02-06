import {createSlice} from "@reduxjs/toolkit"


const CartSlicer = createSlice({
    name: "Cart",
    initialState: {
        cart: null
    },
    reducers: {
        addToCart: (state, action) =>{
            // cart data fetch localstorage
            let cart = JSON.parse(localStorage.getItem("cart")) ?? [];
            let currentItem = action.payload;   // {product_id: prod_id, qty: replace}
            // console.log(currentItem);
            // either cart empty 
            if(cart.length){
                // not empty
                let index = null;
                cart.map((item, ind) =>{
                    console.log(item, currentItem);
                    if(item.product_id === currentItem.product_id){
                        index = ind;
                    }
                })
                
                if(index === null) {
                    // item does not exists in the current cart
                    cart.push(currentItem);
                } else {
                    // currentItem already present in the cart
                    if(currentItem.qty <= 0){
                        cart.splice(index, 1);
                    }  else {
                        cart[index].qty = currentItem.qty
                    }
                }
            } else {
                // empty cart
                cart.push(currentItem);
            }

            localStorage.setItem('cart', JSON.stringify(cart));
            state.cart = cart;
            // or not
        },
        initilizeCart: (state, action) => {
            state.cart = JSON.parse(localStorage.getItem("cart")) ?? [];
        }
    }
})

export const {addToCart, initilizeCart} = CartSlicer.actions;
export default CartSlicer.reducer;