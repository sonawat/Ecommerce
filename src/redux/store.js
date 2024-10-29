import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
const store = configureStore({
    reducer:{
        storecart : cartSlice
    }
})

export default store;