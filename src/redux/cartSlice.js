import { createSlice } from "@reduxjs/toolkit";
import data from "../data";
const initialState={
    cart:[],
    totalquantity:0,
    totalPrice:0,
    data:data
}
const cartSlice = createSlice({
    name:'Ani',
    initialState,
    reducers : {
        addToCart : (state,action)=>
        {  
            let a = state.cart.findIndex((item)=>item.id === action.payload.id)
            if(a>=0)
            {
                state.cart[a].qauntity = state.cart[a].qauntity+1;
            }
            else{
                state.cart.push(action.payload);
            }
        },

        removeToCart : (state,action) =>
        {
            
        state.cart = state.cart.filter((item)=>
        { 
             return item.id != action.payload.id 
        });

        },

        Increment: (state,action)=>
        {
            state.cart=state.cart.map((item)=>
            {
                if(item.id===action.payload.id)
                {
                    return {...item,qauntity:item.qauntity+1}

                }
                return item;
            })
        },
        
        Decrement : (state,action)=>
        {
            state.cart = state.cart.map((item)=>
            {
                if(item.id===action.payload.id)
                {
                    if(item.qauntity>1)
                    {
                    return {...item,qauntity:item.qauntity-1}
                    }
                    else{
                return {...item} 
                    }
                }
                return item;
            })
        },

        getTotal: (state)=>
        {
            const b = state.cart.reduce((e,f)=>
            { 
               const {price,qauntity} = f;
               var t = qauntity*price;  
               //var t = f.quantity*f.price;
               e = e + t;
               return e ;
            },0);
            state.totalPrice = b;

            const d = state.cart.reduce((h,i)=>
            {
                const {qauntity}= i;
                h= h+qauntity;
                return h;
            },0) 
            state.totalquantity = d;
        }




}})

export const {addToCart,removeToCart,Increment,Decrement,getTotal} = cartSlice.actions
export default cartSlice.reducer
