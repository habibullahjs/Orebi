import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
  cartItems:[]
  },
  reducers: {
   cartTotal:(state,action)=>{
        
        state.cartItems.push(action.payload)
        
        

    }
     
  }
})

export const {cartTotal} = cartSlice .actions

export default cartSlice.reducer