import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "./reducers/cart.reducer";
import userReducer from "./reducers/user.reducer";

const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer
    }
})

export default store;