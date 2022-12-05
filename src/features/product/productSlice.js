import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: {},
        categoryProducts: {}
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload
        },
        setCategoryProducts: (state, action) => {
            const { categoryId, products } = action.payload
            state.categoryProducts[categoryId] = products
        },
    },
})

export const { setProducts, setCategoryProducts } = productSlice.actions

export default productSlice.reducer