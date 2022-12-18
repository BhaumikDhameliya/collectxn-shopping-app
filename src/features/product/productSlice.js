import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: {},
    categoryProducts: {},
    likedProducts: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload
    },
    setCategoryProducts: (state, action) => {
      const { categoryId, products } = action.payload
      state.categoryProducts[categoryId] = products
    },
    setProductDetail: (state, action) => {
      const { productId, product } = action.payload
      state.products[productId] = product
    },
    setLikedProducts: (state, action) => {
      state.likedProducts = action.payload?.map((product) => {
        return { ...product, isLiked: true }
      })
    },
  },
})

export const {
  setProducts,
  setCategoryProducts,
  setProductDetail,
  setLikedProducts,
} = productSlice.actions

export default productSlice.reducer
