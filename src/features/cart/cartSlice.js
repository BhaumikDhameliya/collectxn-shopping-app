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
        addProductToCart: (state, action) => {
            state.cart.cartItems.push(action.payload)
        },
        removeProductFromCart: (state, action) => {
            state.cart.cartItems = state.cart.cartItems?.filter(cartItem => {
                return cartItem.id !== action.payload.id
            })
        }
    },
})

export const { setCartData, addProductToCart, removeProductFromCart } = cartSlice.actions

export default cartSlice.reducer