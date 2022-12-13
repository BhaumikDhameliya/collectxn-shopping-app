import { collectionAPI } from "../utils/axios/axios.utils"

export const addToCart = async (payload) => {
    try {
        const res = await collectionAPI.post('/cart-items/add/to/cart', payload)
        console.log("res-----", res)
        return res?.data
    } catch (error) {
        console.log("error-----", error)
    }
}

export const getMyCart = async (params) => {
    try {
        const res = await collectionAPI.get('/carts/my/cart', { params })
        console.log("res-----", res)
        return res?.data
    } catch (error) {
        console.log("error-----", error)
    }
}

// export const updateCart = async (payload) => {
//     try {
//         const res = await collectionAPI.patch('/cart', payload)
//         console.log("res-----", res)
//         return res?.data
//     } catch (error) {
//         console.log("error-----", error)
//     }
// }

export const removeFromCart = async (cartItemId, payload) => {
    try {
        const res = await collectionAPI.delete(`/cart-items/remove/${cartItemId}`, payload)
        console.log("res-----", res)
        return res?.data
    } catch (error) {
        console.log("error-----", error)
    }
}