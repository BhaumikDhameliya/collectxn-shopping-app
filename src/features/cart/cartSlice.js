import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: {}
    },
    reducers: {
        setCartData: (state, action) => {
            state.cart = action.payload
        },
    },
})

export const { setCartData } = cartSlice.actions

export default cartSlice.reducer