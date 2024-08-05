import { createSlice } from "@reduxjs/toolkit";

const initialState={
    products: [],
    userInfo: [],
}

export const amazonSlice = createSlice({
    name: "amazon",
    initialState,
    reducers:{
        addToCart:(state, action)=>{
            const item = state.products.find((item)=>item.id=== action.payload.id);
            if(item){
                item.quantity += action.payload.quantity
            }
            else{
                state.products.push(action.payload)
            }
        },
        clearCart:(state)=>{
            state.products = []
        },
        incrimentQuantity:(state, action)=>{
            const item = state.products.find((item)=>item.id == action.payload)
            item.quantity++
        },
        dicrimentQuantity:(state, action)=>{
            const item = state.products.find((item)=>item.id == action.payload)
            if (item.quantity == 1) {
                item.quantity = 1
            }
            else{
                item.quantity--
            }
        },
        removeItem:(state, action)=>{
          let remove =  state.products.find((item)=>item.id === action.payload);
          state.products.splice(remove, 1);
                    
        }
        },
});

export const{ addToCart, clearCart, incrimentQuantity, dicrimentQuantity} = amazonSlice.actions;
export const {removeItem} = amazonSlice.actions;
export default amazonSlice.reducer;