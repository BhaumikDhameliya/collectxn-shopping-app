import { configureStore } from '@reduxjs/toolkit'

import categoryReducer from '../features/category/categorySlice'
import productReducer from '../features/product/productSlice'
import userReducer from '../features/user/userSlice'

export default configureStore({
    reducer: {
        category: categoryReducer,
        user: userReducer,
        product: productReducer
    },
})