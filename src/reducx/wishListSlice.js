import { createSlice } from "@reduxjs/toolkit";

const wishListSlice=createSlice({
    name:"wishList",
    initialState:[],
    reducers:{
        addTowishList:(state,action)=>{
const res=state.find((item)=>{item.id ===action.payload.id})

if(!res){
    state.push(action.payload)
}
        },
        removeFromWishList: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },
    clearAllFromWishList:(state,action)=>{
       return []  
    }
    }
})
export const {addTowishList,removeFromWishList,clearAllFromWishList} =wishListSlice.actions
export default wishListSlice.reducer    