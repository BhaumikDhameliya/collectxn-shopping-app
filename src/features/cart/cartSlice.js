import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: {},
  },
  reducers: {
    setCartData: (state, action) => {
      return { ...state, cart: action.payload }
    },
    addProductToCart: (state, action) => {
      const updatedCartItems = [...(state.cart.cartItems || []), action.payload]
      state.cart.cartItems = updatedCartItems
    },
    removeProductFromCart: (state, action) => {
      state.cart.cartItems = state.cart.cartItems?.filter((cartItem) => {
        return cartItem.id !== action.payload.id
      })
    },
    replaceCartItem: (state, action) => {
      state.cart.cartItems = state.cart.cartItems?.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          return action.payload
        }
        return cartItem
      })
    },
  },
})

export const {
  setCartData,
  addProductToCart,
  removeProductFromCart,
  replaceCartItem,
} = cartSlice.actions

export default cartSlice.reducer
