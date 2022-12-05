import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'category',
    initialState: {
        categories: {},
    },
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setCategories } = counterSlice.actions

export default counterSlice.reducer